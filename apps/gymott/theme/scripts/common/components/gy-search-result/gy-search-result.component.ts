import { Component, LifecycleService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-search-result.component.pug";
import { SearchService } from "../../services/search";
import { SearchResult } from "../../types/search-result";
import { GySearchInputComponent } from "../gy-search-input/gy-search-input.component";

export interface Scope {
  close: GySearchResultComponent["close"];
  getType: GySearchResultComponent["getType"];
  results: SearchResult[];
}

export class GySearchResultComponent extends Component {
  public static tagName = "gy-search-result";
  public _debug = false;
  protected autobind = true;
  protected lifecycle = LifecycleService.getInstance();
  protected searchInputs: GySearchInputComponent[] = [];

  protected search = SearchService.getInstance();

  scope: Scope = {
    close: this.close,
    getType: this.getType,
    results: [],
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.addEventListeners();
  }

  public getType(namespace: string) {
    switch (namespace) {
      case "nav":
        return "Navigation";
      case "page":
        return "Seite";
      case "post":
        return "Artikel";
    }
  }

  protected onAllComponentsBound() {
    this.searchInputs = Array.from(
      document.querySelectorAll<GySearchInputComponent>("gy-search-input")
    );
  }

  protected addEventListeners() {
    this.lifecycle.events.on(
      "ComponentLifecycle:allBound",
      this.onAllComponentsBound,
      this
    );
  }

  public reset() {
    for (const searchInput of this.searchInputs) {
      searchInput.reset();
    }
  }

  public close() {
    this.reset();
  }

  public set(results: SearchResult[]) {
    console.debug("set", results);
    this.scope.results = results;
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySearchResultComponent.observedAttributes);
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
