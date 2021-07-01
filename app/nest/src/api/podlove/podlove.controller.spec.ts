import { Test, TestingModule } from '@nestjs/testing';
import { PodloveController } from './podlove.controller';

describe('PodloveController', () => {
  let controller: PodloveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PodloveController],
    }).compile();

    controller = module.get<PodloveController>(PodloveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
