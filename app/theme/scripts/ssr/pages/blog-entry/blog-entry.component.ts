import { PageComponent } from "@ribajs/ssr";
import { BlogService, GeneralService } from "../../services";
import { Section, PageHeader, replaceBodyPageClass } from "../../../common";
import pugTemplate from "./blog-entry.component.pug";

export interface Scope {
  title: string;
  sections: Section[];
  header: PageHeader | Record<string, never>;
  params: BlogEntryPageComponent["ctx"]["params"];
}

export class BlogEntryPageComponent extends PageComponent {
  public static tagName = "blog-entry-page";
  public _debug = false;
  protected autobind = true;

  protected blog = BlogService.getInstance();
  protected general = GeneralService.getInstance();

  scope: Scope = {
    title: "",
    sections: [],
    header: {},
    params: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(BlogEntryPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.scope.params = this.ctx.params;
    try {
      const post = await BlogService.getInstance().getPost(
        this.scope.params.slug
      );
      if (post) {
        this.scope.sections = await this.blog.getSections(post);
        this.scope.title = post.title;
        this.scope.header = this.blog.getPostHeader(post);
        // const sectionsObj = await this.blog.getSectionsObject(post);

        // OpenGraphService.set({
        //   title: post.title,
        //   image: sectionsObj.image,
        //   type: "article",
        //   description: settings?.description,
        //   url: nestFormatter.read(),
        // });
      }
    } catch (error) {
      this.throw(error);
    }
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
