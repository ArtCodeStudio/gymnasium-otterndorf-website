import { GraphQLClient } from "./graphql";
import { StrapiGqlNewsQuery, StrapiGqlNewsQueryVariables } from "../types";
import newsQuery from "../../../graphql/queries/news.gql";

export enum NewsType {
  Pinned,
  Page,
  Blog,
}

export type NewsResult = {
  author: string | undefined;
  title: string;
  createdAt: Date;
  slug: string;
  type: NewsType;
  image:
    | {
        url: string;
        altText: string;
      }
    | undefined;
  typeName: string;
}[];

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

  async getNews(amount = 2): Promise<any[]> {
    const vars: StrapiGqlNewsQueryVariables = { amount };
    const newsRes = await this.graphql.requestCached<StrapiGqlNewsQuery>(
      newsQuery,
      vars
    );
    const news: NewsResult = [];

    //todo add pinned posts to news array
    newsRes.blogEntries?.forEach((e) => {
      if (news.length == amount) return;
      if (e?.__typename != "BlogEntry" || !e?.content) return;

      news.push({
        author: e.author,
        createdAt: e.created_at,
        slug: e.slug,
        title: e.title,
        image: this.getImageFromBlogEntryContent(e.content),
        type: NewsType.Blog,
        typeName: NewsType[NewsType.Blog],
      });
    });

    return news;
  }

  public getImageFromBlogEntryContent(
    blogEntryContent: any
  ): NewsResult[number]["image"] {
    let titleImage;
    for (const entry of blogEntryContent) {
      if (entry?.__typename == "ComponentContentImage") {
        titleImage = entry.image;
        break;
      }
    }
    if (titleImage) {
      let url = titleImage.url;
      if (titleImage.formats && titleImage.formats["small"]) {
        url = titleImage.formats["small"].url;
      }
      return {
        url: url,
        altText: titleImage.alternativeText,
      };
    }
  }
}
