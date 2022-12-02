import { Body, Controller, Get } from '@nestjs/common';

import { CreateTableDto } from './create-table.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('create-table')
  createTable(@Body() createTableDto: CreateTableDto) {
    return this.appService.createTable(createTableDto);
  }
}
