import { NestService, PageHeader } from "../types";
import { ENTRY_TYPE } from "../constants";
import { podcastFormatter } from "../formatters";
import {
  PodloveWebPlayerEpisode,
  PodloveWebPlayerConfig,
  PodloveWebPlayerTab,
} from "@ribajs/podcast";
export class PodloveService extends NestService {
  protected static instance: PodloveService;

  protected constructor() {
    /** protected */
    super();
  }

  public static getInstance() {
    if (PodloveService.instance) {
      return PodloveService.instance;
    }
    PodloveService.instance = new PodloveService();
    return PodloveService.instance;
  }

  public static getConfigPath(activeTab?: PodloveWebPlayerTab) {
    return `/api/podlove/config?activeTab=${activeTab}`;
  }

  public static getConfigPathForEpisode(
    episodeSlug: string,
    activeTab?: PodloveWebPlayerTab
  ) {
    return `/api/podlove/config/${episodeSlug}?activeTab=${activeTab}`;
  }

  public static getLatestEpisodeConfigPath() {
    return `/api/podlove/episode`;
  }

  public static getEpisodeConfigPath(slug: string) {
    return `/api/podlove/episode/${slug}`;
  }

  public async getConfig(activeTab?: PodloveWebPlayerTab) {
    const url = this.host + PodloveService.getConfigPath(activeTab);
    const res = await this._getCached<PodloveWebPlayerConfig>(url);
    return res.body;
  }

  public async getConfigForEpisode(
    episodeSlug: string,
    activeTab?: PodloveWebPlayerTab
  ) {
    const url =
      this.host +
      PodloveService.getConfigPathForEpisode(episodeSlug, activeTab);
    const res = await this._getCached<PodloveWebPlayerConfig>(url);
    return res.body;
  }

  public async get(slug: string) {
    const url = this.host + PodloveService.getEpisodeConfigPath(slug);
    const res = await this._getCached<PodloveWebPlayerEpisode>(url);
    return res.body;
  }

  public async latest() {
    const url = this.host + PodloveService.getLatestEpisodeConfigPath();
    const res = await this._getCached<PodloveWebPlayerEpisode>(url);
    return res.body;
  }

  public getHeader(
    episode?: PodloveWebPlayerEpisode,
    slug?: string
  ): PageHeader {
    const header: PageHeader = {
      title: episode?.title || "Alle Podcasts",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          type: ENTRY_TYPE.Podcast,
          active: episode ? false : true,
          url: podcastFormatter.read(),
        },
      ],
      updatedAt: episode?.publicationDate,
    };

    if (episode && slug) {
      header.breadcrumbs.push({
        label: episode.title,
        type: ENTRY_TYPE.PodcastEpisode,
        active: true,
        url: podcastFormatter.read(slug),
      });
    }

    return header;
  }
}
