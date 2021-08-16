import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchWorkingGroup } from './types';
import {
  StrapiGqlWorkingGroupBasicBySlugsQuery,
  StrapiGqlWorkingGroupBasicBySlugsQueryVariables,
  StrapiGqlWorkingGroupBasicFragmentFragment,
  StrapiGqlImageFragmentFragment,
} from '../strapi/types';

@Injectable()
export class WorkingGroupService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {
    //
  }

  /**
   * Flatten blog posts for the search
   * @param posts
   */
  public async flattens(
    workinggroups: StrapiGqlWorkingGroupBasicBySlugsQuery['workingGroups'],
  ): Promise<SearchWorkingGroup[]> {
    return Promise.all(
      workinggroups.map((workinggroup) => this.flatten(workinggroup)),
    );
  }

  protected async getContentObject(
    workinggroup: StrapiGqlWorkingGroupBasicFragmentFragment,
  ) {
    const images: StrapiGqlImageFragmentFragment[] = [];
    const texts: string[] = [];
    const markdowns: string[] = [];

    for (const section of workinggroup.content) {
      switch (section.__typename) {
        case 'ComponentContentText':
          markdowns.push(section.text);
          texts.push(await this.markdown.strip(section.text));
          break;
        case 'ComponentContentImage':
          images.push(section.image);
          break;
        case 'ComponentSectionPodcastEpisode':
          // podcastEpisodes.push(section.podcast_episode);
          break;
        default:
          break;
      }
    }

    return {
      images,
      texts,
      markdowns,
    };
  }

  /**
   * Flatten entry for the search
   * @param workinggroup
   */
  public async flatten(
    workinggroup: StrapiGqlWorkingGroupBasicFragmentFragment,
  ): Promise<SearchWorkingGroup> {
    const { texts, markdowns, images } = await this.getContentObject(
      workinggroup,
    );

    return {
      id: workinggroup.id,
      title: workinggroup.title,
      slug: workinggroup.slug,
      /** Plain text without markdown */
      text: texts.join('\n'),
      /** Markdown (no HTML) */
      md: markdowns.join('\n\n'),
      images,
      href: NavService.buildHref('workinggroup', workinggroup.slug),
    };
  }

  public async listRaw(slugs: string[] | null = [], limit = 500, start = 0) {
    const vars: StrapiGqlWorkingGroupBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    let workinggroups: StrapiGqlWorkingGroupBasicBySlugsQuery['workingGroups'] =
      null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlWorkingGroupBasicBySlugsQuery>(
          'graphql/queries/working-groups-basic-by-slugs',
          vars,
        );
      workinggroups = result.workingGroups;
      if (workinggroups) {
        return workinggroups;
      }
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  public async getRaw(
    slug: string,
  ): Promise<StrapiGqlWorkingGroupBasicFragmentFragment> {
    return (await this.listRaw([slug], 1))[0] || null;
  }

  public async list(slugs: string[] | null = [], limit = 50, start = 0) {
    const workinggroups = await this.listRaw(slugs, limit, start);
    if (Array.isArray(workinggroups) && workinggroups.length > 0) {
      const result = await Promise.all(
        workinggroups.map((workinggroup) => this.flatten(workinggroup)),
      );
      return result.filter((workinggroup) => !!workinggroup.href);
    } else {
      console.warn('No working groups found!', workinggroups);
    }
    return [];
  }

  public async get(slug: string): Promise<SearchWorkingGroup | null> {
    return (await this.list([slug], 1))[0] || null;
  }
}
