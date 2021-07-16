import {
  SectionBlogSlideshow,
  StrapiGqlGalleryFragmentFragment,
  Color,
} from "../types";
import { ColorService } from "./color";

export class SlideshowService {
  public static getStyle(
    slideshow: SectionBlogSlideshow | StrapiGqlGalleryFragmentFragment
  ) {
    let color: Color = slideshow?.color?.color || "transparent";
    let classes = "";
    let preferImage: boolean | undefined;
    if (slideshow?.style) {
      classes = `slideshow-style-${slideshow.style}`;
      switch (slideshow.style) {
        case "art":
          color = "dark";
        case "dreamy":
          color = "blue";
          preferImage = true;
          break;
      }
    }
    const textColor = ColorService.getAccentTextColor(color);

    classes += ` bg-${color}`;
    classes += ` text-${textColor}`;

    return {
      color,
      classes,
      preferImage,
      textColor,
    };
  }
}
