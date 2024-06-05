import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Category {
   @Prop()
   cname: string;
   @Prop()
   description : string;

   @Prop()
   superviseur: string;
   
}
export const CategorySchema = SchemaFactory.createForClass(Category);