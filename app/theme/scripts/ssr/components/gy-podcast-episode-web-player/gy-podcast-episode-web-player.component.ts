import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { PodloveService } from "../../services";
import { StrapiGqlPodcastEpisodeDetailFragmentFragment } from "../../../common";
import pugTemplate from "./gy-podcast-episode-web-player.component.pug";

export interface Scope {
  episode?: StrapiGqlPodcastEpisodeDetailFragmentFragment;
  episodeConfigUrl: string;
  configUrl: string;
}

export class GyPodcastEpisodeWebPlayerComponent extends Component {
  public static tagName = "gy-podcast-episode-web-player";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    episode: undefined,
    episodeConfigUrl: "",
    configUrl: PodloveService.getConfigPath(),
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
    this.scope.episodeConfigUrl = PodloveService.getEpisodeConfigPath(
      this.scope.episode.slug
    );
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyPodcastEpisodeWebPlayerComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
