import { GraphQLClient } from "./graphql";
import {
  StrapiGqlGeneralSettingsQuery,
  StrapiGqlGeneralSettingsQueryVariables,
} from "../types";

import generalSettingsQuery from "../../../graphql/queries/general-settings.gql";

export class GeneralService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: GeneralService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (GeneralService.instance) {
      return GeneralService.instance;
    }
    GeneralService.instance = new GeneralService();
    return GeneralService.instance;
  }

  async settings() {
    const vars: StrapiGqlGeneralSettingsQueryVariables = {};
    const response =
      await this.graphql.requestCached<StrapiGqlGeneralSettingsQuery>(
        generalSettingsQuery,
        vars
      );
    const generalSetting = response.generalSetting;
    return generalSetting;
  }
}
