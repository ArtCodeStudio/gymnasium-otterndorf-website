import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./podcast-episode.component.pug";
import { PodcastService, OpenGraphService } from "../../services";
import {
  PageHeader,
  replaceBodyPageClass,
  StrapiGqlPodcastEpisodeBasicFragmentFragment,
} from "../../../common";

export interface Scope {
  params: PodcastEpisodePageComponent["ctx"]["params"];
  header: PageHeader | Record<string, never>;
  episode: StrapiGqlPodcastEpisodeBasicFragmentFragment | Record<string, never>;
}

export class PodcastEpisodePageComponent extends PageComponent {
  public static tagName = "podcast-episode-page";
  public _debug = false;
  protected autobind = true;

  protected podcast = PodcastService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    params: {},
    header: {},
    episode: {},
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
    this.init(PodcastEpisodePageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async setEpisode(slug: string) {
    const episode = await this.podcast.get(slug);
    this.scope.episode = episode;
    return episode;
  }

  protected setHeader(episode: StrapiGqlPodcastEpisodeBasicFragmentFragment) {
    this.scope.header = this.podcast.getHeader(episode, this.ctx.params.slug);
    this.head.title = this.scope.header.title || episode.title;
  }

  protected async setOpenGraph(
    episode: StrapiGqlPodcastEpisodeBasicFragmentFragment
  ) {
    return await this.openGraph.setPodcastEpisode(
      {
        title: this.scope.header.title,
      },
      episode
    );
  }

  protected async beforeBind() {
    if (this.ctx.params.slug) {
      const episode = await this.setEpisode(this.ctx.params.slug);
      this.setHeader(episode);
      await this.setOpenGraph(episode);
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
