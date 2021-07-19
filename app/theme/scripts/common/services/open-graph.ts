import {
  OpenGraphService as SSROpenGraphService,
  OpenGraph,
  OpenGraphImage,
} from "@ribajs/ssr";
import { cutFormatter, stripHtmlFormatter } from "@ribajs/core";
import { GeneralService, BlogService } from ".";
import {
  nestFormatter,
  strapiImageUrlFormatter,
  strapiFormatter,
  postFormatter,
  markdownFormatter,
} from "../formatters";
import { OpenGraphData, StrapiGqlImageFragmentFragment, Post } from "../types";

export class OpenGraphService {
  protected static instance: OpenGraphService;
  protected general = GeneralService.getInstance();
  protected blog = BlogService.getInstance();

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

  public async setArticle(_data: Partial<OpenGraphData>, post: Post) {
    const sectionsObj = await this.blog.getSectionsObject(post);
    const url = _data.url || nestFormatter.read(postFormatter.read(post.slug));
    let description = _data.description;

    if (
      !description &&
      sectionsObj.text &&
      stripHtmlFormatter.read &&
      cutFormatter.read
    ) {
      const html = markdownFormatter.read(sectionsObj.text?.text);
      const text = stripHtmlFormatter.read(html);
      description = cutFormatter.read(text, 300, "...");
    }

    const data = {
      ..._data,
      type: _data.type || "article",
      title: _data.title || post.title || undefined,
      image: _data.image || sectionsObj.image?.image || undefined,
      description,
      url,
    } as OpenGraph;

    return this.set(data);
  }
}
