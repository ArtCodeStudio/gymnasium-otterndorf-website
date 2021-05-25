import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./sitemap.component.pug";
import {
  PageService,
  BlogService,
  SchoolSubjectService,
  GalleryService,
  MediaCenterService,
  TeacherService,
} from "../../services";
import { Awaited, replaceBodyPageClass } from "../../../common";

export interface Scope {
  title: string;
  pages: Awaited<ReturnType<PageService["list"]>>;
  blogPosts: Awaited<ReturnType<BlogService["listPosts"]>>;
  subjects: Awaited<ReturnType<SchoolSubjectService["list"]>>;
  galleries: Awaited<ReturnType<GalleryService["list"]>>;
  mediaCenters: Awaited<ReturnType<MediaCenterService["list"]>>;
  teachers: Awaited<ReturnType<TeacherService["list"]>>;
}

export class SitemapPageComponent extends PageComponent {
  public static tagName = "sitemap-page";
  public _debug = false;
  protected autobind = true;

  protected page = PageService.getInstance();
  protected blog = BlogService.getInstance();
  protected subjects = SchoolSubjectService.getInstance();
  protected gallery = GalleryService.getInstance();
  protected mediaCenter = MediaCenterService.getInstance();
  protected teacher = TeacherService.getInstance();

  scope: Scope = {
    title: "Sitemap",
    pages: [],
    blogPosts: [],
    subjects: [],
    galleries: [],
    mediaCenters: [],
    teachers: [],
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(SitemapPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async getPages() {
    try {
      this.scope.pages = await this.page.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.pages;
  }

  protected async getBlogPosts() {
    try {
      this.scope.blogPosts = await this.blog.listPosts();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.blogPosts;
  }

  protected async getSchoolSubjects() {
    try {
      this.scope.subjects = await this.subjects.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.subjects;
  }

  protected async getGalleries() {
    try {
      this.scope.galleries = await this.gallery.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.galleries;
  }

  protected async getMediaCenters() {
    try {
      this.scope.mediaCenters = await this.mediaCenter.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.mediaCenters;
  }

  protected async getTeachers() {
    try {
      this.scope.teachers = await this.teacher.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.teachers;
  }

  protected async beforeBind() {
    this.head.title = this.scope.title;

    await this.getPages();
    await this.getBlogPosts();
    await this.getSchoolSubjects();
    await this.getGalleries();
    await this.getMediaCenters();
    await this.getTeachers();

    await super.beforeBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
