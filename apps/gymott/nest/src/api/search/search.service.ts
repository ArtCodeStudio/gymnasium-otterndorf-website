/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { LunrService, SearchResultExt } from '@ribajs/nest-lunr';
import { StrapiService } from '../strapi/strapi.service';
import { NavService } from '../nav';
import { PageService } from '../page';
import { PostService } from '../post';
import type { LunrExt, Namespace } from './types';
import { REF_KEYS } from './constants';

@Injectable()
export class SearchService implements OnModuleInit {
  constructor(
    readonly lunr: LunrService,
    readonly strapi: StrapiService,
    protected readonly nav: NavService,
    protected readonly page: PageService,
    protected readonly post: PostService,
  ) {
    this.initLunrPlugins();
    this.initPage();
    this.initNav();
    this.initPost();
    this.initBlog();
  }

  protected initLunrPlugins() {
    require('lunr-languages/lunr.stemmer.support')(LunrService.lunr);
    require('lunr-languages/lunr.de')(LunrService.lunr);
  }

  protected initPage() {
    const ns: Namespace = 'page';
    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExt).de, args: [] }],
    });
  }

  protected initNav() {
    const ns: Namespace = 'nav';
    this.lunr.create(ns, {
      fields: { title: { boost: 4 } },
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExt).de, args: [] }],
    });
  }

  protected initPost() {
    const ns: Namespace = 'post';
    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExt).de, args: [] }],
    });
  }

  protected initBlog() {
    // const ns: Namespace = 'blog';
    // TODO
  }

  public async search(ns: Namespace, query: string) {
    return this.lunr.search(ns, query) as SearchResultExt[] | null;
  }

  public async searchAll(query: string) {
    return this.lunr.searchAll(query) as SearchResultExt[];
  }

  public async refreshPage() {
    const ns: Namespace = 'page';
    const pages = await this.page.list();

    console.debug(ns, JSON.stringify(pages, null, 2));

    for (const page of pages) {
      this.lunr.add(ns, page);
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshNav() {
    const ns: Namespace = 'nav';
    const navs = await this.nav.list([]);

    console.debug(ns, JSON.stringify(navs, null, 2));

    for (const nav of navs) {
      this.lunr.add(ns, nav);
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshPost() {
    const ns: Namespace = 'post';
    const posts = await this.post.list();

    console.debug(ns, JSON.stringify(posts, null, 2));

    for (const post of posts) {
      this.lunr.add(ns, post);
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshBlog() {
    // TODO
  }

  public async refresh() {
    this.refreshPage();
    this.refreshNav();
    this.refreshPost();
    this.refreshBlog();
  }

  onModuleInit() {
    this.refresh();
  }
}
