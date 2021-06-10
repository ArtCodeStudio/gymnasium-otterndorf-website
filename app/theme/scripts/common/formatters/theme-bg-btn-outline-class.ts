import { ThemeColor } from "../types";
import { themeForegroundColorFormatter } from "./theme-fg-color";

/**
 * Get bootstrap btn-outline class for theme background color
 */
export const themeBgButtonOutlineClassFormatter = {
  name: "theme-bg-btn-outline-class",
  read(color: ThemeColor | "") {
    const fgColor = themeForegroundColorFormatter.read(color);
    if (fgColor) {
      return "btn-outline-" + fgColor;
    }
  },
};
