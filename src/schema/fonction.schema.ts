import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Fonction {
   @Prop()
   Fname: string;

   
}
export const FonctionSchema = SchemaFactory.createForClass(Fonction);