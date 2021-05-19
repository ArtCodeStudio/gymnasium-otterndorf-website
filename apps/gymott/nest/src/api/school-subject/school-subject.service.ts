import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchSchoolSubject } from './types';
import {
  StrapiGqlSchoolSubjectBySlugsQuery,
  StrapiGqlSchoolSubjectBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class SchoolSubjectService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {
    /**/
  }

  public async flattens(
    subjects: StrapiGqlSchoolSubjectBySlugsQuery['subjects'],
  ): Promise<SearchSchoolSubject[]> {
    const pSchoolSubjects = subjects.map((subject) => this.flatten(subject));
    return await Promise.all(pSchoolSubjects);
  }

  public async flatten(
    subject: StrapiGqlSchoolSubjectBySlugsQuery['subjects'][0],
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

  public async list(slugs: string[] = []) {
    const vars: StrapiGqlSchoolSubjectBySlugsQueryVariables = { slugs };
    let subjects: StrapiGqlSchoolSubjectBySlugsQuery['subjects'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlSchoolSubjectBySlugsQuery>(
          'graphql/queries/school-subject-by-slugs',
          vars,
        );
      subjects = result.subjects;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(subjects)) {
      return await Promise.all(
        subjects.map((subject) => this.flatten(subject)),
      );
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug])?.[0] || null;
  }
}