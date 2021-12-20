import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // eslint-disable-next-line prettier/prettier
  UsePipes
} from '@nestjs/common';
import { UserDTO } from './user.dto';
import { ValIdPipe } from './user.validateid.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UserDTO[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @UsePipes(ValIdPipe)
  async getUserById(@Param('id') id: string): Promise<UserDTO> {
    return this.usersService.getUserById(id);
  }

  @Post()
  async newUser(@Body() user: UserDTO): Promise<UserDTO> {
    return this.usersService.newUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ValIdPipe) id: string,
    @Body() user: UserDTO,
  ): Promise<UserDTO> {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
