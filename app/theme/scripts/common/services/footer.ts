import { GraphQLClient } from "./graphql";
import { StrapiGqlFooterQuery, StrapiGqlComponentLinkItemLink } from "../types";
import { SectionsService } from "./sections";
import footerQuery from "../../../graphql/queries/footer.gql";

export class FooterService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: FooterService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (FooterService.instance) {
      return FooterService.instance;
    }
    FooterService.instance = new FooterService();
    return FooterService.instance;
  }

  async get() {
    const res = await this.graphql.requestCached<StrapiGqlFooterQuery>(
      footerQuery
    );

    return {
      mapLink: res.footer?.map_link,
      mapImageUrl: res.footer?.map_image?.url,
      mapImageAlt: res.footer?.map_image?.alternativeText,
      contactInfo: res.footer?.contact_info,
      links: (res.footer?.link || []) as StrapiGqlComponentLinkItemLink[],
    };
  }
}
