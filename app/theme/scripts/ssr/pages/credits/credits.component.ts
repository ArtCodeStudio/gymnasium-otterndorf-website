import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./credits.component.pug";
import { replaceBodyPageClass, nestFormatter } from "../../../common";
import { OpenGraphService } from "../../services";

export class CreditsPageComponent extends PageComponent {
  public static tagName = "credits-page";
  public _debug = false;
  protected autobind = true;
  protected openGraph = OpenGraphService.getInstance();

  scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(CreditsPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = "Credits, Quellcode und API";
    await this.openGraph.setWebsite({
      title: this.head.title,
      description:
        "Informationen darüber wer bei der Seite mitgewirkt hat, wie du an den Quellcode kommst und wie du die API verwenden kannst.",
      image: [
        {
          url: nestFormatter.read("images/credits.png"),
          width: 1200,
          height: 1200,
          alt: "API Image",
        },
      ],
      url: nestFormatter.read("credits"),
    });

    await super.beforeBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
