import type { ThemeConfig } from "@ribajs/ssr";

export const themeConfig: ThemeConfig = {
  name: "Demo Theme",
  viewEngine: "pug",
  assetsDir: "assets",
  viewsDir: "templates",
  pageComponentsDir: "scripts/ssr/pages",
  ssr: {
    engine: "jsdom",
    rootTag: "ssr-root-page",
    template: "page-component.pug",
  },
  routes: [
    {
      path: ["/"],
      component: "index-page",
    },
    {
      path: ["/page/:slug"],
      component: "pages-page",
    },
    {
      path: ["/post/:slug"],
      component: "blog-entry-page",
    },
    {
      path: ["/blog", "/blog/:slug"],
      component: "blog-page",
    },
    {
      path: ["/sitemap"],
      component: "sitemap-page",
    },
  ],
  errorRoutes: {
    404: {
      component: "not-found-page",
    },
    500: {
      component: "error-page",
    },
  },
};
