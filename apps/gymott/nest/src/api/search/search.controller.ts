import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { SearchService } from './search.service';
import type { Namespace } from './types';
import type { SearchResultExt } from '@ribajs/nest-lunr';

@Controller('api/search')
export class SearchController {
  constructor(readonly search: SearchService) {}

  /**
   * Search in a specific namespace
   *
   * @param {Response} res
   * @param {Namespace} namespace
   * @param {string} query
   * @returns
   * @memberof SearchController
   */
  @Get('/:namespace/:query')
  async searchNs(
    @Res() res: Response,
    @Param('namespace') namespace: Namespace,
    @Param('query') query: string,
  ) {
    let result: SearchResultExt[];
    try {
      result = await this.search.search(namespace, query);
    } catch (error) {
      throw error;
    }

    if (!result) {
      throw new NotFoundException(
        `[Lunr] No index namespace "${namespace}" found!`,
      );
    }
    return res.json(result);
  }

  /**
   * Search in all namespaces
   *
   * @param {Response} res
   * @param {string} query
   * @returns
   * @memberof SearchController
   */
  @Get('/:query')
  async searchAll(@Res() res: Response, @Param('query') query: string) {
    let result: SearchResultExt[];
    try {
      result = await this.search.searchAll(query);
    } catch (error) {
      throw error;
    }
    return res.json(result);
  }
}
