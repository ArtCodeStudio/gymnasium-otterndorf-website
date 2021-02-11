import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./pages.component.pug";
import { PageService } from "../../services/page";

export interface Scope {
  title: string;
  contents: PageContent[];
  params: PagesPageComponent["ctx"]["params"];
  assets: any[];
  blogEntries: any[];
}

enum PageContentType {
  Text,
  Image,
}

export abstract class PageContent {
  public type: PageContentType;

  constructor(type: PageContentType) {
    this.type = type;
  }

  public abstract template(): string;
}

export class PageContentText extends PageContent {
  private text: string;

  constructor(data: any) {
    super(PageContentType.Text);
    this.text = data.text;
  }

  public template() {
    return this.text;
  }
}

export class PageContentImage extends PageContent {
  constructor(private url: string) {
    super(PageContentType.Image);
  }

  public template() {
    console.log("abc", this.url);
    return this.url;
  }
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
  public _debug = false;
  protected autobind = true;

  protected pageService = PageService.getInstance();

  scope: Scope = {
    title: "{params.slug | capitalize}",
    contents: [new PageContentText("Hi")],
    assets: [],
    blogEntries: [],
    params: {},
  };

  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(PagesPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.head.title = "You are " + this.ctx.params.slug;
    try {
      const page = await this.pageService.get(this.ctx.params.slug);
      console.log("page", page);
      if (page) {
        if (page?.title) {
          this.scope.title = page?.title;
        }
        if (page?.content) {
          for (const content of page?.content) {
            if (content.__typename === "ComponentContentText") {
              this.scope.contents.push(new PageContentText(content));
            }
            if (content.__typename === "ComponentContentImage") {
              this.scope.contents.push(new PageContentImage(content));
            }
          }
        }
        if (page?.assets) {
          for (const asset of page?.assets) {
            console.log(asset);
            this.scope.assets.push(asset);
          }
        }

        //blog entries
        if (page?.["blog_entries"] !== undefined) {
          for (const blogEntry of page?.["blog_entries"]) {
            this.scope.blogEntries.push(blogEntry);
          }
        }
        if (page?.["blog_categories"] !== undefined) {
          if (page?.["blog_categories"]["blog_entries"] !== undefined) {
            for (const blogEntry of page?.["blog_categories"]["blog_entries"]) {
              let found = false;
              for (const existingEntry of this.scope.blogEntries) {
                if (existingEntry.id === blogEntry.id) {
                  found = true;
                }
              }
              if (!found) {
                this.scope.blogEntries.push(blogEntry);
              }
            }
          }
        }
        //TODO sort blog entries
      }
    } catch (error) {
      /*if (error.status === 404) {
        this.scope.title = "Nicht gefunden!";
        this.scope.content =
          "Die angeforderte Seite konnte nicht gefunden werden.";
      } else {
        this.scope.title = "Unbekannter Fehler!";
        this.scope.content = error.message;
      }*/
    }
    this.head.title = this.scope.title;
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
