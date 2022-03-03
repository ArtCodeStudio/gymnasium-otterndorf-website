import "@ribajs/ssr/src/polyfills";
import "../common/@types";
import { SSRModule } from "@ribajs/ssr";
import { Riba, coreModule } from "@ribajs/core";
import { Bs5IconComponent, bs5Module } from "@ribajs/bs5";
import { artAndCodeStudioModule } from "@ribajs/artcodestudio";
import { strapiModule } from "@ribajs/strapi";
import { luxonModule } from "@ribajs/luxon";

// Common
import * as commonBinders from "../common/binders";
import * as commonComponents from "../common/components";
import * as commonFormatters from "../common/formatters";

// Own
import * as pageComponents from "./pages";
import * as components from "./components";
import * as binders from "./binders";
import * as formatters from "./formatters";

declare global {
  interface Window {
    env: {
      STRAPI_STUDENT_REMOTE_URL: string;
      STRAPI_REMOTE_URL: string;
      NEST_REMOTE_URL: string;
    };
    model: any;
  }
}

window.model = window.model || window.ssr.templateVars || {};

const riba = new Riba();

// These Riba settings are necessary for the ssr
riba.configure({
  prefix: ["rv", "ssr-rv"],
  blockUnknownCustomElements: false,
  templateDelimiters: ["[", "]"],
});

bs5Module.init();

// Regist custom components
riba.module.component.regists({
  ...commonComponents,
  ...pageComponents,
  ...components,
  Bs5IconComponent,
});
riba.module.binder.regists({ ...commonBinders, ...binders });
riba.module.formatter.regists({ ...commonFormatters, ...formatters });

// Regist modules
riba.module.regist(
  coreModule.init({
    lifecycle: {
      timeout: 9000,
    },
  })
);
riba.module.regist(SSRModule.init({}));
riba.module.regist(artAndCodeStudioModule.init({}));
riba.module.regist(luxonModule.init({}));
riba.module.regist(strapiModule.init({}));

riba.bind(document?.body, window.model);
