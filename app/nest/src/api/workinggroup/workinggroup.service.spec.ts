import { Test, TestingModule } from '@nestjs/testing';
import { WorkingGroupService } from './workinggroup.service';

describe('WorkingGroupService', () => {
  let service: WorkingGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingGroupService],
    }).compile();

    service = module.get<WorkingGroupService>(WorkingGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
