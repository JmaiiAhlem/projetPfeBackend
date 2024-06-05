import { Document } from 'mongoose';
export interface IBank extends Document{
    readonly Bname: string;
    readonly Bcode: string;
  

}