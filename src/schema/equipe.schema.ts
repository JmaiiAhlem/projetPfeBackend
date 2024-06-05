import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Equipe {
   @Prop()
   Ename: string;

   
}
export const EquipeSchema = SchemaFactory.createForClass(Equipe);