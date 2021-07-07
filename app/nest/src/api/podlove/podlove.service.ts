import { Injectable } from '@nestjs/common';
import type {
  PodloveWebPlayerEpisode,
  PodloveWebPlayerConfig,
  PodloveWebPlayerSubscribeButton,
  PodloveWebPlayerPlaylistItem,
  PodloveWebPlayerShow,
  PodloveWebPlayerAudio,
  PodloveWebPlayerFile,
  PodloveWebPlayerTheme,
} from '@ribajs/podcast';
import { MarkdownService } from '../markdown/markdown.service';

import { StrapiGqlPodcastEpisodeDetailFragmentFragment } from '../strapi/types';

import { FeedService } from '../feed/feed.service';
import { PostService } from '../post/post.service';
import { PodcastService } from '../podcast/podcast.service';
import { StrapiService } from '../strapi/strapi.service';
import { NavService } from '../nav';

@Injectable()
export class PodloveService {
  constructor(
    protected readonly feed: FeedService,
    protected readonly post: PostService,
    protected readonly podcast: PodcastService,
    protected readonly strapi: StrapiService,
    protected readonly markdown: MarkdownService,
  ) {}

  public getConfigUrl() {
    return NavService.buildNestSrc('api/podlove/config');
  }

  public getEpisodeConfigUrl(slug: string) {
    return NavService.buildNestSrc(`api/podlove/episode/${slug}`);
  }

  public getChapters(episode: StrapiGqlPodcastEpisodeDetailFragmentFragment) {
    return this.podcast.transformChapters(episode, true);
  }

  public async getPlaylist(activeEpisodeSlug?: string) {
    const episodes = await this.podcast.list();
    const playlist: PodloveWebPlayerPlaylistItem[] = [];

    for (const episode of episodes) {
      if (episode) {
        const duration = await this.podcast.getAudioDuration(
          episode.content?.[0]?.url,
        );

        playlist.push({
          config: this.getEpisodeConfigUrl(episode.slug),
          duration,
          title: episode.title,
          active: activeEpisodeSlug === episode.slug,
        });
      }
    }
    return playlist;
  }

  public async getSubscribeButtonConfig() {
    const feedUrl = this.feed.getPodcastFeedUrl();
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
        // {
        //   id: 'google-podcasts',
        //   service: feedUrl,
        // },
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
        // {
        //   id: 'pocket-casts',
        //   service: feedUrl,
        // },
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

  public async getThemeConfig(): Promise<PodloveWebPlayerTheme> {
    const theme: PodloveWebPlayerTheme = {
      /**
       * Tokens
       * - if defined the player defaults are dropped
       * - rgba as well as hex values are allowed
       * - use this generator to get a direct visual feedback:
       */
      tokens: {
        brand: '#006825',
        brandDark: '#0075BD',
        brandDarkest: '#0075BD',
        brandLightest: '#5DCED1',
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
          name: 'Lexend',
          family: [
            'Lexend',
            'Calibri',
            'Candara',
            'Arial',
            'Helvetica',
            'sans-serif',
          ],
          weight: 800,
          src: ['/fonts/lexend/wlpzgwvFAVdoq2_nXIIB3kZK.woff2'],
        },
        regular: {
          name: 'Lexend',
          family: [
            'Lexend',
            'Calibri',
            'Candara',
            'Arial',
            'Helvetica',
            'sans-serif',
          ],
          weight: 300,
          src: ['/fonts/lexend/wlpzgwvFAVdoq2_nUIYB3kZK.woff2'],
        },
        bold: {
          name: 'Lexend',
          family: [
            'Lexend',
            'Calibri',
            'Candara',
            'Arial',
            'Helvetica',
            'sans-serif',
          ],
          weight: 600,
          src: ['/fonts/lexend/wlpzgwvFAVdoq2_nJIAB3kZK.woff2'],
        },
      },
    };

    return theme;
  }

  public async getConfig(
    activeEpisodeSlug?: string,
    overwrite: Partial<PodloveWebPlayerConfig> = {},
  ): Promise<PodloveWebPlayerConfig> {
    if (!activeEpisodeSlug) {
      activeEpisodeSlug = (await this.podcast.latest())?.slug;
    }

    const config: PodloveWebPlayerConfig = {
      version: 5,

      // player asset base path, falls back to ./
      base: 'player/',

      activeTab: 'none',

      theme: await this.getThemeConfig(),

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
      playlist: await this.getPlaylist(activeEpisodeSlug),

      /**
       * Share Tab
       * TODO
       */
      // share: {
      //   /**
      //    * Share Channels:
      //    * - list of available channels in share tab
      //    */
      //   channels: [
      //     'facebook',
      //     'twitter',
      //     'whats-app',
      //     'linkedin',
      //     'pinterest',
      //     'xing',
      //     'mail',
      //     'link',
      //   ],
      //   // share outlet, if not provided embed snippet is not available
      //   outlet: '/share.html',
      //   sharePlaytime: true,
      // },

      ...overwrite,
    };
    return config;
  }

  public async getShow(): Promise<PodloveWebPlayerShow> {
    const feedConfig = await this.podcast.getConfig();
    const show: PodloveWebPlayerShow = {
      title: feedConfig.title || '',
      subtitle: feedConfig.subtitle || '',
      summary: await this.markdown.html(feedConfig.description),
      poster: NavService.buildStrapiSrc(feedConfig.image?.url) || '',
      link: this.feed.getSiteUrl(),
    };

    return show;
  }

  protected async transformEpisodeToPodloveEpisode(
    episode: StrapiGqlPodcastEpisodeDetailFragmentFragment,
    show?: PodloveWebPlayerShow,
  ) {
    if (!episode.content || !episode.content.length) {
      throw new Error('An Audio file is required!');
    }

    if (!show) {
      show = await this.getShow();
    }

    const poster:
      | StrapiGqlPodcastEpisodeDetailFragmentFragment['image']
      | null = episode.image;
    const posterUrl = poster?.url
      ? NavService.buildStrapiSrc(poster?.url)
      : show.poster;
    const summary = episode.description
      ? await this.markdown.html(episode.description)
      : '';
    const title = episode.title || '';
    const subtitle = episode.subtitle || '';
    const publicationDate = episode.pubDate || episode.published_at;
    const link = NavService.buildNestSrc(`podcast/${episode.slug}`);

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

    const duration = await this.podcast.getAudioDuration(
      episode.content?.[0]?.url,
    );

    const episodeConfig: PodloveWebPlayerEpisode = {
      // Configuration Version
      version: 5,

      /**
       * Show Related Information
       */
      show,

      /**
       * Episode related Information
       */
      title,
      subtitle,
      summary: summary,
      // ISO 8601 DateTime format, this is capable of adding a time offset, see https://en.wikipedia.org/wiki/ISO_8601
      publicationDate,
      poster: posterUrl,
      // ISO 8601 Duration format ([hh]:[mm]:[ss].[sss]), capable of adding milliseconds, see https://en.wikipedia.org/wiki/ISO_8601
      duration,
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
      chapters: this.getChapters(episode),

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
        // {
        //   id: '1',
        //   name: 'Alexander Heimbuch',
        //   avatar: '/assets/alexander-heimbuch.jpeg',
        //   role: {
        //     id: '1',
        //     slug: 'team',
        //     title: 'Team',
        //   },
        //   group: {
        //     id: '2',
        //     slug: 'on-air',
        //     title: 'On Air',
        //   },
        // },
        // {
        //   id: '2',
        //   name: 'Michaela Lehr',
        //   avatar: '/assets/michaela-lehr.jpeg',
        //   role: {
        //     id: '1',
        //     slug: 'team',
        //     title: 'Team',
        //   },
        //   group: {
        //     id: '2',
        //     slug: 'on-air',
        //     title: 'On Air',
        //   },
        // },
        // {
        //   id: '3',
        //   name: 'Eric Teubert',
        //   avatar: '/assets/eric-teubert.jpeg',
        //   role: {
        //     id: '1',
        //     slug: 'team',
        //     title: 'Team',
        //   },
        //   group: {
        //     id: '2',
        //     slug: 'on-air',
        //     title: 'On Air',
        //   },
        // },
        // {
        //   id: '4',
        //   name: 'Simon',
        //   avatar: '/assets/simon.jpeg',
        //   role: {
        //     id: '2',
        //     slug: 'guest',
        //     title: 'Gast',
        //   },
        //   group: {
        //     id: '2',
        //     slug: 'on-air',
        //     title: 'On Air',
        //   },
        // },
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

  public async getEpisode(slug: string): Promise<PodloveWebPlayerEpisode> {
    const podcastEpisode = await this.podcast.get(slug);
    const show = await this.getShow();
    return await this.transformEpisodeToPodloveEpisode(podcastEpisode, show);
  }

  public async getLatestEpisode(): Promise<PodloveWebPlayerEpisode> {
    const podcastEpisode = await this.podcast.latest();
    const show = await this.getShow();
    return await this.transformEpisodeToPodloveEpisode(podcastEpisode, show);
  }
}
