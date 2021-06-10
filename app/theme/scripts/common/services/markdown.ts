import marked from "marked";

export class MarkdownService {
  protected marked = marked;

  protected static instance: MarkdownService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (MarkdownService.instance) {
      return MarkdownService.instance;
    }
    MarkdownService.instance = new MarkdownService();
    return MarkdownService.instance;
  }

  public render(md: string) {
    const html = this.marked(md);
    return html;
  }
}
