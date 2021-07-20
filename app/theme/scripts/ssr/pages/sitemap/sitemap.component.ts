import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./sitemap.component.pug";
import {
  PageService,
  BlogService,
  SchoolSubjectService,
  GalleryService,
  MediaCenterService,
  TeacherService,
  PodcastService,
} from "../../services";
import { Awaited, replaceBodyPageClass } from "../../../common";

export interface Scope {
  title: string;
  pages: Awaited<ReturnType<PageService["listBasic"]>>;
  blogs: Awaited<ReturnType<BlogService["listBasic"]>>;
  blogPosts: Awaited<ReturnType<BlogService["listPostsBasic"]>>;
  subjects: Awaited<ReturnType<SchoolSubjectService["listBasic"]>>;
  galleries: Awaited<ReturnType<GalleryService["list"]>>;
  mediaCenters: Awaited<ReturnType<MediaCenterService["list"]>>;
  teachers: Awaited<ReturnType<TeacherService["listBasic"]>>;
  podcastEpisodes: Awaited<ReturnType<PodcastService["list"]>>;
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
  protected podcast = PodcastService.getInstance();

  scope: Scope = {
    title: "Sitemap",
    pages: [],
    blogs: [],
    blogPosts: [],
    subjects: [],
    galleries: [],
    mediaCenters: [],
    teachers: [],
    podcastEpisodes: [],
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

  protected async setPages() {
    try {
      this.scope.pages = await this.page.listBasic();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.pages;
  }

  protected async setBlogs() {
    try {
      this.scope.blogs = await this.blog.listBasic();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.blogs;
  }

  protected async setBlogPosts() {
    try {
      this.scope.blogPosts = await this.blog.listPostsBasic();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.blogPosts;
  }

  protected async setSchoolSubjects() {
    try {
      this.scope.subjects = await this.subjects.listBasic();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.subjects;
  }

  protected async setGalleries() {
    try {
      this.scope.galleries = await this.gallery.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.galleries;
  }

  protected async setMediaCenters() {
    try {
      this.scope.mediaCenters = await this.mediaCenter.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.mediaCenters;
  }

  protected async setTeachers() {
    try {
      this.scope.teachers = await this.teacher.listBasic();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.teachers;
  }

  protected async setPodcastEpisodes() {
    try {
      this.scope.podcastEpisodes = await this.podcast.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.podcastEpisodes;
  }

  protected async beforeBind() {
    this.head.title = this.scope.title;

    await this.setPages();
    await this.setBlogs();
    await this.setBlogPosts();
    await this.setSchoolSubjects();
    await this.setGalleries();
    await this.setMediaCenters();
    await this.setTeachers();
    await this.setPodcastEpisodes();

    await super.beforeBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
