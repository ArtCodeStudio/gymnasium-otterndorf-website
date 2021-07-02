import { Injectable } from '@nestjs/common';
import type {
  PodloveWebPlayerEpisode,
  PodloveWebPlayerConfig,
  PodloveWebPlayerSubscribeButton,
  PodloveWebPlayerPlaylistItem,
  PodloveWebPlayerChapter,
  PodloveWebPlayerShow,
  PodloveWebPlayerAudio,
  PodloveWebPlayerFile,
} from '@ribajs/podcast';

import { StrapiGqlPodcastEpisodeDetailFragmentFragment } from '../strapi/types';

import { FeedService } from '../feed/feed.service';
import { PostService } from '../post/post.service';
import { PodcastService } from '../podcast/podcast.service';
import { NavService } from '../nav';

@Injectable()
export class PodloveService {
  constructor(
    protected readonly feed: FeedService,
    protected readonly post: PostService,
    protected readonly podcast: PodcastService,
  ) {}

  public getConfigUrl() {
    return `${process.env.NEST_EXTERN_URL}/api/podlove/config`.replace(
      '//',
      '/',
    );
  }

  public async getChapters() {
    const chapters: PodloveWebPlayerChapter[] = [];
    return chapters;
  }

  public async getPlaylist() {
    const episodes = await this.podcast.list();
    const playlist: PodloveWebPlayerPlaylistItem[] = [];

    for (const episode of episodes) {
      playlist.push({
        config: this.getConfigUrl(),
        duration: '', // TODO
        title: episode.title,
      });
    }
    return playlist;
  }

  public async getSubscribeButtonConfig() {
    const feedUrl = this.feed.getFeedUrl();
    const config: PodloveWebPlayerSubscribeButton = {
      feed: feedUrl, // Rss feed

      /**
       * Clients
       * - list of supported podcast clients on android, iOS, Windows, OSX
       * - only available clients on the used os/platform are shown
       * - order in list determines rendered order
       */
      clients: [
        // TODO
        // {
        //   id: 'apple-podcasts',
        //   service: 'id1523714548', // https://podcasts.apple.com/podcast/[service]
        // },
        {
          id: 'antenna-pod',
        },
        {
          id: 'beyond-pod',
        },
        {
          id: 'castro',
        },
        {
          id: 'clementine',
        },
        {
          id: 'downcast',
        },
        {
          id: 'google-podcasts',
          service: feedUrl,
        },
        {
          id: 'gpodder',
        },
        {
          id: 'itunes',
        },
        {
          id: 'i-catcher',
        },
        {
          id: 'instacast',
        },
        {
          id: 'overcast',
        },
        {
          id: 'player-fm',
        },
        {
          id: 'pocket-casts',
        },
        {
          id: 'pocket-casts',
          service: feedUrl,
        },
        {
          id: 'pod-grasp',
        },
        {
          id: 'podcast-addict',
        },
        {
          id: 'podcast-republic',
        },
        {
          id: 'podcat',
        },
        {
          id: 'podscout',
        },
        {
          id: 'rss-radio',
        },
        {
          id: 'rss',
        },
      ],
    };

    return config;
  }

  public async getConfig(): Promise<PodloveWebPlayerConfig> {
    const config: PodloveWebPlayerConfig = {
      version: 5,

      // player asset base path, falls back to ./
      base: 'player/',

      activeTab: 'chapters', // default active tab, can be set to [chapters, files, share, playlist]

      theme: {
        /**
         * Tokens
         * - if defined the player defaults are dropped
         * - rgba as well as hex values are allowed
         * - use this generator to get a direct visual feedback:
         */
        tokens: {
          brand: '#87B0D4',
          brandDark: '#0F2942',
          brandDarkest: '#1A3A4A',
          brandLightest: '#E5EAECFF',
          shadeDark: '#807E7C',
          shadeBase: '#807E7C',
          contrast: '#000',
          alt: '#fff',
        },

        /**
         * Fonts
         * - by default the system font stack is used (https://css-tricks.com/snippets/css/system-font-stack/)
         *
         * font:
         * - name: font name that is used in the font stack
         * - family: list of fonts in a fallback order
         * - weight: font weight of the defined font
         * - src: list of web font sources (allowed: woff, woff2, ttf, eot, svg)
         */
        fonts: {
          ci: {
            name: 'RobotoBlack',
            family: [
              'RobotoBlack',
              'Calibri',
              'Candara',
              'Arial',
              'Helvetica',
              'sans-serif',
            ],
            weight: 900,
            src: ['./assets/roboto-black.woff2'],
          },
          regular: {
            name: 'FiraSansLight',
            family: [
              'FiraSansLight',
              'Calibri',
              'Candara',
              'Arial',
              'Helvetica',
              'sans-serif',
            ],
            weight: 300,
            src: ['./assets/fira-sans-light.woff2'],
          },
          bold: {
            name: 'FiraSansBold',
            family: [
              'FiraSansBold',
              'Calibri',
              'Candara',
              'Arial',
              'Helvetica',
              'sans-serif',
            ],
            weight: 700,
            src: ['./assets/fira-sans-normal.woff2'],
          },
        },
      },

      /**
       * Subscribe Button
       * - configuration for the subscribe button overlay
       * - if not defined the subscribe button won't be rendered
       */
      'subscribe-button': await this.getSubscribeButtonConfig(),

      /**
       * Playlist:
       * - can be a plain list or a reference to a json file
       * - if present playlist tab will be available
       */
      playlist: await this.getPlaylist(),

      /*
        Share Tab
      */
      share: {
        /**
         * Share Channels:
         * - list of available channels in share tab
         */
        channels: [
          'facebook',
          'twitter',
          'whats-app',
          'linkedin',
          'pinterest',
          'xing',
          'mail',
          'link',
        ],
        // share outlet, if not provided embed snippet is not available
        outlet: '/share.html',
        sharePlaytime: true,
      },
    };

    return config;
  }

  public async getShow(): Promise<PodloveWebPlayerShow> {
    const feedConfig = await this.podcast.getConfig();
    const show: PodloveWebPlayerShow = {
      title: feedConfig.title,
      subtitle: '', // TODO
      summary: feedConfig.description,
      poster: NavService.buildStrapiSrc(feedConfig.image?.url) || '',
      link: this.feed.getSiteUrl(),
    };

    return show;
  }

  protected async transformEpisodeToPodloveEpisode(
    episode: StrapiGqlPodcastEpisodeDetailFragmentFragment,
  ) {
    if (!episode.content || !episode.content.length) {
      throw new Error('An Audio file is required!');
    }

    const poster = episode.image;
    const posterUrl = NavService.buildStrapiSrc(poster.url);
    const summary = episode.description || '';
    const title = episode.title || '';
    const publicationDate = episode.pubDate || episode.published_at;
    const link = NavService.buildHref('podcast', episode.slug);

    const audioFiles: PodloveWebPlayerAudio[] = [];
    const downloadFiles: PodloveWebPlayerFile[] = [];

    for (const content of episode.content) {
      audioFiles.push({
        mimeType: content.mime,
        size: content.size.toString(),
        url: NavService.buildStrapiSrc(content.url),
        title: content.name,
      });
    }

    for (const content of episode.content) {
      downloadFiles.push({
        mimeType: content.mime,
        size: content.size.toString(),
        url: NavService.buildStrapiSrc(content.url),
        title: content.ext || content.name,
      });
    }

    const episodeConfig: PodloveWebPlayerEpisode = {
      // Configuration Version
      version: 5,

      /**
       * Show Related Information
       */
      show: await this.getShow(),

      /**
       * Episode related Information
       */
      title,
      subtitle: '', // TODO
      summary: summary,
      // ISO 8601 DateTime format, this is capable of adding a time offset, see https://en.wikipedia.org/wiki/ISO_8601
      publicationDate,
      poster: posterUrl,
      // ISO 8601 Duration format ([hh]:[mm]:[ss].[sss]), capable of add ing milliseconds, see https://en.wikipedia.org/wiki/ISO_8601
      duration: '01:31:18.610', // TODO
      link,
      /**
       * Audio Assets
       * - media Assets played by the audio player
       * - format support depends on the used browser (https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats)
       * - also supports HLS streams
       *
       * Asset
       * - url: absolute path to media asset
       * - size: file size in  byte
       * - (title): title to be displayed in download tab
       * - mimeType: media asset mimeType
       */
      audio: audioFiles,

      /**
       * Files
       * - list of files available for download
       * - if no files are present, audio assets will be used as downloads
       *
       * Asset
       * - url: absolute path to media asset
       * - size: file size in  byte
       * - title: title to be displayed in download tab
       * - (mimeType): media asset mimeType
       */
      files: downloadFiles,

      /**
       * Chapters:
       * - can be a plain list or a reference to a json file
       * - if present chapters tab will be available
       */
      chapters: await this.getChapters(),

      /**
       * Contributors
       * - used by info and transcripts tab
       *
       * Contributor
       * - id: used as a reference in transcripts
       * - name: name of the contributor
       * - (avatar): avatar of the contributor
       * - (group): contributors group
       */
      contributors: [
        {
          id: '1',
          name: 'Alexander Heimbuch',
          avatar: '/assets/alexander-heimbuch.jpeg',
          role: {
            id: '1',
            slug: 'team',
            title: 'Team',
          },
          group: {
            id: '2',
            slug: 'on-air',
            title: 'On Air',
          },
        },
        {
          id: '2',
          name: 'Michaela Lehr',
          avatar: '/assets/michaela-lehr.jpeg',
          role: {
            id: '1',
            slug: 'team',
            title: 'Team',
          },
          group: {
            id: '2',
            slug: 'on-air',
            title: 'On Air',
          },
        },
        {
          id: '3',
          name: 'Eric Teubert',
          avatar: '/assets/eric-teubert.jpeg',
          role: {
            id: '1',
            slug: 'team',
            title: 'Team',
          },
          group: {
            id: '2',
            slug: 'on-air',
            title: 'On Air',
          },
        },
        {
          id: '4',
          name: 'Simon',
          avatar: '/assets/simon.jpeg',
          role: {
            id: '2',
            slug: 'guest',
            title: 'Gast',
          },
          group: {
            id: '2',
            slug: 'on-air',
            title: 'On Air',
          },
        },
      ],

      /**
       * Transcripts:
       * - can be a plain list or a reference to a json file
       * - if present transcripts tab will be available
       */
      transcripts: [],
    };

    return episodeConfig;
  }

  public async getEpisodeByBlog(
    slug: string,
  ): Promise<PodloveWebPlayerEpisode> {
    const { podcastEpisode } = await this.post.getPodcastEpisode(slug);
    return await this.transformEpisodeToPodloveEpisode(podcastEpisode);
  }

  public async getEpisode(slug: string): Promise<PodloveWebPlayerEpisode> {
    const podcastEpisode = await this.podcast.get(slug);
    return await this.transformEpisodeToPodloveEpisode(podcastEpisode);
  }
}
