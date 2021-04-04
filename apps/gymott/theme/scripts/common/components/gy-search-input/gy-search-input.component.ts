import { Component, LifecycleService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-search-input.component.pug";
import { SearchService } from "../../services/search";
import { throttle } from "@ribajs/utils/src/control";
import { SearchResult } from "../../types/search-result";
import { GySearchResultComponent } from "../gy-search-result/gy-search-result.component";

export interface Scope {
  onChange: GySearchInputComponent["onChange"];
  onSearchBtn: GySearchInputComponent["onSearchBtn"];
  term: string;
  help: {
    class: string;
    message: string;
  };
}

export class GySearchInputComponent extends Component {
  public static tagName = "gy-search-input";
  public _debug = false;
  protected autobind = true;
  protected searchResultContainers: GySearchResultComponent[] = [];
  protected lifecycle = LifecycleService.getInstance();
  protected search = SearchService.getInstance();

  public onChange = throttle(this._onChange.bind(this), 1000);

  scope: Scope = {
    onChange: this.onChange,
    onSearchBtn: this.onSearchBtn,
    term: "",
    help: {
      class: "text-danger",
      message: "",
    },
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
  }

  protected async _onChange() {
    if (this.scope.term.length < 3) {
      if (this.scope.term.length <= 0) {
        this.reset();
      } else {
        this.scope.help.message = "Bitte gebe mindestens 3 Zeichen ein";
        this.resetResults();
      }
    } else {
      this.scope.help.message = "";
      const query = /*"*" +*/ this.scope.term; /*+ "*"*/
      const searchResults = await this.search.get(query);
      this.setResults(searchResults);
      console.debug("onChange", query, searchResults);
    }
  }

  public onSearchBtn() {
    console.debug("TODO onSearchBtn");
  }

  protected setResults(results: SearchResult[]) {
    if (this.searchResultContainers) {
      for (const searchResultContainer of this.searchResultContainers) {
        searchResultContainer.set(results);
      }
    }
  }

  protected resetResults() {
    if (this.searchResultContainers) {
      for (const searchResultContainer of this.searchResultContainers) {
        searchResultContainer.scope.results = [];
      }
    }
  }

  public reset() {
    this.scope.term = "";
    this.scope.help.message = "";
    this.resetResults();
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
