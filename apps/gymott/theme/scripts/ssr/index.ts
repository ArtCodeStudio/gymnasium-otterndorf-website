import "@ribajs/ssr/src/polyfills";
import { SSRModule } from "@ribajs/ssr";
import { Riba, View, coreModule } from "@ribajs/core";
// import { i18nModule, LocalesStaticService } from "@ribajs/i18n";
// import { ready } from "@ribajs/utils/src/dom";

// Own
import * as pageComponents from "./pages";
import { LinkListComponent } from "./components/link-list/link-list.component";
import { GyHomeComponent } from "./components/gy-home/gy-home.component";
import * as binders from "./binders";
import * as formatters from "./formatters";
// import locales from "./locales";

declare global {
  interface Window {
    model: any;
    riba: Riba;
    view: View;
  }
}

window.model = window.model || {};
window.riba = new Riba();
window.riba.configure({ prefix: "ssr-rv", blockUnknownCustomElements: false });

// Regist custom components
window.riba.module.regist({
  components: { ...pageComponents, LinkListComponent, GyHomeComponent },
  binders,
  formatters,
});

// const localesService = new LocalesStaticService(locales, undefined, false);
// window.riba.module.regist(i18nModule(localesService));

// Regist modules
window.riba.module.regist(coreModule);
window.riba.module.regist(SSRModule);

console.log("Hello from Riba");

window.view = window.riba.bind(document.body, window.model);

// WORKAROUND / FIXME view.traverse method seems not to be working in jsdom / happy-dom
window.view.registComponents();

document.body.setAttribute("works", ":)");
