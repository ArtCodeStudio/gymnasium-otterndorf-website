import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./podcast-episode.component.pug";
import {
  PodloveService,
  PodcastService,
  OpenGraphService,
} from "../../services";
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

  protected podlove = PodloveService.getInstance();
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

  protected async getEpisode(slug: string) {
    const episode = await this.podcast.get(slug);
    if (!episode) {
      // TODO 404
      throw new Error(`Podcast episode with slug "${slug}" not found!`);
    }
    return episode;
  }

  protected async beforeBind() {
    if (this.ctx.params.slug) {
      try {
        const episode = await this.getEpisode(this.ctx.params.slug);

        this.scope.episode = episode;
        this.head.title = episode.title;
        this.scope.header = this.podcast.getHeader(
          this.scope.episode,
          this.ctx.params.slug
        );

        await this.openGraph.setPodcastEpisode(
          {
            title: this.scope.header.title,
          },
          episode
        );
      } catch (error) {
        this.throw(error);
      }
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
