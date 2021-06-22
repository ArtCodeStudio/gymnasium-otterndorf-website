import { Test, TestingModule } from '@nestjs/testing';
import { MensaMaxController } from './mensa-max.controller';

describe('MensaMaxController', () => {
  let controller: MensaMaxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensaMaxController],
    }).compile();

    controller = module.get<MensaMaxController>(MensaMaxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
