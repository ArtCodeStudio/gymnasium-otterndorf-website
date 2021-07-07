import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { PodloveService } from "../../services";
import pugTemplate from "./gy-podcast-latest-episode-web-player.component.pug";
import { PodloveWebPlayerTab } from "@ribajs/podcast";

export interface Scope {
  episodeConfigUrl: string;
  configUrl: string;
  activeTab: PodloveWebPlayerTab;
}

export class GyPodcastLatestEpisodeWebPlayerComponent extends Component {
  public static tagName = "gy-podcast-latest-episode-web-player";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    episodeConfigUrl: "",
    configUrl: "",
    activeTab: "none",
  };

  static get observedAttributes(): string[] {
    return ["active-tab"];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.scope.configUrl = PodloveService.getConfigPath(this.scope.activeTab);
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
