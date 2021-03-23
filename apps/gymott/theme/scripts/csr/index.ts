import { Riba, View, coreModule } from "@ribajs/core";
import { ready } from "@ribajs/utils/src/dom";
import { routerModule } from "@ribajs/router";
import { i18nModule, LocalesStaticService } from "@ribajs/i18n";
import { bs5Module } from "@ribajs/bs5";

// Common
import * as commonBinders from "../common/binders";
import * as commonComponents from "../common/components";
import * as commonFormatters from "../common/formatters";

// Own
import * as components from "./components";
import * as binders from "./binders";
import * as formatters from "./formatters";
import locales from "../common/locales";

declare global {
  interface Window {
    env: {
      STRAPI_EXTERN_URL: string;
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
    this.riba.module.regist({
      components: { ...commonComponents, ...components },
      binders: { ...commonBinders, ...binders },
      formatters: { ...commonFormatters, ...formatters },
    });

    // Regist modules
    this.riba.module.regist(coreModule);
    this.riba.module.regist(routerModule);
    this.riba.module.regist(i18nModule(this.localesService));
    this.riba.module.regist(bs5Module);

    this.view = this.riba.bind(document.body, this.model);

    this.view.registComponents();
  }
}

ready(() => {
  new CSRApp();
});
