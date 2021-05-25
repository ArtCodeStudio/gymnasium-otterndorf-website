import { GraphQLClient } from "./graphql";
import { StrapiGqlNewsQuery, StrapiGqlNewsQueryVariables } from "../types";
import newsQuery from "../../../graphql/queries/news.gql";
// import { BlogService } from "./blog";

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
  image?: {
    url: string;
    altText: string;
  };
  typeName: string;
}[];

export class NewsService {
  protected graphql = GraphQLClient.getInstance();
  // protected blog = BlogService.getInstance()

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

  async list(amount = 2): Promise<NewsResult> {
    const vars: StrapiGqlNewsQueryVariables = { amount };
    const newsRes = await this.graphql.requestCached<StrapiGqlNewsQuery>(
      newsQuery,
      vars
    );
    const news: NewsResult = [];

    if (!newsRes.blogEntries) {
      return news;
    }

    //todo add pinned posts to news array
    for (const blogEntry of newsRes.blogEntries) {
      if (news.length == amount) return news;
      if (blogEntry?.__typename != "BlogEntry" || !blogEntry?.content)
        return news;

      news.push({
        author: blogEntry.author,
        createdAt: blogEntry.created_at,
        slug: blogEntry.slug,
        title: blogEntry.title,
        image: this.getImageFromBlogEntryContent(blogEntry.content),
        type: NewsType.Blog,
        typeName: NewsType[NewsType.Blog],
      });
    }

    return news;
  }

  protected getImageFromBlogEntryContent(
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
