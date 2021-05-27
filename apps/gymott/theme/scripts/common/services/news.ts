import { GraphQLClient } from "./graphql";
import {
  StrapiGqlNewsQuery,
  StrapiGqlNewsQueryVariables,
  News,
} from "../types";
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

  async list(amount = 2): Promise<News> {
    const vars: StrapiGqlNewsQueryVariables = { amount };
    const newsRes = await this.graphql.requestCached<StrapiGqlNewsQuery>(
      newsQuery,
      vars
    );
    const news: News = [];

    //todo add pinned posts to news array
    if (newsRes.blogEntries) {
      for (const blogEntry of newsRes.blogEntries) {
        if (news.length === amount) return news;
        if (blogEntry) {
          news.push(blogEntry);
        }
      }
    }

    return news;
  }
}
