import { Test, TestingModule } from '@nestjs/testing';
import { FlexSearchService } from './flexsearch.service';

describe('FlexsearchService', () => {
  let service: FlexSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlexSearchService],
    }).compile();

    service = module.get<FlexSearchService>(FlexSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
