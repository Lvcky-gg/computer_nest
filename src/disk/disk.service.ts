import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): string {
    console.log('Reading data from disk');
    this.powerService.supplyPower(5);
    return 'data';
  }
}
