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

  protected async getContentObject(
    workingGroup: StrapiGqlWorkingGroupBasicFragmentFragment,
  ) {
    const images: StrapiGqlImageFragmentFragment[] = [];
    const texts: string[] = [];
    const markdowns: string[] = [];

    for (const section of workingGroup.content) {
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
   * @param workingGroup
   */
  public async flatten(
    workingGroup: StrapiGqlWorkingGroupBasicFragmentFragment,
  ): Promise<SearchWorkingGroup> {
    const { texts, markdowns, images } = await this.getContentObject(
      workingGroup,
    );

    return {
      id: workingGroup.id,
      title: workingGroup.title,
      slug: workingGroup.slug,
      /** Plain text without markdown */
      text: texts.join('\n'),
      /** Markdown (no HTML) */
      md: markdowns.join('\n\n'),
      images,
      href: NavService.buildHref('WorkingGroup', workingGroup.slug),
    };
  }

  public async list(slugs: string[] = [], limit = 500, start = 0) {
    const vars: StrapiGqlWorkingGroupBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    let workingGroups: StrapiGqlWorkingGroupBasicBySlugsQuery['workingGroups'] =
      null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlWorkingGroupBasicBySlugsQuery>(
          'graphql/queries/working-group-basic-by-slugs',
          vars,
        );
      workingGroups = result.workingGroups;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(workingGroups)) {
      const result = await Promise.all(
        workingGroups.map((workingGroup) => this.flatten(workingGroup)),
      );
      return result.filter((workingGroup) => !!workingGroup.href);
    }
    return null;
  }
}
