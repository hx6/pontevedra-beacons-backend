import { Test, TestingModule } from '@nestjs/testing';
import { BeaconManagerController } from './beacon-manager.controller';

describe('BeaconManagerController', () => {
  let controller: BeaconManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeaconManagerController],
    }).compile();

    controller = module.get<BeaconManagerController>(BeaconManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
