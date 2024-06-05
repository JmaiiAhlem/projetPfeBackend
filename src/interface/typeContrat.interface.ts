import { Document } from 'mongoose';
export interface IContrat extends Document{
    
    readonly type: string;
    readonly description: string;
    readonly maximuimPermis: string;


}