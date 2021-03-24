import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { GraphQLNavigationEntries, helper } from '@gymott/common';

@Injectable()
export class NavigationService {
  constructor(readonly strapi: StrapiService) {}

  public async getNavigation() {
    const navigationRes = (await this.strapi.graphql.execute(
      'graphql/queries/navigation-entries',
      {},
    )) as GraphQLNavigationEntries;

    if (!navigationRes?.menu?.entries) {
      const error = new Error('Not found!');
      throw error;
    }
    const baseEntries = navigationRes?.menu.entries;
    const tree = helper.navigation.buildTree(baseEntries);
    return tree;
  }
}
