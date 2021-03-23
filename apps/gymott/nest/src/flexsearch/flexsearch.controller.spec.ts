import { Test, TestingModule } from '@nestjs/testing';
import { FlexsearchController } from './flexsearch.controller';

describe('FlexsearchController', () => {
  let controller: FlexsearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlexsearchController],
    }).compile();

    controller = module.get<FlexsearchController>(FlexsearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
