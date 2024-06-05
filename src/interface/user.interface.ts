import { Document } from 'mongoose';
export interface IUser extends Document{

    readonly name: string;
    readonly password: string;
    readonly email: string;
    readonly role: string;
    readonly verif : boolean;
    readonly bankName: string;
    readonly rib: string;
    


}