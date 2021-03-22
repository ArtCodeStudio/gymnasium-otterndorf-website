import { Component, LifecycleService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-navbar.component.pug";

export interface Scope {
  onSearchBtn: GyNavbarComponent["onSearchBtn"];
}

export class GyNavbarComponent extends Component {
  public static tagName = "gy-navbar";
  public _debug = false;
  protected autobind = true;
  protected lifecycle = LifecycleService.getInstance();

  scope: Scope = {
    onSearchBtn: this.onSearchBtn,
  };

  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  public onSearchBtn() {
    console.log("TODO onSearchBtn");
  }

  /**
   * Set style of other elements which are depending on the navbar style
   */
  protected setDependentStyles() {
    const navbar = this.firstChild as HTMLElement | null;
    const navbarHeight = Math.max(navbar?.offsetHeight || 0, this.offsetHeight);
    const leftSidebar = document.getElementById("left-sidebar");
    const rightSidebar = document.getElementById("right-sidebar");

    this.debug("setDependentStyles navbarHeight", navbarHeight);

    if (leftSidebar) {
      leftSidebar.style.marginTop = navbarHeight + "px";
    }

    if (rightSidebar) {
      rightSidebar.style.marginTop = navbarHeight + "px";
    }
  }

  // On all Components are ready
  protected onAllComponentsBound() {
    this.setDependentStyles();
  }

  protected addEventListeners() {
    this.lifecycle.events.on(
      "ComponentLifecycle:allBound",
      this.onAllComponentsBound,
      this
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.addEventListeners();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyNavbarComponent.observedAttributes);
  }

  protected template() {
    // If this component has content this was rendered server side
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
