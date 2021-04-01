import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { SearchService } from './search.service';
import type { Namespace } from './types';

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
  async searchInNs(
    @Res() res: Response,
    @Param('namespace') namespace: Namespace,
    @Param('query') query: string,
  ) {
    const result = await this.search.searchInNamespace(namespace, query);
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
  async searchInAll(@Res() res: Response, @Param('query') query: string) {
    const result = await this.search.searchInAll(query);

    return res.json(result);
  }
}
