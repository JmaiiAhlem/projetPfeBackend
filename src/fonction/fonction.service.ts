

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { FonctionDto } from 'src/dto/fonction.dto';
import { IFonction } from 'src/interface/fonction.interface';
@Injectable()
export class FonctionService {
constructor(@InjectModel('Fonction') private FonctionModel:Model<IFonction>) { }

async createFonction(createFonctionDto: FonctionDto): Promise<IFonction> {
   const newFonction = await new this.FonctionModel(createFonctionDto);
   return newFonction.save();
}

// async updateFonction(FonctionId: string, updateFonctionDto: UpdateFonctionDto): Promise<IFonction> {
//     const existingFonction = await        this.FonctionModel.findByIdAndUpdate(FonctionId, updateFonctionDto, { new: true });
//    if (!existingFonction) {
//      throw new NotFoundException(`Fonction #${FonctionId} not found`);
//    }
//    return existingFonction;
// }
async getAllFonctions(): Promise<IFonction[]> {
    const FonctionData = await this.FonctionModel.find();
    if (!FonctionData || FonctionData.length == 0) {
        throw new NotFoundException('Fonctions data not found!');
    }
    return FonctionData;
}
async getFonction(FonctionId: string): Promise<IFonction> {
   const existingFonction = await     this.FonctionModel.findById(FonctionId).exec();
   if (!existingFonction) {
    throw new NotFoundException(`Fonction #${FonctionId} not found`);
   }
   return existingFonction;
}
async deleteFonction(FonctionId: string): Promise<IFonction> {
    const deletedFonction = await this.FonctionModel.findByIdAndDelete(FonctionId);
   if (!deletedFonction) {
     throw new NotFoundException(`Fonction #${FonctionId} not found`);
   }
   return deletedFonction;
}
}