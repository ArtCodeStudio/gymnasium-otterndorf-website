import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchTeacher } from './types';
import {
  StrapiGqlTeacherBySlugsQuery,
  StrapiGqlTeacherBySlugsQueryVariables,
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
    teachers: StrapiGqlTeacherBySlugsQuery['teachers'],
  ): Promise<SearchTeacher[]> {
    const pTeachers = teachers.map((teacher) => this.flatten(teacher));
    return await Promise.all(pTeachers);
  }

  protected getFullName(teacher: StrapiGqlTeacherDetailFragmentFragment) {
    let fullName = '';
    if (typeof teacher.first_name === 'string') {
      fullName += teacher.first_name + ' ';
    }
    if (typeof teacher.name === 'string') {
      fullName += teacher?.name;
    }

    return fullName;
  }

  public async flatten(
    teacher: StrapiGqlTeacherDetailFragmentFragment,
  ): Promise<SearchTeacher> {
    return {
      id: teacher.id,
      title: this.getFullName(teacher),
      slug: teacher.slug,
      text: await this.markdown.strip(teacher.biography),
      href: NavService.buildHref('teacher', teacher.slug),
    };
  }

  public async list(slugs: string[] = []) {
    const vars: StrapiGqlTeacherBySlugsQueryVariables = { slugs };
    let teachers: StrapiGqlTeacherBySlugsQuery['teachers'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlTeacherBySlugsQuery>(
          'graphql/queries/teacher-by-slugs',
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
    return this.list([slug])?.[0] || null;
  }
}
