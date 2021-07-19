import { GraphQLClient } from "./graphql";
import { ResponseErrorService } from "./response-error";
import toolbarQuery from "../../../graphql/queries/toolbar.gql";

export class ToolbarService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: ToolbarService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (ToolbarService.instance) {
      return ToolbarService.instance;
    }
    ToolbarService.instance = new ToolbarService();
    return ToolbarService.instance;
  }

  public async get() {
    const toolbarRes = await this.graphql.requestCached(toolbarQuery, {});
    if (!toolbarRes?.toolbar?.items) {
      throw ResponseErrorService.notFound("Toolbar");
    }
    const toolbar = toolbarRes?.toolbar;
    return toolbar;
  }
}
