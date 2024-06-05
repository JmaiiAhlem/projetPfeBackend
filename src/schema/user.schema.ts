import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

import { UserRole } from '../role/user-role.enum';
import { UserGenre } from "src/role/user-genre.enum";

export type UserDocument = User & Document;

@Schema()
export class User {

   //@ApiPropriety()
   @Prop()
   name: string;
   // @Prop()
   // firstName?: string;
   @Prop()
   email: string;
   @Prop()
   password: string;
   @Prop()
   adresse?: string;
   @Prop()
   phone?: string;

   @Prop()
   role: UserRole;

   @Prop()
   datNais?: string;
   
   @Prop()
   etatCivil?: string;

    @Prop()
    fonction?: string; 
    
    @Prop()
    typecontrat?: string;

    @Prop()
    datDebut?:string;

   @Prop()
   category?: string;

   @Prop()
   bankName?: string;

   @Prop()
   rib?: string;

   @Prop()
   verif: boolean = false;
}
export const UserSchema = SchemaFactory.createForClass(User);