import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchSchoolSubject } from './types';
import {
  StrapiGqlSchoolSubjectDetailBySlugsQuery,
  StrapiGqlSchoolSubjectDetailBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class SchoolSubjectService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {
    /**/
  }

  public async flatten(
    subject: StrapiGqlSchoolSubjectDetailBySlugsQuery['subjects'][0],
  ): Promise<SearchSchoolSubject> {
    const pTexts = subject.content
      .filter((content: any) => content.text)
      .map((content: any) => this.markdown.strip(content.text));

    const texts = await Promise.all(pTexts);

    return {
      id: subject.id,
      title: subject.title,
      slug: subject.slug,
      text: texts.join('\n'),
      href: NavService.buildHref('subject', subject.slug),
    };
  }

  public async list(slugs: string[] = [], limit = 500, start = 0) {
    const vars: StrapiGqlSchoolSubjectDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    let subjects: StrapiGqlSchoolSubjectDetailBySlugsQuery['subjects'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlSchoolSubjectDetailBySlugsQuery>(
          'graphql/queries/school-subject-basic-by-slugs',
          vars,
        );
      subjects = result.subjects;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(subjects)) {
      const result = await Promise.all(
        subjects.map((subject) => this.flatten(subject)),
      );
      return result.filter((subject) => !!subject.href);
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug], 1)?.[0] || null;
  }
}
