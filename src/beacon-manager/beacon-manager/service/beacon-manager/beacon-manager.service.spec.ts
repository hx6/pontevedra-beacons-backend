import { Test, TestingModule } from '@nestjs/testing';
import { BeaconManagerService } from './beacon-manager.service';

describe('BeaconManagerService', () => {
  let service: BeaconManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeaconManagerService],
    }).compile();

    service = module.get<BeaconManagerService>(BeaconManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
