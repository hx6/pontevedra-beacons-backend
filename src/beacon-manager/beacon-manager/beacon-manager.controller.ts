import { Body, Controller, Post } from '@nestjs/common';
import { BeaconDto } from '../dto/beacon.dto/beacon.dto';

@Controller('beacon-manager')
export class BeaconManagerController {
  @Post()
  createBeacon(@Body() beacon: BeaconDto) {
    let url = 'https://www.depo.gal';
    let res = { ...beacon };
    switch (beacon.uniqueId) {
      case 'Kv9WWE':
        url = 'https://www.depo.gal/es/deportes';
        return {...res, url};
      case 'KvfNRk':
        url = 'https://www.depo.gal/es/actualidade';
        return {...res, url};
      default:
        return {...res, url};
    }
  }
}
