import type { PageComponent, Component } from "@ribajs/ssr";

const removeBodyPageClasses = () => {
  document.body.classList.forEach((cls) => {
    if (cls && cls.endsWith("-page")) {
      document.body.classList.remove(cls);
    }
  });
};

const setBodyPageClass = (
  pageComponent:
    | HTMLElement
    | PageComponent
    | Component
    | typeof PageComponent
    | typeof Component
) => {
  const cls = pageComponent.tagName.toLowerCase();
  if (!cls.endsWith("-page")) {
    console.warn('Page class must be ending with "-page"');
    return;
  }
  document.body.classList.add(cls);
};

export const replaceBodyPageClass = (
  pageComponent:
    | HTMLElement
    | PageComponent
    | Component
    | typeof PageComponent
    | typeof Component
) => {
  removeBodyPageClasses();
  setBodyPageClass(pageComponent);
};
