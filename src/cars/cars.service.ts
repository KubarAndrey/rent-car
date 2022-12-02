import { Inject, Injectable } from '@nestjs/common';

import { PG_CONNECTION } from '../constants/constants';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(@Inject(PG_CONNECTION) private readonly carsRepository) {}
  async createCar(createCarDto: CreateCarDto) {
    const car = await this.carsRepository.query(
      'INSERT INTO cars (id) VALUES(DEFAULT) RETURNING "id"',
    );
    return car.rows;
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
