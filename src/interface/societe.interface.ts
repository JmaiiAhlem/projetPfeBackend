import { Document } from 'mongoose';
export interface ISociete extends Document{
    readonly same: string;
    readonly semail : string;
    readonly sadresse : string;
    readonly sphone : string;
    readonly secteur: string;
   
}