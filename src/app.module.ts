import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeaconManagerModule } from './beacon-manager/beacon-manager/beacon-manager.module';

@Module({
  imports: [BeaconManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
