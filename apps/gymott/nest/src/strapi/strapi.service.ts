import { Injectable } from '@nestjs/common';
import { theme } from '../config/config';
import { GraphQLClient } from '@ribajs/node-graphql-client';

@Injectable()
export class StrapiService {
  protected _graphql: GraphQLClient;

  public get graphql() {
    return this._graphql;
  }

  constructor() {
    const url = process.env.STRAPI_INTERN_URL + '/graphql';
    this._graphql = new GraphQLClient(url, {}, theme.themeDir);
  }
}
