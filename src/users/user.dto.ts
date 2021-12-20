import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  readonly id?: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly lastname: string;

  constructor(id: string, name: string, lastname: string) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
  }
}
