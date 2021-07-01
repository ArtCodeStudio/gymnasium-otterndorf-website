import { Injectable } from '@nestjs/common';
import { PostService } from '../post';
import { SearchPost } from '../../types';
import { MarkdownService } from '../markdown/markdown.service';
import { Feed } from 'feed';
import * as Podcast from 'podcast';

@Injectable()
export class FeedService {
  constructor(
    protected readonly post: PostService,
    protected readonly markdown: MarkdownService,
  ) {}

  public getSiteUrl() {
    return process.env.NEST_EXTERN_URL;
  }

  public getFeedUrl() {
    return `${process.env.NEST_EXTERN_URL}/api/feed/podcast`.replace('//', '/');
  }

  public getPostUrl(post: SearchPost) {
    return process.env.NEST_EXTERN_URL + post.href.replace('//', '/');
  }

  // TODO properties, see https://github.com/jpmonette/feed
  public async get() {
    const feed = new Feed({
      title: 'Gymnasium Otterndorf Neuigkeiten',
      id: process.env.NEST_EXTERN_URL,
      link: process.env.NEST_EXTERN_URL,
      copyright: '2021, Gymnasium Otterndorf',
    });

    const posts = await this.post.list();

    for (const post of posts) {
      feed.addItem({
        title: post.title,
        link: process.env.NEST_EXTERN_URL + post.href.replace('//', '/'),
        date: new Date(post.updatedAt),
        content: await this.markdown.html(post.md),
        author: [
          {
            name: post.author,
          },
        ],
        // image
      });
    }

    return feed;
  }

  // TODO properties, see https://github.com/maxnowack/node-podcast
  public async getPodcast() {
    const feed = new Podcast({
      title: 'Gymnasium Otterndorf Podcast',
      feedUrl: this.getFeedUrl(),
      siteUrl: this.getSiteUrl(),
      author: 'Gymnasium Otterndorf',
      copyright: 'All rights reserved 2021, Gymnasium Otterndorf',
    });

    const posts = await this.post.list();

    for (const post of posts) {
      feed.addItem({
        title: post.title,
        description: post.text, // TODO trim
        content: await this.markdown.html(post.md),
        url: this.getPostUrl(post),
        date: new Date(post.updatedAt), // TODO created
        author: post.author,
        // image
      });
    }

    return feed;
  }
}
