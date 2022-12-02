import { Module } from '@nestjs/common';

import { DatabaseModule } from './../database/database.module';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsModule],
})
export class CarsModule {}
