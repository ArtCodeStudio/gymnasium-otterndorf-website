import { ThemeColor } from "../types";

/**
 * Get bootstrap background class for theme color
 */
export const themeBackgroundClassFormatter = {
  name: "theme-bg-class",
  read(color: ThemeColor | "") {
    if (!color) {
      return "";
    }
    return "bg-" + color;
  },
};
