import { Component, LifecycleService, EventDispatcher } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-search-input.component.pug";
import { throttle } from "@ribajs/utils/src/control";
import { GySearchResultComponent } from "../gy-search-result/gy-search-result.component";

export interface Scope {
  onChange: GySearchInputComponent["onChange"];
  onAddon: GySearchInputComponent["onAddon"];
  term: string;
}

export class GySearchInputComponent extends Component {
  public static tagName = "gy-search-input";
  public _debug = false;
  protected autobind = true;
  protected searchResultContainers: GySearchResultComponent[] = [];
  protected lifecycle = LifecycleService.getInstance();
  protected route = EventDispatcher.getInstance("main");

  public onChange = throttle(this._onChange.bind(this), 500);

  scope: Scope = {
    onChange: this.onChange,
    onAddon: this.onAddon,
    term: "",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.addEventListeners();
  }

  protected onAllComponentsBound() {
    this.searchResultContainers = Array.from(
      document.querySelectorAll<GySearchResultComponent>("gy-search-result")
    );
  }

  protected addEventListeners() {
    this.lifecycle.events.on(
      "ComponentLifecycle:allBound",
      this.onAllComponentsBound,
      this
    );

    this.route.on(
      "initStateChange",
      (/*viewId: string, currentStatus: State, prevStatus: State*/) => {
        this.resetTerm();
      }
    );
  }

  protected async _onChange() {
    this.setTermExtern(this.scope.term);
    if (this.scope.term.length < 3) {
      if (this.scope.term.length <= 0) {
        this.reset();
      }
    }
  }

  public onAddon() {
    this.resetTerm();
  }

  public setSuggest(term: string) {
    this.scope.term = term;
    this._onChange();
  }

  /**
   * Set term in gy-search-result components
   *
   * @protected
   * @param {SearchResult[]} results
   * @memberof GySearchInputComponent
   */
  protected setTermExtern(term: string) {
    if (this.searchResultContainers) {
      for (const searchResultContainer of this.searchResultContainers) {
        searchResultContainer.setTerm(term);
      }
    }
  }

  protected resetTerm() {
    this.scope.term = "";
    this.resetTermExtern();
  }

  protected resetTermExtern() {
    if (this.searchResultContainers) {
      for (const searchResultContainer of this.searchResultContainers) {
        searchResultContainer.setTerm(this.scope.term);
      }
    }
  }

  /**
   * Reset all
   * - Resets results
   * - Resets search term
   */
  public reset() {
    this.resetTerm();
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySearchInputComponent.observedAttributes);
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
