import {
  IsString,
  ValidateNested,
  IsNumber,
  IsNotEmpty,
  IsInt,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class BeaconBatteryDto {
  @ApiProperty({ description: `telemetry.batteryVoltage` })
  @IsNumber()
  batteryVoltage: number;

  @ApiProperty({ description: `batteryLevel of device` })
  @IsNumber()
  level: number;
}

export class LocationDto {
  @ApiProperty({ description: `latitude of the user's location` })
  @IsString()
  latitude: string;

  @ApiProperty({ description: `longitude of the user's location` })
  @IsString()
  longitude: string;
}

export class BeaconDto {
  @ApiProperty({
    description: `instanceId of eddystone / uuid of iBeacon`,
  })
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: `uniqueId of device` })
  uniqueId: string;

  @ValidateNested()
  @Type(() => BeaconBatteryDto)
  @ApiProperty({ description: `battery level of device` })
  battery: BeaconBatteryDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocationDto)
  @ApiProperty({
    description: `location of the user that is connecting to the device`,
    required: false,
  })
  location?: LocationDto;

  @IsNumber()
  @ApiProperty({ description: `rssi of device` })
  rssi: number;

  @IsInt()
  @ApiProperty({ description: `telemetry.pduCount of device` })
  pduCount: number;

  @IsNumber()
  @ApiProperty({ description: `telemetry.timeSincePowerUp of device` })
  timeSincePowerUp: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: `date time of the moment of the connection`,
    required: false,
  })
  requestDateTime?: number;
}
