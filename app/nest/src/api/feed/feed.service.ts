import { Injectable } from '@nestjs/common';
import { PostService } from '../post';
import { SearchPost } from '../../types';
import { NavService } from '../nav';
import { PodcastService } from '../podcast/podcast.service';
import { MarkdownService } from '../markdown/markdown.service';
import { GeneralService } from '../general/general.service';
import { FeedType } from './types/feed-type';
import { Feed, FeedOptions, Item as FeedItem } from 'feed';
import { Awaited } from '../../types';
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
    protected readonly general: GeneralService,
  ) { }

  public getSiteUrl() {
    return NavService.buildNestSrc('');
  }

  public getFeedUrl(type: FeedType) {
    let url = 'api/feed/';
    switch (type) {
      case FeedType.rss:
        url += 'rss';
        break;
      case FeedType.atom:
        url += 'atom';
        break;
      case FeedType.json:
        url += 'json';
        break;
    }
    return NavService.buildNestSrc(url);
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
    let settings: Awaited<ReturnType<GeneralService['settings']>>;
    try {
      settings = await this.general.settings();
    } catch (error) {
      console.error(error);
    }

    const link = this.getSiteUrl();

    const options: FeedOptions = {
      title: settings.title,
      description: settings.description,
      id: link,
      link,
      copyright: settings.copyright || '',
      favicon: NavService.buildNestSrc('favicons/favicon.ico'),
      feedLinks: {
        rss: this.getFeedUrl(FeedType.rss),
        atom: this.getFeedUrl(FeedType.atom),
        json: this.getFeedUrl(FeedType.json),
      },
    };

    if (settings.image?.url) {
      options.image = NavService.buildStrapiSrc(settings.image.url);
    }

    if (settings.description) {
      options.description = settings.description;
    }

    if (settings.language) {
      options.language = settings.language;
    }

    if (settings.author_name) {
      options.author = options.author || {};
      options.author.name = settings.author_name;
    }

    if (settings.author_email) {
      options.author = options.author || {};
      options.author.name = settings.author_email;
    }

    const feed = new Feed(options);

    const posts = await this.post.list();

    for (const post of posts) {
      const item: FeedItem = {
        title: post.title,
        link: NavService.buildHref('post', post.slug, true),
        date: new Date(post.updatedAt),
        content: await this.markdown.html(post.md),
        author: [
          {
            name: post.author,
          },
        ],
      };

      if (post.images.length && post.images[0]?.url) {
        item.image = NavService.buildStrapiSrc(post.images[0].url);
      }

      feed.addItem(item);
    }

    return feed;
  }

  // TODO properties, see https://github.com/maxnowack/node-podcast
  public async getPodcast() {
    const feedConfig = await this.podcast.getConfig();
    const episodes = await this.podcast.listRaw();

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

    const feedImage = feedConfig.image?.url
      ? NavService.buildStrapiSrc(feedConfig.image.url)
      : undefined;

    const feed = new Podcast({
      title: feedConfig.title,
      language: feedConfig.language,
      feedUrl: this.getPodcastFeedUrl(),
      siteUrl: this.podcast.getOverviewUrl(),
      author: feedConfig.owner_name, // TODO
      itunesOwner: {
        email: feedConfig.owner_email,
        name: feedConfig.owner_name,
      },
      copyright: feedConfig.copyright,
      description: feedConfig.description,
      imageUrl: feedImage,
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

      const episodeImage = episode.image?.url
        ? NavService.buildStrapiSrc(episode.image.url)
        : feedImage;

      feed.addItem({
        title: episode.title,
        description: episode.subtitle,
        content: html,
        url: this.podcast.getEpisodeUrl(episode.slug),
        date: new Date(episode.pubDate),
        // author: episode.author, TODO
        guid: episode.id,
        imageUrl: episodeImage,
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
