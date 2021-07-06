import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./podcast.component.pug";
import { PodcastService } from "../../services";
import {
  StrapiGqlPodcastEpisodeBasicFragmentFragment,
  PageHeader,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  episodes: StrapiGqlPodcastEpisodeBasicFragmentFragment[];
}

export class PodcastPageComponent extends PageComponent {
  public static tagName = "podcast-page";
  public _debug = false;
  protected autobind = true;

  protected podcast = PodcastService.getInstance();

  scope: Scope = {
    episodes: [],
    header: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(PodcastPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected setHeader() {
    this.scope.header = this.podcast.getHeader();
  }

  protected async beforeBind() {
    try {
      const episodes = await this.podcast.list();

      if (this.scope.episodes && episodes) {
        this.scope.episodes = episodes;
        this.setHeader();
      }
    } catch (error) {
      this.throw(error);
    }

    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
