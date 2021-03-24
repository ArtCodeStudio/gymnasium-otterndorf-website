import { GraphQLClient } from "./graphql";
import { ResponseError } from "../types/response-error";
import toolbarQuery from "../../../graphql/queries/toolbar.gql";

export class ToolbarService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: ToolbarService;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected constructor() {}

  public static getInstance() {
    if (ToolbarService.instance) {
      return ToolbarService.instance;
    }
    ToolbarService.instance = new ToolbarService();
    return ToolbarService.instance;
  }

  public async get() {
    const toolbarRes = await this.graphql.request(toolbarQuery, {});
    if (!toolbarRes?.toolbar?.items) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const toolbar = toolbarRes?.toolbar;
    return toolbar;
  }
}
