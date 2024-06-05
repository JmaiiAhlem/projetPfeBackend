import { Document } from 'mongoose';
export interface IContrat extends Document{
    
    readonly type: string;
    readonly descriptionContrat: string;
    readonly duree: string;


}