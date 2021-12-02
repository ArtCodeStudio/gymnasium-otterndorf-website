import { Component, LifecycleService } from "@ribajs/core";
import { EventDispatcher } from "@ribajs/events";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-search-input.component.pug";
import { GySearchResultComponent } from "../gy-search-result/gy-search-result.component";

export interface Scope {
  onChange: GySearchInputComponent["onChange"];
  onInput: GySearchInputComponent["onInput"];
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
  protected typingTimer: number | null = null;
  protected doneTypingInterval = 3000;

  // public onChange = throttle(this._onChange.bind(this), 2000);

  protected onChange = this._onChange.bind(this);

  scope: Scope = {
    onInput: this.onInput,
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

  protected addEventListeners() {
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

  protected async onInput(event: KeyboardEvent) {
    if (this.typingTimer) {
      window.clearTimeout(this.typingTimer);
    }
    // On enter do not wait for timeout
    if (event.key === 'Enter' || event.keyCode === 13) {
      console.debug("Enter");
      return this._onChange();
    }
    this.typingTimer = window.setTimeout(this.onChange, this.doneTypingInterval);
  }

  public onAddon() {
    this.resetTerm();
  }

  public setSuggest(term: string) {
    this.scope.term = term;
    this.onChange();
  }

  /**
   * Set term in gy-search-result components
   *
   * @protected
   * @param {SearchResult[]} results
   * @memberof GySearchInputComponent
   */
  protected setTermExtern(term: string) {
    if (this.searchResultContainers.length) {
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
    if (this.searchResultContainers.length) {
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

  protected async afterAllBind() {
    await super.afterAllBind();
    try {
      if (!this.searchResultContainers.length) {
        this.searchResultContainers = Array.from(
          window?.document?.querySelectorAll<GySearchResultComponent>("gy-search-result") || []
        );
      }
    } catch (error) {
      this.throw(error);
    }
  }

  protected connectedCallback() {
    try {
      super.connectedCallback();
      this.init(GySearchInputComponent.observedAttributes);
    } catch (error) {
      this.throw(error);
    }
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
