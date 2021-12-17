import { ready } from "@ribajs/utils/src/dom";
import { replaceBodyPageClass } from "../common";
import { Riba, coreModule } from "@ribajs/core";
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
      STRAPI_STUDENT_REMOTE_URL: string;
      NEST_REMOTE_URL: string;
    };
  }
}

const bootstrap = () => {
  const riba = new Riba();
  const model: any = {};
  const routerEvents = EventDispatcher.getInstance("main");

  const onPageChanges = () => {
    replaceBodyPageClass();
  };

  riba.configure({
    prefix: ["rv", "csr-rv"],
  });

  // Regist custom components
  riba.module.component.regists({
    ...commonComponents,
    ...components,
    ...pages,
  });
  riba.module.binder.regists({ ...commonBinders, ...binders });
  riba.module.formatter.regists({ ...commonFormatters, ...formatters });

  // Regist modules
  riba.module.regist(coreModule.init());
  riba.module.regist(extrasModule.init());
  riba.module.regist(
    routerModule.init({
      defaultTransition: new FadeTransition(),
      scrollToAnchorOffset: 100,
    })
  );
  riba.module.regist(
    bs5Module.init({
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
      ],
    })
  );
  riba.module.regist(bs5PhotoswipeModule);
  riba.module.regist(leafletModule);
  riba.module.regist(masonryModule);
  riba.module.regist(contentSliderModule.init({}));
  riba.module.regist(artAndCodeStudioModule.init({}));
  riba.module.regist(podcastModule.init({}));
  riba.module.regist(strapiModule.init({}));

  riba.bind(document?.body, model);

  riba.lifecycle.events.on("ComponentLifecycle:error", (error: Error) => {
    console.error(error);
  });

  routerEvents.on("transitionCompleted", onPageChanges, this);
};

ready(bootstrap);
