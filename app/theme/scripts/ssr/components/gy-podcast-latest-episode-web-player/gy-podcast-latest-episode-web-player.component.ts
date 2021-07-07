import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { PodloveService } from "../../services";
import pugTemplate from "./gy-podcast-latest-episode-web-player.component.pug";

export interface Scope {
  episodeConfigUrl: string;
  configUrl: string;
}

export class GyPodcastLatestEpisodeWebPlayerComponent extends Component {
  public static tagName = "gy-podcast-latest-episode-web-player";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    episodeConfigUrl: "",
    configUrl: "",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.scope.configUrl = PodloveService.getConfigPath("playlist");
    this.scope.episodeConfigUrl = PodloveService.getLatestEpisodeConfigPath();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyPodcastLatestEpisodeWebPlayerComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
