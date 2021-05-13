import { GraphQLClient } from "./graphql";
import { StrapiGqlNewsQuery, StrapiGqlNewsQueryVariables } from "../types";
import newsQuery from "../../../graphql/queries/news.gql";

export class NewsService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: NewsService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (NewsService.instance) {
      return NewsService.instance;
    }
    NewsService.instance = new NewsService();
    return NewsService.instance;
  }

  async getNews(amount = 2): Promise<StrapiGqlNewsQuery["blogEntries"]> {
    const vars: StrapiGqlNewsQueryVariables = { amount };
    const newsRes = await this.graphql.requestCached<StrapiGqlNewsQuery>(
      newsQuery,
      vars
    );
    const news = newsRes.blogEntries || [];
    return news;
  }
}
