import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import {
  StrapiGqlGeneralSettingsQuery,
  StrapiGqlGeneralSettingsQueryVariables,
} from '../strapi/types';

@Injectable()
export class GeneralService {
  constructor(readonly strapi: StrapiService) {
    //
  }

  public async settings() {
    const vars: StrapiGqlGeneralSettingsQueryVariables = {};
    const result =
      await this.strapi.graphql.execute<StrapiGqlGeneralSettingsQuery>(
        'graphql/queries/general-settings',
        vars,
      );
    return result.generalSetting;
  }
}
