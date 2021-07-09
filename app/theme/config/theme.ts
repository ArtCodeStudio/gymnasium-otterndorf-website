import type { ThemeConfigFile, ThemeConfig } from "@ribajs/ssr";

export const config: ThemeConfigFile = (env: string | undefined) => {
  const config: ThemeConfig = {
    name: "Demo Theme",
    viewEngine: "pug",
    assetsDir: "assets",
    viewsDir: "templates",
    pageComponentsDir: "scripts/ssr/pages",
    timeout: 5000,
    cache: {
      // One year cache on production
      ttl: env === "production" ? 31556952 : 0,
      refresh: {
        active: env === "production",
        startPath: "/sitemap",
      },
    },
    ssr: {
      rootTag: "ssr-root-page",
      template: "page-component.pug",
    },
    routes: [
      {
        path: ["/"],
        component: "index-page",
      },
      {
        path: ["/page", "/seite"],
        component: "pages-page",
      },
      {
        path: ["/page/:slug", "/seite/:slug"],
        component: "page-page",
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
        path: ["/school-subject", "/schulfach"],
        component: "school-subjects-page",
      },
      {
        path: ["/school-subject/:slug", "/schulfach/:slug"],
        component: "school-subject-page",
      },
      {
        path: ["/gallery/:slug", "/bilder/:slug"],
        component: "gallery-page",
      },
      {
        path: ["/media-center/:slug", "/mediathek/:slug"],
        component: "media-center-page",
      },
      {
        path: ["/sitemap"],
        component: "sitemap-page",
      },
      {
        path: ["/teacher", "/lehrer", "/teacher/:slug", "/lehrer/:slug"],
        component: "teacher-page",
      },
      {
        path: ["/podcast"],
        component: "podcast-page",
      },
      {
        path: ["/podcast/:slug", "/seite/:slug"],
        component: "podcast-episode-page",
      },
      {
        path: ["/credits"],
        component: "credits-page",
      },
      {
        path: ["/students/quote"],
        component: "students-quotes-page",
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
  return config;
};
