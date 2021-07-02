import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { StrapiGqlPodcastEpisodeDetailFragmentFragment } from "../../../common";
import pugTemplate from "./gy-podcast-episode-item.component.pug";

export interface Scope {
  episode?: StrapiGqlPodcastEpisodeDetailFragmentFragment;
  episodeConfigUrl: string;
  configUrl: string;
}

export class GyPodcastEpisodeItemComponent extends Component {
  public static tagName = "gy-podcast-episode-item";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    episode: undefined,
    episodeConfigUrl: "/api/podlove/episode/{slug}",
    configUrl: "/api/podlove/config",
  };

  static get observedAttributes(): string[] {
    return ["episode"];
  }

  protected requiredAttributes() {
    return ["episode"];
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.scope.episode?.slug) {
      this.throw(new Error("episode object with slug property is required!"));
      return;
    }
    this.scope.episodeConfigUrl = this.scope.episodeConfigUrl.replace(
      "{slug}",
      this.scope.episode.slug
    );
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyPodcastEpisodeItemComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
