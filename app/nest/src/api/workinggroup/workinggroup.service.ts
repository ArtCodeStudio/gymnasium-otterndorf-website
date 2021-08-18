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
      href: NavService.buildHref('WorkingGroup', workinggroup.slug),
    };
  }

  public async list(slugs: string[] = [], limit = 500, start = 0) {
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
          'graphql/queries/working-group-basic-by-slugs',
          vars,
        );
      workinggroups = result.workingGroups;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(workinggroups)) {
      const result = await Promise.all(
        workinggroups.map((workinggroup) => this.flatten(workinggroup)),
      );
      return result.filter((workinggroup) => !!workinggroup.href);
    }
    return null;
  }
}
