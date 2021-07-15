import {
  OpenGraphService as SSROpenGraphService,
  OpenGraph,
  OpenGraphImage,
} from "@ribajs/ssr";
import { GeneralService } from "./general";
import {
  nestFormatter,
  strapiImageUrlFormatter,
  strapiFormatter,
} from "../formatters";
import { OpenGraphData, StrapiGqlImageFragmentFragment } from "../types";

export class OpenGraphService {
  protected static instance: OpenGraphService;
  protected general = GeneralService.getInstance();

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
      }

      if (
        (image as StrapiGqlImageFragmentFragment).__typename === "UploadFile"
      ) {
        imageResult = strapiImageUrlFormatter.read(
          image as StrapiGqlImageFragmentFragment,
          "original"
        );
      }

      if (typeof image === "object" && image.url) {
        imageResult = { ...image };
        imageResult.url = strapiFormatter.read(imageResult.url);
      }

      if (imageResult) {
        results.push(imageResult as OpenGraphImage & string);
      }
    }

    return results;
  }

  public async setDefault(_data: Partial<OpenGraphData>) {
    const generalSettings = await this.general.settings();

    const data = { ..._data } as OpenGraph;

    data.title = data.title || generalSettings?.title || "";
    data.type = data.type || "website";
    data.description = data.description || generalSettings?.description || "";
    data.url = data.url || nestFormatter.read();

    // TODO fixme
    // const image = this.getImageSrc(
    //   data.image || (generalSettings?.image as StrapiGqlImageFragmentFragment)
    // );

    // if (image) {
    //   data.image = image;
    // }

    console.debug("data", data);

    return SSROpenGraphService.set(data);
  }
}
