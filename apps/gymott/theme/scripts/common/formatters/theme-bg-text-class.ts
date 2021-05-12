import { ThemeColor } from "../types";
import { themeForegroundColorFormatter } from "./theme-fg-color";

/**
 * Get bootstrap text class for theme background color
 */
export const themeBgTextClassFormatter = {
  name: "theme-bg-text-class",
  read(color: ThemeColor | "") {
    const fgColor = themeForegroundColorFormatter.read(color);
    if (fgColor) {
      return "text-" + fgColor;
    }
  },
};
