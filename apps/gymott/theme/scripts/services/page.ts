
import { SSRGraphQLClient } from "./ssr-graphql";
import pageQuery from "../../../graphql/queries/page-by-slug.gql"; 

export class PageService {

    protected graphql = SSRGraphQLClient.getInstance();

    protected static instance: PageService;

    protected constructor() {}

    public static getInstance() {
        if(PageService.instance) {
          return PageService.instance;
        }
        PageService.instance = new PageService();
        return PageService.instance;
      }

    async get(slug: string) {
        const pageRes = await this.graphql.request(pageQuery, { slug });
        if (!Array.isArray(pageRes.pages) || pageRes.pages.length <= 0) {
            return pageRes.pages;
        }
        const page = pageRes.pages[0];
        return page;
    }
}