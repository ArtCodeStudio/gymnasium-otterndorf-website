import { ThemeColor } from "../types";

/**
 * Get bootstrap foreground color for theme background color
 */
export const themeForegroundColorFormatter = {
  name: "theme-fg-color",
  read(color: ThemeColor | "") {
    switch (color) {
      case "blue":
      case "dark":
      case "green":
      case "red":
      case "greenlight":
        return "white";
      case "cyan":
      case "light":
      case "white":
      case "yellow":
        return "dark";
      default:
        return "";
    }
  },
};
