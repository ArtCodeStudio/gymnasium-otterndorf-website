import { ResponseError } from "../types";

export class ResponseErrorService {
  public static notFound(name: string, slug?: string) {
    let error: ResponseError;
    if (slug) {
      error = new Error(`${name} with slug "${slug}" not found!`);
    } else {
      error = new Error(`${name} not found!`);
    }
    error.status = 404;
    return error;
  }
}
