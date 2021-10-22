import { Component, LifecycleService } from "@ribajs/core";
import { Pjax, Prefetch } from "@ribajs/router";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-search-result.component.pug";
import {
  SearchService,
  SuggestService,
  SearchItem,
  SearchResult,
  SuggestResult,
  getTextExpandOptions,
  MAX_EXPAND_TEXT_LENGTH,
} from "../../../common";
import { GySearchInputComponent } from "../gy-search-input/gy-search-input.component";

export interface Scope {
  close: GySearchResultComponent["close"];
  onSuggest: GySearchResultComponent["onSuggest"];
  onOpen: GySearchResultComponent["onOpen"];
  onToggleItem: GySearchResultComponent["onToggleItem"];
  term: string;
  items: SearchItem[];
  show: boolean;
  suggestions: {
    items: SuggestResult[];
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
  protected pjax?: Pjax;
  protected prefetch?: Prefetch;

  scope: Scope = {
    close: this.close,
    onSuggest: this.onSuggest,
    onOpen: this.onOpen,
    onToggleItem: this.onToggleItem,
    term: "",
    items: [],
    show: false,
    suggestions: {
      items: [],
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
  }

  public onSuggest(event: Event, context: any, el: HTMLSpanElement) {
    // console.debug("onSuggest", event, el);
    for (const searchInput of this.searchInputs) {
      searchInput.setSuggest(el.innerText);
    }
  }

  public onOpen(item: SearchResult /*, event: Event*/) {
    // console.debug("onOpen", item, event.target);

    this.reset();
    if (item.data.href) {
      this.pjax?.goTo(item.data.href);
    }
  }

  public onToggleItem(item: SearchItem, event: Event) {
    // console.debug("onToggleItem", item);
    event.stopPropagation();
    // event.preventDefault();
    if (item.opts.expanded) {
      item.opts.cutAt = MAX_EXPAND_TEXT_LENGTH;
      item.opts.expanded = false;
    } else {
      item.opts.cutAt = -1;
      item.opts.expanded = true;
    }
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
    this.scope.term = term;
    this.onChange();
  }

  protected async onChange() {
    try {
      await this.calibrateSuggestions();
      await this.calibrateResult();
      await this.calibrateAlert();
    } catch (error) {
      console.error("[onChange]", error);
    }
  }

  protected prefetchItem(url?: string) {
    if (url) {
      this.prefetch?.url(url);
    }
  }

  protected prefetchItems(items: SearchItem[]) {
    for (const item of items) {
      this.prefetchItem(item.data?.href);
    }
  }

  protected transformResult(result: SearchResult) {
    const item: SearchItem = {
      ...result,
      opts: getTextExpandOptions(result.data?.text),
    };
    return item;
  }

  protected async calibrateResult() {
    if (this.scope.term.length > 3) {
      let results = await this.search.get(this.scope.term.trim());
      // Fallback
      if (results?.length === 0) {
        results = await this.search.get(`*${this.scope.term.trim()}*`);
      }
      this.setItems(results);
    } else {
      this.clearItems();
    }
    this.prefetchItems(this.scope.items);
  }

  protected setItems(results: SearchResult[]) {
    this.classList.add("has-result");
    if (results.length) {
      this.scope.items = results.map(this.transformResult);
    } else {
      this.clearItems();
    }
  }

  protected clearItems() {
    this.classList.remove("has-result");
    this.scope.items = [];
  }

  protected async calibrateAlert() {
    if (this.scope.term.length < 4) {
      this.scope.alert.show = true;
      this.scope.alert.message = "Bitte gebe mindestens 4 Zeichen ein.";
    } else if (this.scope.items.length === 0) {
      this.scope.alert.message = `Leider keine Ergebnisse für "${this.scope.term}" gefunden.`;
      this.scope.alert.show = true;
    } else {
      this.scope.alert.message = "";
      this.scope.alert.show = false;
    }
  }

  protected async calibrateSuggestions() {
    const term = this.scope.term.toLowerCase();
    if (this.scope.term.length > 3) {
      this.scope.suggestions.items = await this.suggest.get(term);
      this.scope.suggestions.items = this.scope.suggestions.items.filter(
        (result) => result.word !== term && result.word.length >= 4
      );
    } else {
      this.scope.suggestions.items = [];
    }

    if (this.scope.suggestions.items.length) {
      this.scope.suggestions.show = true;
      this.scope.suggestions.message =
        "Meintest du " +
        this.scope.suggestions.items
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

  protected async afterBind() {
    this.pjax = Pjax.getInstance();
    this.prefetch = Prefetch.getInstance();
    await super.afterBind();
  }

  protected async afterAllBind() {
    await super.afterAllBind();
    if (!this.searchInputs) {
      this.searchInputs = Array.from(
        document.querySelectorAll<GySearchInputComponent>("gy-search-input")
      );
    }
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
