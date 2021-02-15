import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./pages.component.pug";
import { PageService } from "../../services/page";
import ical from "ical/ical";

export interface Scope {
  title: string;
  params: PagesPageComponent["ctx"]["params"];
  assets: any[];
  events: any[];
  content: any;
  blogEntries: any[];
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
  public _debug = false;
  protected autobind = true;

  protected pageService = PageService.getInstance();

  scope: Scope = {
    title: "{params.slug | capitalize}",
    assets: [],
    blogEntries: [],
    params: {},
    events: [],
    content: {},
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
    this.head.title = "You are " + this.ctx.params.slug;
    try {
      const page = await this.pageService.get(this.ctx.params.slug);
      console.log("page", page);
      if (page) {
        if (page?.title) {
          this.scope.title = page?.title;
        }
        if (page?.content) {
          this.scope.content = page.content;
        }
        if (page?.assets) {
          for (const asset of page.assets) {
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

        const calendarKey = page?.["calendar_key"];
        const calendarData = await window.fetch(
          "https://gymott.net/iserv/public/calendar?key=049a7daf00db139b3c3e5df3e58ba5d3"
        );
        const data = await calendarData.text();

        const parsedData = ical.parseICS(data);
        const now = new Date();
        for (const key in parsedData) {
          const element = parsedData[key];
          if (element.type === "VEVENT" && element.start) {
            const date = new Date(element.start);
            console.log(element.categories);
            if (date.getTime() > now.getTime()) {
              console.log(element);
              if (
                calendarKey &&
                calendarKey.trim() !== "" &&
                element.categories &&
                element.categories?.indexOf(calendarKey) !== -1
              ) {
                this.scope.events.push(element);
              } else if (!calendarKey || calendarKey.trim() === "") {
                this.scope.events.push(element);
              }
            }
          }
        }
        this.scope.events.sort(function (a, b) {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        });
      }
    } catch (error) {
      console.log(error);
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
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
