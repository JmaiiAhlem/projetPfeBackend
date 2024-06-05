import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Type {
   @Prop()
   type: string;

   @Prop()
   description: string;

   @Prop()
   maximuimPermis: string;
}
export const TypeSchema = SchemaFactory.createForClass(Type);