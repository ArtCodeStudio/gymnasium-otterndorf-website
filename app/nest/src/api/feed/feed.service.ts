import { Injectable } from '@nestjs/common';
import { PostService } from '../post';
import { SearchPost } from '../../types';
import { NavService } from '../nav';
import { PodcastService } from '../podcast/podcast.service';
import { MarkdownService } from '../markdown/markdown.service';
import { Feed } from 'feed';
import {
  Podcast,
  FeedItunesCategory,
  ItemSimpleChaptersChapters,
} from 'podcast';

@Injectable()
export class FeedService {
  constructor(
    protected readonly post: PostService,
    protected readonly podcast: PodcastService,
    protected readonly markdown: MarkdownService,
  ) {}

  public getSiteUrl() {
    return NavService.buildNestSrc('');
  }

  public getFeedUrl() {
    return NavService.buildNestSrc('api/feed/rss');
  }

  public getPodcastEpisodeUrl() {
    return NavService.buildNestSrc('api/feed/rss');
  }

  public getPodcastFeedUrl() {
    return NavService.buildNestSrc('api/feed/podcast');
  }

  // TODO move to post service
  public getPostUrl(post: SearchPost) {
    return NavService.buildNestSrc(post.href);
  }

  // TODO properties, see https://github.com/jpmonette/feed
  public async get() {
    const feed = new Feed({
      title: 'Gymnasium Otterndorf Neuigkeiten',
      id: NavService.buildNestSrc(''),
      link: this.getSiteUrl(),
      copyright: '2021, Gymnasium Otterndorf',
    });

    const posts = await this.post.list();

    for (const post of posts) {
      feed.addItem({
        title: post.title,
        link: NavService.buildNestSrc('blog'),
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
    const feedConfig = await this.podcast.getConfig();
    const episodes = await this.podcast.list();

    // TODO
    if (!feedConfig) {
      return new Podcast({});
    }

    let itunesCategory: FeedItunesCategory[] = [];
    feedConfig.category = feedConfig?.category || [];

    if (feedConfig?.category) {
      itunesCategory = await this.podcast.buildCategoryTreeForNodePodcast(
        feedConfig.category,
      );
    }

    const feed = new Podcast({
      title: feedConfig.title,
      language: feedConfig.language,
      feedUrl: this.getFeedUrl(),
      siteUrl: this.getSiteUrl(),
      author: feedConfig.owner_name, // TODO
      itunesOwner: {
        email: feedConfig.owner_email,
        name: feedConfig.owner_name,
      },
      copyright: feedConfig.copyright,
      description: feedConfig.description,
      imageUrl: feedConfig.image?.url,
      itunesExplicit: feedConfig.explicit || false,
      itunesSubtitle: feedConfig.subtitle,
      itunesType: feedConfig.type.toLowerCase() as 'episodic' | 'serial',
      itunesCategory,
    });

    for (const episode of episodes) {
      if (
        !episode?.content?.length ||
        !episode.content[0] ||
        !episode.content[0].url
      ) {
        continue;
      }

      // TODO add to iTunes namespace
      if (episode.block) {
        continue;
      }

      const audioFile = {
        ...episode.content[0],
        duration: await this.podcast.getAudioDuration(episode.content[0].url),
      };

      const html = await this.markdown.html(episode.description);

      const chapters = this.podcast.transformChapters(episode, true);

      const pscChapters: ItemSimpleChaptersChapters = {
        version: '1.2',
        chapter: chapters,
      };

      feed.addItem({
        title: episode.title,
        description: episode.subtitle,
        content: html,
        url: await this.podcast.getEpisodeUrl(episode.slug),
        date: new Date(episode.pubDate),
        // author: episode.author, TODO
        guid: episode.id,
        itunesImage: episode.image?.url,
        itunesSubtitle: episode.subtitle,
        itunesEpisode: episode.episode,
        itunesSeason: episode.season,
        itunesExplicit: episode.explicit || false,
        // itunesBlock: episode.block || false,
        itunesDuration: audioFile.duration,
        enclosure: {
          url: NavService.buildStrapiSrc(audioFile.url),
          file: audioFile.name,
          size: audioFile.size,
        },
        pscChapters,
      });
    }

    return feed;
  }
}
