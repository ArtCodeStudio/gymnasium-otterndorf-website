import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-podcast-episode.component.pug";
import { SectionPodcastEpisode } from "../../../common/types";

export interface Scope {
  section?: SectionPodcastEpisode;
}

export class GySectionPodcastEpisodeComponent extends Component {
  public static tagName = "gy-section-podcast-episode";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: undefined,
  };

  static get observedAttributes(): string[] {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionPodcastEpisodeComponent.observedAttributes);
  }

  protected template() {
    // If this component has no content that was rendered server side
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
