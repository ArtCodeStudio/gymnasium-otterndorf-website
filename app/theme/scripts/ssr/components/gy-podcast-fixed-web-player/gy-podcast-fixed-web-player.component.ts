import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { PodloveService } from "../../services";
import pugTemplate from "./gy-podcast-fixed-web-player.component.pug";
import { PodloveWebPlayerTab } from "@ribajs/podcast";

export interface Scope {
  episodeUrl: string;
  configUrl: string;
  activeTab: PodloveWebPlayerTab;
}

export class GyPodcastFixedWebPlayerComponent extends Component {
  public static tagName = "gy-podcast-fixed-web-player";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    episodeUrl: "",
    configUrl: "",
    activeTab: "none",
  };

  static get observedAttributes(): string[] {
    return ["active-tab"];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.scope.configUrl = PodloveService.getConfigPath(this.scope.activeTab);
    this.scope.episodeUrl = PodloveService.getLatestEpisodeConfigPath();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyPodcastFixedWebPlayerComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
