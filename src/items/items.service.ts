import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfcaes/items.interface';


@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async createItem(item: Item): Promise<Item> {
    const savedItem = new this.itemModel(item);
    return await savedItem.save();
  }

  async findAllItems(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findById(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async updateItem(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async deleteItem(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id);
  }
}
