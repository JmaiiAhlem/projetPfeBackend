import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class TypeContrat {
   @Prop()
   type: string;

   @Prop()
   descriptionContrat: string;

   @Prop()
   duree: string;
}
export const TypeContratSchema = SchemaFactory.createForClass(TypeContrat);