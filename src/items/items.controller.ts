import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }
  @Get(':id')
  getById(@Param() param): any {
    return `this is the ${param.id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `in the create item name:${createItemDto.name} and description is ${createItemDto.description}`;
  }
  @Put()
  update(): string {
    return ' update item';
  }
  @Delete()
  delete(): string {
    return ' delete item';
  }
}
