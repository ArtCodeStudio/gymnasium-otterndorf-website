
import { SSRGraphQLClient } from "./graphql";
import { ResponseError } from '../../types/response-error';
import toolbarQuery from "../../../graphql/queries/toolbar.gql"; 

export class ToolbarService {

    protected graphql = SSRGraphQLClient.getInstance();

    protected static instance: ToolbarService;

    protected constructor() {}

    public static getInstance() {
        if(ToolbarService.instance) {
          return ToolbarService.instance;
        }
        ToolbarService.instance = new ToolbarService();
        return ToolbarService.instance;
      }

    async get() {
        const toolbarRes = await this.graphql.request(toolbarQuery, {});
        console.debug("toolbarRes", toolbarRes);
        if (!toolbarRes?.toolbar?.items) {
            const error: ResponseError = new Error("Not found!");
            error.status = 404;
            throw error;
        }
        const toolbar = toolbarRes?.toolbar;
        return toolbar;
    }
}