import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { config } from 'dotenv';
import { PG_CONNECTION } from '../constants/constants';
import { Car } from 'src/cars/entities/car.entity';

config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const dbProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  }),
};
@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}
