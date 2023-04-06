import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from '.prisma/client';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('criar')
  async create(@Body() data: User): Promise<User> {
    return this.userService.create(data);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: User): Promise<User> {
    return this.userService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(Number(id));
  }
}
