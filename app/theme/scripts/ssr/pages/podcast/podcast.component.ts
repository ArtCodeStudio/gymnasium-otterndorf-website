import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./podcast.component.pug";
import { PodcastService, OpenGraphService } from "../../services";
import {
  StrapiGqlPodcastEpisodeBasicFragmentFragment,
  PageHeader,
  replaceBodyPageClass,
  StrapiGqlPodcastConfigQuery,
} from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  episodes: StrapiGqlPodcastEpisodeBasicFragmentFragment[];
  title: string;
  description: string;
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
    title: "",
    description: "",
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

  protected async setConfig() {
    const config = await this.podcast.getConfig();
    if (config) {
      this.scope.title = config.title;
      this.scope.description = config.description;
    }
    return config;
  }

  protected async setEpisodes() {
    const episodes = await this.podcast.list();
    if (episodes) {
      this.scope.episodes = episodes;
    }
    return episodes;
  }

  protected setHeader(config: StrapiGqlPodcastConfigQuery["podcastFeed"]) {
    this.scope.header = this.podcast.getHeader(undefined, undefined, config);
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected async setOpenGraph(
    config: StrapiGqlPodcastConfigQuery["podcastFeed"]
  ) {
    return await this.openGraph.setPodcastOverview({
      title: this.scope.header.title,
      description: config?.description,
      image: config?.image || undefined,
    });
  }

  protected async beforeBind() {
    await super.beforeBind();
    const config = await this.setConfig();
    await this.setEpisodes();
    this.setHeader(config);
    await this.setOpenGraph(config);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
