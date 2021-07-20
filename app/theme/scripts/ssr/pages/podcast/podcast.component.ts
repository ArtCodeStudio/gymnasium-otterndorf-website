import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./podcast.component.pug";
import { PodcastService, OpenGraphService } from "../../services";
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
  protected openGraph = OpenGraphService.getInstance();

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

  protected async setEpisodes() {
    const episodes = await this.podcast.list();
    if (episodes) {
      this.scope.episodes = episodes;
    }
    return episodes;
  }

  protected setHeader() {
    this.scope.header = this.podcast.getHeader();
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected async setOpenGraph() {
    return await this.openGraph.setPodcastOverview({
      title: this.scope.header.title,
    });
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setEpisodes();
    this.setHeader();
    await this.setOpenGraph();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
