import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserMapper {
  dtoToEntity(userDTO: UserDTO): UserEntity {
    return new UserEntity(userDTO.id, userDTO.name, userDTO.lastname);
  }

  entityToDto(userEntity: UserEntity): UserDTO {
    return new UserDTO(userEntity.userId, userEntity.name, userEntity.lastname);
  }
}
