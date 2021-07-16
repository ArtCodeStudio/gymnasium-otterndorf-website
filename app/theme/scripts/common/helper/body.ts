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
    | string
) => {
  let tagName = "";
  if (typeof pageComponent === "string") {
    tagName = pageComponent.toLowerCase();
  } else {
    tagName = pageComponent.tagName.toLowerCase();
  }

  if (!tagName.endsWith("-page")) {
    console.warn('Page class must be ending with "-page"');
    return;
  }
  document.body.classList.add(tagName);
};

export const findPageElement = () => {
  const pageEl = document.querySelector<PageComponent>("router-view#main > *");
  return pageEl;
};

export const replaceBodyPageClass = (
  pageComponent?:
    | HTMLElement
    | PageComponent
    | Component
    | typeof PageComponent
    | typeof Component
    | string
) => {
  if (!pageComponent) {
    pageComponent = findPageElement() || undefined;
    if (!pageComponent) {
      throw new Error("Page element not found!");
    }
  }
  removeBodyPageClasses();
  setBodyPageClass(pageComponent);
};
