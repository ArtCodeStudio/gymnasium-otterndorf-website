import { Module } from '@nestjs/common';
import { FlexSearchService } from './flexsearch.service';
import { FlexsearchController } from './flexsearch.controller';

@Module({
  providers: [FlexSearchService],
  controllers: [FlexsearchController],
  exports: [FlexSearchService],
})
export class FlexsearchModule {}
