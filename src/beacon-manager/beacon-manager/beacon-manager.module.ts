import { Module } from '@nestjs/common';
import { BeaconManagerController } from './beacon-manager.controller';
import { BeaconManagerService } from './service/beacon-manager/beacon-manager.service';

@Module({
  controllers: [BeaconManagerController],
})
export class BeaconManagerModule {}
