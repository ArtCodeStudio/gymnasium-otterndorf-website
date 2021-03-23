import { Injectable, OnModuleInit } from '@nestjs/common';
import { theme } from '../config/config';
import { FlexSearchService } from '../flexsearch/flexsearch.service';
import { GraphQLClient } from '@ribajs/node-graphql-client';

@Injectable()
export class SearchService implements OnModuleInit {
  graphql: GraphQLClient;
  constructor(flexsearch: FlexSearchService) {
    this.graphql = new GraphQLClient(
      process.env.STRAPI_INTERN_URL,
      {},
      theme.themeDir,
    );
  }

  protected async loadNavigation() {
    const result = await this.graphql.execute(
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
