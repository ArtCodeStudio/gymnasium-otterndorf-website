import { StrapiGqlEnum_Componenttypescolor_Color } from "../types";

export class ColorService {
  public static getAccentTextColor(
    color: StrapiGqlEnum_Componenttypescolor_Color = StrapiGqlEnum_Componenttypescolor_Color.Blue
  ) {
    switch (color) {
      case "cyan":
      case "greenlight":
      case "yellow":
      case "light":
      case "white":
        return "black";
      case "dark":
      case "blue":
      case "green":
      case "red":
      default:
        return "white";
    }
  }
}
