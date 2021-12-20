/* eslint-disable prettier/prettier */
import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    Logger,
    PipeTransform
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class ValIdPipe implements PipeTransform {
  constructor(
    @InjectRepository(UserEntity)
    public usersRepository: Repository<UserEntity>,
  ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    Logger.debug(metadata);
    try {
      await this.usersRepository.findOneOrFail(value);
    } catch (error) {
      throw new BadRequestException('Id no existe');
    }
    return value;
  }
}
