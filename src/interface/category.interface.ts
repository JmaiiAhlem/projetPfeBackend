import { Document } from 'mongoose';
export interface ICategory extends Document{
    readonly came: string;
    readonly description : string;
    readonly supervieur : string;

   


}