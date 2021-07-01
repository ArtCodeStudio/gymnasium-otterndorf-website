import { Test, TestingModule } from '@nestjs/testing';
import { PodloveService } from './podlove.service';

describe('PodloveService', () => {
  let service: PodloveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PodloveService],
    }).compile();

    service = module.get<PodloveService>(PodloveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
