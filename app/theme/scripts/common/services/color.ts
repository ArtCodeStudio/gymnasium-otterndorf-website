import { Color } from "../types";

export class ColorService {
  public static getAccentTextColor(color: Color = "transparent") {
    switch (color) {
      case "cyan":
      case "greenlight":
      case "yellow":
      case "light":
      case "white":
      case "transparent":
        return "dark";
      case "dark":
      case "blue":
      case "green":
      case "red":
      default:
        return "white";
    }
  }
}
