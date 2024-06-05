import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Societe {
   @Prop()
   sname: string;

   @Prop()
   semail: string;

   @Prop()
   sadresse: string;

   @Prop()
   sphone: string;

   @Prop()
   secteur: string;

   
}
export const SocieteSchema = SchemaFactory.createForClass(Societe);