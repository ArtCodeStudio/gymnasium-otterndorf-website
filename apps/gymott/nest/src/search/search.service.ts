import { Injectable, OnModuleInit } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { FlexSearchService } from '../flexsearch/flexsearch.service';

@Injectable()
export class SearchService implements OnModuleInit {
  constructor(
    readonly strapi: StrapiService,
    readonly flexsearch: FlexSearchService,
  ) {}

  protected async loadNavigation() {
    const result = await this.strapi.graphql.execute(
      'graphql/queries/navigation-entries',
    );
    console.debug('loadNavigation result', result);
  }

  public async refresh() {
    try {
      await this.loadNavigation();
    } catch (error) {
      console.error(error);
    }
  }

  onModuleInit() {
    this.refresh();
  }
}
