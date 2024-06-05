import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Bank {
   @Prop()
   Bname: string;
   
   @Prop()
   Bcode:string;

   
}
export const BankSchema = SchemaFactory.createForClass(Bank);