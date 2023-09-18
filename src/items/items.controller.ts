import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfcaes/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAllItems();
  }
  
  @Get(':id')
  async getById(@Param() param): Promise<Item> {
    return await this.itemsService.findById(param.id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.createItem(createItemDto);
  }

  @Patch(':id')
  async update(
    @Body() updateItemDto: CreateItemDto,
    @Param() param,
  ): Promise<Item> {
    return await this.itemsService.updateItem(param.id, updateItemDto);
  }
  @Delete(':id')
  async delete(@Param() param): Promise<Item> {
    return await this.itemsService.deleteItem(param.id);
  }
}
