import { Test, TestingModule } from '@nestjs/testing';
import { MensaMaxService } from './mensa-max.service';

describe('MensaMaxService', () => {
  let service: MensaMaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensaMaxService],
    }).compile();

    service = module.get<MensaMaxService>(MensaMaxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
