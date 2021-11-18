import { ready } from "@ribajs/utils/src/dom";
import { replaceBodyPageClass } from "../common";
import { Riba, View, coreModule } from "@ribajs/core";
import { extrasModule } from "@ribajs/extras";
import { EventDispatcher } from "@ribajs/events";
import { contentSliderModule } from "@ribajs/content-slider";
import { routerModule, FadeTransition } from "@ribajs/router";
// import { i18nModule, LocalesStaticService } from "@ribajs/i18n";
import { bs5Module } from "@ribajs/bs5";
import { bs5PhotoswipeModule } from "@ribajs/bs5-photoswipe";
import { leafletModule } from "@ribajs/leaflet-map";
import { masonryModule } from "@ribajs/masonry";
import { artAndCodeStudioModule } from "@ribajs/artcodestudio";
import { podcastModule } from "@ribajs/podcast";
import { strapiModule } from "@ribajs/strapi";

// Common
import * as commonBinders from "../common/binders";
import * as commonComponents from "../common/components";
import * as commonFormatters from "../common/formatters";

// Own
import * as components from "./components";
import * as pages from "./pages";
import * as binders from "./binders";
import * as formatters from "./formatters";

declare global {
  interface Window {
    env: {
      STRAPI_REMOTE_URL: string;
      STRAPI_STUDENT_EXTERN_URL: string;
      NEST_EXTERN_URL: string;
    };
  }
}

export class CSRApp {
  protected view?: View;
  protected riba = new Riba();
  protected model: any = {};
  protected routerEvents = EventDispatcher.getInstance("main");

  protected onPageChanges() {
    replaceBodyPageClass();
  }

  constructor() {
    this.riba.configure({
      prefix: ["rv", "csr-rv"],
    });

    // Regist custom components
    this.riba.module.component.regists({
      ...commonComponents,
      ...components,
      ...pages,
    });
    this.riba.module.binder.regists({ ...commonBinders, ...binders });
    this.riba.module.formatter.regists({ ...commonFormatters, ...formatters });

    // Regist modules
    this.riba.module.regist(coreModule.init());
    this.riba.module.regist(extrasModule.init());
    this.riba.module.regist(
      routerModule.init({
        defaultTransition: new FadeTransition(),
        scrollToAnchorOffset: 100,
      })
    );
    this.riba.module.regist(bs5Module.init({
      breakpoints: [
        {
          dimension: 0,
          name: "xs",
        },
        {
          dimension: 576,
          name: "sm",
        },
        {
          dimension: 768,
          name: "md",
        },
        {
          dimension: 992,
          name: "lg",
        },
        {
          dimension: 1100,
          name: "xl",
        },
        {
          dimension: 1400,
          name: "xxl",
        },
      ]
    })
    );
    this.riba.module.regist(bs5PhotoswipeModule);
    this.riba.module.regist(leafletModule);
    this.riba.module.regist(masonryModule);
    this.riba.module.regist(contentSliderModule.init({}));
    this.riba.module.regist(artAndCodeStudioModule.init({}));
    this.riba.module.regist(podcastModule.init({}));
    this.riba.module.regist(strapiModule.init({}));

    this.view = this.riba.bind(document?.body, this.model);

    this.view.registComponents();

    this.riba.lifecycle.events.on(
      "ComponentLifecycle:error",
      (error: Error) => {
        console.error(error);
      }
    );

    this.routerEvents.on("transitionCompleted", this.onPageChanges, this);
  }
}

ready(() => {
  new CSRApp();
});
