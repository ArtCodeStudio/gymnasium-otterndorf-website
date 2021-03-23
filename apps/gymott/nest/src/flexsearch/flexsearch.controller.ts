import { Controller, Get, Param, Query, Body } from '@nestjs/common';
import { SearchOptions, Cursor } from './types';
import { FlexSearchService } from './flexsearch.service';

@Controller('flexsearch')
export class FlexsearchController {
  constructor(readonly flexsearch: FlexSearchService) {}

  @Get('search/:namespace/:query')
  search(
    @Param('namespace') namespace: string,
    @Param('query') query: string,
    @Query('limit') limit: SearchOptions['limit'] = 10,
    @Query('suggest') suggest: SearchOptions['suggest'] = false,
    @Query('where') where: SearchOptions['where'] = {},
    @Query('field') field: SearchOptions['field'] = undefined,
    @Query('bool') bool: SearchOptions['bool'] = 'and',
    @Query('page') page: boolean | Cursor = false,
  ) {
    return this.flexsearch.get(namespace)?.search(query, {
      limit,
      suggest,
      where,
      bool,
      page,
    });
  }
}
