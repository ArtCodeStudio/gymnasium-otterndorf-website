/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { LunrService } from '@ribajs/nest-lunr';
import { NavService, SearchNav } from '../nav';
import { PageService, SearchPage } from '../page';
import type { Builder } from 'lunr';

@Injectable()
export class SearchService implements OnModuleInit {
  protected searchPage: Builder;
  protected searchNav: Builder;

  constructor(
    readonly lunr: LunrService,
    protected readonly nav: NavService,
    protected readonly page: PageService,
  ) {
    require('lunr-languages/lunr.stemmer.support')(LunrService.lunr);
    require('lunr-languages/lunr.de')(LunrService.lunr);

    const pageFields: Array<keyof SearchPage> = ['title', 'slug', 'text'];
    this.searchPage = this.lunr.create('page', {
      fields: pageFields,
      plugins: [{ plugin: (LunrService.lunr as any).de, args: [] }],
      metadataWhitelist: ['position', 'index'],
    });

    const navFields: Array<keyof SearchNav> = ['title'];
    this.searchNav = this.lunr.create('nav', {
      fields: navFields,
      plugins: [{ plugin: (LunrService.lunr as any).de, args: [] }],
      metadataWhitelist: ['position', 'index'],
    });
  }

  public async refresh() {
    const navs = await this.nav.get();
    const pages = await this.page.list();

    console.debug('navs', JSON.stringify(navs, null, 2));
    console.debug('pages', JSON.stringify(pages, null, 2));

    for (const nav of navs) {
      this.searchNav.add(nav);
    }
    this.lunr.buildIndex('nav');

    for (const page of pages) {
      this.searchPage.add(page);
    }
    this.lunr.buildIndex('page');
  }

  onModuleInit() {
    this.refresh();
  }
}
