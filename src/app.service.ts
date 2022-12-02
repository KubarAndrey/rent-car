import { Inject, Injectable } from '@nestjs/common';

import { CreateTableDto } from './create-table.dto';
import { PG_CONNECTION } from './constants/constants';

@Injectable()
export class AppService {
  constructor(@Inject(PG_CONNECTION) private readonly appRepository: any) {}

  async createTable(createTableDto: CreateTableDto) {
    const table = await this.appRepository.query(
      `CREATE TABLE ${createTableDto.name} (id SERIAL PRIMARY KEY)`,
    );
    return table;
  }
}
