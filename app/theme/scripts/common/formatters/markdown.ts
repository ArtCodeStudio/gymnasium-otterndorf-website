import { MarkdownService } from "../services";
/**
 * Renders markdown to html
 */
export const markdownFormatter = {
  name: "markdown",
  read(md?: string) {
    if (!md) {
      return "";
    }
    return MarkdownService.getInstance().render(md);
  },
};
