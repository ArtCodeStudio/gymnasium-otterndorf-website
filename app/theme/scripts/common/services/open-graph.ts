import {
  OpenGraphService as SSROpenGraphService,
  OpenGraph,
  OpenGraphImage,
} from "@ribajs/ssr";
import { cutFormatter, stripHtmlFormatter } from "@ribajs/core";
import {
  GeneralService,
  BlogService,
  PageService,
  PodcastService,
  SchoolSubjectService,
  WorkingGroupService,
  GalleryService,
  MediaCenterService,
} from ".";
import {
  nestFormatter,
  strapiImageUrlFormatter,
  strapiFormatter,
  postFormatter,
  pageFormatter,
  markdownFormatter,
  podcastFormatter,
  schoolSubjectFormatter,
  workingGroupFormatter,
  galleryFormatter,
  mediaCenterFormatter,
  blogFormatter,
} from "../formatters";
import {
  OpenGraphData,
  StrapiGqlImageFragmentFragment,
  SectionContentText,
  Post,
  Page,
  StrapiGqlPodcastEpisodeBasicFragmentFragment,
  SchoolSubject,
  WorkingGroup,
  StrapiGqlGalleryFragmentFragment,
  StrapiGqlMediaCenterFragmentFragment,
  StrapiGqlPageInfoQuery,
  StrapiGqlBlogInfoQuery,
  Blog,
} from "../types";
import {
  OPEN_GRAPH_DESCRIPTION_MAX_LENGTH,
  OPEN_GRAPH_DESCRIPTION_CUT_MARKER,
} from "../constants";

export class OpenGraphService {
  protected static instance: OpenGraphService;
  protected general = GeneralService.getInstance();
  protected blog = BlogService.getInstance();
  protected page = PageService.getInstance();
  protected podcast = PodcastService.getInstance();
  protected schoolSubject = SchoolSubjectService.getInstance();
  protected workingGroup = WorkingGroupService.getInstance();
  protected gallery = GalleryService.getInstance();
  protected mediaCenter = MediaCenterService.getInstance();

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (OpenGraphService.instance) {
      return OpenGraphService.instance;
    }
    OpenGraphService.instance = new OpenGraphService();
    return OpenGraphService.instance;
  }

  protected getImageSrc(_image: OpenGraphData["image"]) {
    if (!_image) {
      return;
    }

    const results: string[] | OpenGraphImage[] = [];
    const images = Array.isArray(_image) ? _image : [_image];

    for (const image of images) {
      let imageResult: string | OpenGraphImage = "";

      if (typeof image === "string") {
        imageResult = strapiFormatter.read(image);
      } else if (
        (image as StrapiGqlImageFragmentFragment).url &&
        (image as StrapiGqlImageFragmentFragment).formats
      ) {
        imageResult = strapiImageUrlFormatter.read(
          image as StrapiGqlImageFragmentFragment,
          "original"
        );
      } else if (typeof image === "object" && image.url) {
        imageResult = { ...image };
        imageResult.url = strapiFormatter.read(imageResult.url);
      }

      if (imageResult) {
        results.push(imageResult as OpenGraphImage & string);
      }
    }

    return results;
  }

  protected getTruncatedDescription(sectionText?: SectionContentText | string) {
    let description = "";
    let html = "";
    if (typeof sectionText === "object") {
      html = markdownFormatter.read(sectionText?.text);
    }

    if (typeof sectionText === "string") {
      html = markdownFormatter.read(sectionText);
    }

    if (html && stripHtmlFormatter.read && cutFormatter.read) {
      const text = stripHtmlFormatter.read(html);
      description = cutFormatter.read(
        text,
        OPEN_GRAPH_DESCRIPTION_MAX_LENGTH,
        OPEN_GRAPH_DESCRIPTION_CUT_MARKER
      );
    }
    return description;
  }

  public async set(_data: Partial<OpenGraphData>) {
    const generalSettings = await this.general.settings();

    const data = { ..._data } as OpenGraph;

    data.title = data.title || generalSettings?.title || "";
    data.description = data.description || generalSettings?.description || "";
    data.url = data.url || nestFormatter.read();

    const image = this.getImageSrc(
      data.image || (generalSettings?.image as StrapiGqlImageFragmentFragment)
    );

    if (image) {
      data.image = image;
    }

    return SSROpenGraphService.set(data);
  }

  public async setWebsite(_data: Partial<OpenGraphData>) {
    const data = { ..._data } as OpenGraph;
    data.type = data.type || "website";
    return this.set(data);
  }

  public async setPodcastEpisode(
    _data: Partial<OpenGraphData>,
    episode: StrapiGqlPodcastEpisodeBasicFragmentFragment
  ) {
    const url =
      _data.url || nestFormatter.read(podcastFormatter.read(episode.slug));
    const data = {
      ..._data,
      type: _data.type || "article",
      title: _data.title || episode.title || undefined,
      image: _data.image || episode.image || undefined,
      description:
        _data.description ||
        this.getTruncatedDescription(episode.description) ||
        undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }

  public async setPage(_data: Partial<OpenGraphData>, page: Page) {
    const sectionsObj = await this.page.getSectionsObject(page);
    const url = _data.url || nestFormatter.read(pageFormatter.read(page.slug));

    const data = {
      ..._data,
      type: _data.type || "website",
      title: _data.title || page.title || undefined,
      image: _data.image || sectionsObj.image?.image || undefined,
      description:
        _data.description ||
        this.getTruncatedDescription(sectionsObj.text) ||
        undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }

  public async setPageOverview(
    _data: Partial<OpenGraphData>,
    info: StrapiGqlPageInfoQuery["pageInfo"]
  ) {
    const url = _data.url || nestFormatter.read(pageFormatter.read());

    const data = {
      ..._data,
      type: _data.type || "website",
      title: _data.title || info?.title || undefined,
      description:
        _data.description ||
        this.getTruncatedDescription(info?.description || undefined) ||
        undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }

  public async setArticle(_data: Partial<OpenGraphData>, post: Post) {
    const sectionsObj = await this.blog.getSectionsObject(post);
    const url = _data.url || nestFormatter.read(postFormatter.read(post.slug));
    const data = {
      ..._data,
      type: _data.type || "article",
      title: _data.title || post.title || undefined,
      image: _data.image || sectionsObj.image?.image || undefined,
      description:
        _data.description ||
        this.getTruncatedDescription(sectionsObj.text) ||
        undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }

  public async setBlogOverview(
    _data: Partial<OpenGraphData>,
    info: StrapiGqlBlogInfoQuery["blogInfo"],
    category?: Blog
  ) {
    const url =
      _data.url || nestFormatter.read(blogFormatter.read(category?.slug));

    const data = {
      ..._data,
      type: _data.type || "website",
      title: _data.title || category?.name || info?.title || undefined,
      description:
        _data.description ||
        this.getTruncatedDescription(info?.description || undefined) ||
        undefined,
      url,
    } as OpenGraph;
    return this.set(data);
  }

  public async setSchoolSubject(
    _data: Partial<OpenGraphData>,
    schoolSubject: SchoolSubject
  ) {
    const sectionsObj = await this.schoolSubject.getSectionsObject(
      schoolSubject
    );
    const url =
      _data.url ||
      nestFormatter.read(schoolSubjectFormatter.read(schoolSubject.slug));
    const data = {
      ..._data,
      type: _data.type || "website",
      title: _data.title || schoolSubject.title || undefined,
      image: _data.image || sectionsObj.image?.image || undefined,
      description:
        _data.description ||
        this.getTruncatedDescription(sectionsObj.text) ||
        undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }

  public async setWorkingGroup(
    _data: Partial<OpenGraphData>,
    workingGroup: WorkingGroup
  ) {
    const sectionsObj = await this.workingGroup.getSectionsObject(workingGroup);
    const url =
      _data.url ||
      nestFormatter.read(workingGroupFormatter.read(workingGroup.slug));
    const data = {
      ..._data,
      type: _data.type || "website",
      title: _data.title || workingGroup.title || undefined,
      image: _data.image || sectionsObj.image?.image || undefined,
      description:
        _data.description ||
        this.getTruncatedDescription(sectionsObj.text) ||
        undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }

  public async setGallery(
    _data: Partial<OpenGraphData>,
    gallery: StrapiGqlGalleryFragmentFragment
  ) {
    const url =
      _data.url || nestFormatter.read(galleryFormatter.read(gallery.slug));

    const imageUrls = gallery.images
      ?.map((image) => image?.image?.url)
      .filter((url) => !!url);

    const data = {
      ..._data,
      type: _data.type || "website",
      title: _data.title || gallery.title || undefined,
      image: _data.image || imageUrls || undefined,
      description: _data.description || undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }

  public async setMediaCenter(
    _data: Partial<OpenGraphData>,
    mediaCenter: StrapiGqlMediaCenterFragmentFragment
  ) {
    const url =
      _data.url ||
      nestFormatter.read(mediaCenterFormatter.read(mediaCenter.slug));

    const videoUrls = mediaCenter.movies
      ?.map((movie) => movie?.movie?.url)
      .filter((url) => !!url);

    const posterUrls = mediaCenter.movies
      ?.map((movie) => movie?.poster?.url)
      .filter((url) => !!url);

    const data = {
      ..._data,
      type: _data.type || "website",
      title: _data.title || mediaCenter.title || undefined,
      image: _data.image || posterUrls || undefined,
      video: videoUrls,
      description: _data.description || undefined,
      url,
    } as OpenGraph;

    return this.set(data);
  }
}
