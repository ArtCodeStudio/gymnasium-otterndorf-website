import { Component } from "@ribajs/core";
import { handleize } from "@ribajs/utils";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import * as Popper from "@popperjs/core";
import { Options } from "@popperjs/core";
// import { Dropdown } from "@ribajs/bs5";
import pugTemplate from "./gy-nav-dropdown.component.pug";
import { NavigationLinkDropdown } from "../../../common/types";
import { NavigationService } from "../../services";

const CLASS_NAME_SHOW = "show";

export interface Scope {
  entry?: NavigationLinkDropdown;
  toggle: GyNavDropdownComponent["toggle"];
  show: GyNavDropdownComponent["show"];
  hide: GyNavDropdownComponent["hide"];
  hideAll: GyNavDropdownComponent["hideAll"];
}

export class GyNavDropdownComponent extends Component {
  public static tagName = "gy-nav-dropdown";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    entry: undefined,
    toggle: this.toggle,
    show: this.show,
    hide: this.hide,
    hideAll: this.hideAll,
  };

  static get observedAttributes(): string[] {
    return ["entry"];
  }

  protected requiredAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  public toggle(entry: NavigationLinkDropdown) {
    if (entry.isDropdown) {
      return entry.show || this.isShown(entry.menuEl)
        ? this.hide(entry)
        : this.show(entry);
    }
    this.hideAll();
  }

  public getNavItemParents(entry: NavigationLinkDropdown) {
    const parents: NavigationLinkDropdown[] = [];
    let currItem = entry;
    while (currItem.parent) {
      parents.push(currItem.parent);
      currItem = currItem.parent;
    }
    return parents;
  }

  public show(entry: NavigationLinkDropdown) {
    if (!entry.toggleEl || !entry.menuEl || this.isShown(entry.menuEl)) {
      return;
    }
    this.hideAll(this.getNavItemParents(entry));
    entry.show = true;
    entry.popper?.update();
    entry.toggleEl.focus();
    entry.toggleEl.setAttribute("aria-expanded", "true");
    entry.menuEl.classList.add(CLASS_NAME_SHOW);
    entry.toggleEl.classList.add(CLASS_NAME_SHOW);
  }

  public hide(entry: NavigationLinkDropdown) {
    if (!entry.toggleEl || !entry.menuEl || !this.isShown(entry.menuEl)) {
      return;
    }
    entry.show = false;
    entry.menuEl.classList.remove(CLASS_NAME_SHOW);
    entry.toggleEl.classList.remove(CLASS_NAME_SHOW);
    entry.toggleEl.setAttribute("aria-expanded", "false");
  }

  public hideAll(
    exceptItems: NavigationLinkDropdown[] | NavigationLinkDropdown = [],
    entry?: NavigationLinkDropdown
  ) {
    if (!Array.isArray(exceptItems)) {
      exceptItems = [exceptItems];
    }
    entry = entry || this.scope.entry;
    if (!entry) {
      return;
    }
    for (const child of entry.children) {
      if (
        !exceptItems.find((exceptItem) => exceptItem.handle === child.handle)
      ) {
        this.hide(child);
      }
      this.hideAll(exceptItems, child);
    }
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.scope.entry) {
      this.scope.entry = await NavigationService.getInstance().getMenu();
    }
  }

  protected async afterAllBind() {
    await super.afterAllBind();
    if (this.scope.entry) {
      this.initDropdownElements(this.scope.entry);
    }
  }

  private isShown(element?: HTMLElement) {
    return element && element.classList.contains(CLASS_NAME_SHOW);
  }

  private initDropdownElements(entry: NavigationLinkDropdown, level = 0) {
    entry.children = entry.children.filter((child) => !!child.label);
    for (const child of entry.children) {
      child.level = level;
      child.handle = handleize(child.label);
      child.parent = entry;
      child.show = false;
      child.isDropdown = false;
      if (!child.children?.length) {
        continue;
      }
      const toggleSelector = `.dropdown-toggle#level${level}-${child.handle}`;
      const menuSelector = `[aria-labelledby='level${level}-${child.handle}']`;
      child.toggleEl =
        this.querySelector<HTMLElement>(toggleSelector) || undefined;
      child.menuEl = this.querySelector<HTMLElement>(menuSelector) || undefined;
      if (!child.toggleEl) {
        throw new Error(
          "Dropdown toggle element not found!\n" + toggleSelector
        );
      }
      if (!child.menuEl) {
        throw new Error("Dropdown menu element not found!\n" + menuSelector);
      }
      child.options = this.setPopperConfig(child);
      child.popper = this.createPopper(child);
      child.isDropdown = true;
      this.initDropdownElements(child, level + 1);
    }
  }

  private setPopperConfig(entry: NavigationLinkDropdown) {
    const config: Partial<Options> = {
      modifiers: [],
    };
    if (entry.level === 0) {
      config.placement = "bottom";
    }
    if (entry.level === 1) {
      config.placement = "right-start";
    }
    config.modifiers?.push(
      {
        name: "preventOverflow",
        options: {
          boundary: "clippingParents",
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 0],
        },
      },
      {
        name: "applyStyles",
        enabled: true,
      }
    );
    return config;
  }

  private createPopper(entry: NavigationLinkDropdown) {
    if (!entry.menuEl) {
      throw new Error(
        "Dropdown menu element not found!\n" + JSON.stringify(entry, null, 2)
      );
    }
    if (!entry.toggleEl) {
      throw new Error(
        "Dropdown toggle element not found!\n" + JSON.stringify(entry, null, 2)
      );
    }
    if (!entry.toggleEl.parentElement) {
      throw new Error(
        "Dropdown toggle element must have a parent element!\n" +
          JSON.stringify(entry, null, 2)
      );
    }
    const popper = Popper.createPopper(
      entry.toggleEl.parentElement,
      entry.menuEl,
      entry.options
    );
    return popper;
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyNavDropdownComponent.observedAttributes);
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
