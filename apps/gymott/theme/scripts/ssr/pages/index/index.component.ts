import { PageComponent } from "@ribajs/ssr";

import pugTemplate from "./index.component.pug";

export class IndexPageComponent extends PageComponent {
  public static tagName = "index-page";
  public _debug = true;
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
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    // WORKAROUND until the component watcher is done
    setTimeout(async () => {
      await super.afterBind();
    }, 3000);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
