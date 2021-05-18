import { ready } from "@ribajs/utils/src/dom";
import { Riba, View, coreModule } from "@ribajs/core";
import { extrasModule } from "@ribajs/extras";

import { routerModule } from "@ribajs/router";
import { i18nModule, LocalesStaticService } from "@ribajs/i18n";
import { bs5Module } from "@ribajs/bs5";
import { bs5PhotoswipeModule } from "@ribajs/bs5-photoswipe";
import { masonryModule } from "@ribajs/masonry";

// Common
import * as commonBinders from "../common/binders";
import * as commonComponents from "../common/components";
import * as commonFormatters from "../common/formatters";

// Moment
import { DateFormatFormatter } from "@ribajs/moment";

// Own
import * as components from "./components";
import * as binders from "./binders";
import * as formatters from "./formatters";
import locales from "../common/locales";

declare global {
  interface Window {
    env: {
      STRAPI_EXTERN_URL: string;
      NEST_INTERN_URL: string;
    };
  }
}

export class CSRApp {
  protected view?: View;
  protected riba = new Riba();
  protected model: any = {};

  protected localesService = new LocalesStaticService(
    locales,
    undefined,
    false
  );

  constructor() {
    console.debug("init the main application");

    this.riba.configure({
      prefix: ["rv", "csr-rv"],
    });

    // Regist custom components
    this.riba.module.component.regists({ ...commonComponents, ...components });
    this.riba.module.binder.regists({ ...commonBinders, ...binders });
    this.riba.module.formatter.regists({ ...commonFormatters, ...formatters });

    this.riba.module.formatter.regists({ DateFormatFormatter });

    // Regist modules
    this.riba.module.regist(coreModule.init());
    this.riba.module.regist(extrasModule.init());
    this.riba.module.regist(routerModule.init());
    this.riba.module.regist(
      i18nModule.init({ localesService: this.localesService })
    );
    this.riba.module.regist(bs5Module.init());
    this.riba.module.regist(bs5PhotoswipeModule);
    this.riba.module.regist(masonryModule);

    this.view = this.riba.bind(document.body, this.model);

    this.view.registComponents();

    this.riba.lifecycle.events.on(
      "ComponentLifecycle:error",
      (error: Error) => {
        console.error(error);
      }
    );
  }
}

ready(() => {
  new CSRApp();
});
