import { GraphQLClient } from "./graphql";
import { StrapiGqlFooterQuery } from "../types";
import { SectionsService } from "./sections";
import footerQuery from "../../../graphql/queries/footer.gql";
import { pageFormatter, postFormatter } from "../../common/formatters";

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

    const links: { title: string; url: string }[] = [];

    if (res.footer?.link) {
      for (const el of res.footer?.link) {
        const type = el?.navigation_link?.type;
        if (!type) return;

        let url = undefined;

        switch (type[0]?.__typename) {
          case "ComponentLinkTypeWeb":
            url = type[0].URL;
            break;
          case "ComponentLinkTypePage":
            url = pageFormatter.read(type[0].page?.slug);
            break;
          case "ComponentLinkTypePost":
            url = postFormatter.read(type[0].post?.slug);
            break;
        }

        if (url && el?.navigation_link?.title) {
          links.push({
            title: el?.navigation_link?.title,
            url: url,
          });
        }
      }
    }

    return {
      mapLink: res.footer?.map_link,
      mapImageUrl: res.footer?.map_image?.url,
      mapImageAlt: res.footer?.map_image?.alternativeText,
      contactInfo: res.footer?.contact_info,
      links: links,
    };
  }
}
