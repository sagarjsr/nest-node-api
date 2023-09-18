import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  quantity: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
