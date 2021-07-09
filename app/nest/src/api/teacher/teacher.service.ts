import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchTeacher } from './types';
import {
  StrapiGqlTeacherDetailBySlugsQuery,
  StrapiGqlTeacherDetailBySlugsQueryVariables,
  StrapiGqlTeacherDetailFragmentFragment,
} from '../strapi/types';

@Injectable()
export class TeacherService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {
    /**/
  }

  public async flattens(
    teachers: StrapiGqlTeacherDetailBySlugsQuery['teachers'],
  ): Promise<SearchTeacher[]> {
    const pTeachers = teachers.map((teacher) => this.flatten(teacher));
    return await Promise.all(pTeachers);
  }

  public async flatten(
    teacher: StrapiGqlTeacherDetailFragmentFragment,
  ): Promise<SearchTeacher> {
    return {
      id: teacher.id,
      title: teacher.name,
      slug: teacher.slug,
      text: await this.markdown.strip(teacher.biography),
      href: NavService.buildHref('teacher', teacher.slug),
    };
  }

  public async list(slugs: string[] = [], limit = 500, start = 0) {
    const vars: StrapiGqlTeacherDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    let teachers: StrapiGqlTeacherDetailBySlugsQuery['teachers'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlTeacherDetailBySlugsQuery>(
          'graphql/queries/teacher-detail-by-slugs',
          vars,
        );
      teachers = result.teachers;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(teachers)) {
      const result = await Promise.all(
        teachers.map((teacher) => this.flatten(teacher)),
      );
      return result.filter((teacher) => !!teacher.href);
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug], 1)?.[0] || null;
  }
}
