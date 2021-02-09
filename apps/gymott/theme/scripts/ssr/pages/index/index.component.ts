import { PageComponent } from "@ribajs/ssr";

import pugTemplate from "./index.component.pug";

export class IndexPageComponent extends PageComponent {
  public static tagName = "index-page";
  public _debug = false;
  protected autobind = true;

  protected head = {
    title: "Startseite",
  };

  scope = {};

  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(IndexPageComponent.observedAttributes);
    this.lifecycleEvents.trigger(
      "Component:connected",
      this.getLifecycleEventData()
    );
    console.debug();
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
