import { Component, LifecycleService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-search-result.component.pug";
import { SearchService, SuggestService } from "../../services";
import { SearchResult, SuggestResult } from "../../types";
import { GySearchInputComponent } from "../gy-search-input/gy-search-input.component";

export interface Scope {
  close: GySearchResultComponent["close"];
  getType: GySearchResultComponent["getType"];
  onSuggest: GySearchResultComponent["onSuggest"];
  term: string;
  results: SearchResult[];
  show: boolean;
  suggestions: {
    results: SuggestResult[];
    message: string;
    show: boolean;
  };
  alert: {
    show: boolean;
    class: string;
    message: string;
  };
}

export class GySearchResultComponent extends Component {
  public static tagName = "gy-search-result";
  public _debug = false;
  protected autobind = true;
  protected lifecycle = LifecycleService.getInstance();
  protected searchInputs: GySearchInputComponent[] = [];
  protected search = SearchService.getInstance();
  protected suggest = SuggestService.getInstance();

  scope: Scope = {
    close: this.close,
    getType: this.getType,
    onSuggest: this.onSuggest,
    term: "",
    results: [],
    show: false,
    suggestions: {
      results: [],
      message: "",
      show: false,
    },
    alert: {
      show: false,
      class: "",
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

  public onSuggest(event: Event, context: any, el: HTMLSpanElement) {
    console.debug("onSuggest", event, el);
    for (const searchInput of this.searchInputs) {
      searchInput.setSuggest(el.innerText);
    }
  }

  public getType(namespace: string) {
    switch (namespace) {
      case "nav":
        return "Navigation";
      case "page":
        return "Seite";
      case "post":
        return "Artikel";
      case "blog":
        return "Blog";
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

  public setTerm(term: string) {
    console.debug("setTerm", term);
    this.scope.term = term;
    this.onChange();
  }

  protected async onChange() {
    await this.calibrateSuggestions();
    await this.calibrateResult();
    await this.calibrateAlert();
  }

  protected async calibrateResult() {
    if (this.scope.term.length > 3) {
      let results = await this.search.get(this.scope.term);
      // Fallback
      if (results?.length === 0) {
        results = await this.search.get(`*${this.scope.term}*`);
      }
      this.scope.results = results;
    } else {
      this.scope.results = [];
    }
  }

  protected async calibrateAlert() {
    if (this.scope.term.length < 4) {
      this.scope.alert.show = true;
      this.scope.alert.message = "Bitte gebe mindestens 4 Zeichen ein.";
    } else if (this.scope.results.length === 0) {
      this.scope.alert.message = `Leider keine Ergebnisse für "${this.scope.term}" gefunden.`;
      this.scope.alert.show = true;
    } else {
      this.scope.alert.show = false;
    }
  }

  protected async calibrateSuggestions() {
    const term = this.scope.term.toLowerCase();
    if (this.scope.term.length > 3) {
      this.scope.suggestions.results = await this.suggest.get(term);
      this.scope.suggestions.results = this.scope.suggestions.results.filter(
        (result) => result.word !== term && result.word.length >= 4
      );
    } else {
      this.scope.suggestions.results = [];
    }

    if (this.scope.suggestions.results.length) {
      this.scope.suggestions.show = true;
      this.scope.suggestions.message =
        "Meintest du " +
        this.scope.suggestions.results
          .map(
            (result) =>
              `<span rv-on-click="onSuggest" class="suggest">${result.word}</span>`
          )
          .join(", ")
          .replace(/,(?!.*,)/gim, " oder") +
        "?";
    } else {
      this.scope.suggestions.show = false;
    }
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
