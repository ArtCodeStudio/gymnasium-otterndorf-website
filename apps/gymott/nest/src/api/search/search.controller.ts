import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import {} from './types';
import { LunrService } from '@ribajs/nest-lunr';

@Controller('api/search')
export class SearchController {
  constructor(readonly lunr: LunrService) {}

  @Get('/:namespace/:query')
  search(
    @Res() res: Response,
    @Param('namespace') namespace: string,
    @Param('query') query: string,
  ) {
    const index = this.lunr.getIndex(namespace);
    if (!index) {
      throw new NotFoundException(
        `[Lunr] No index namespace "${namespace}" found!`,
      );
    }

    const result = index.search(query);
    return res.json(result);
  }
}
