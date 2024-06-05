


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SocieteDto } from 'src/dto/societe.dto';
import { UpdateSocieteDto } from 'src/dto/update-societe.dto';
import { ISociete } from 'src/interface/societe.interface';

@Injectable()
export class SocieteService{
constructor(@InjectModel('Societe') private SocieteModel:Model<ISociete>) { }
async createSociete(societeDto: SocieteDto): Promise<ISociete> {
   const newSociete = await new this.SocieteModel(societeDto);
   return newSociete.save();
}
// async updateCategory(CategoryId: string, updateCategoryDto: UpdateCategoryDto): Promise<ICategory> {
//     const existingCategory = await        this.CategoryModel.findByIdAndUpdate(CategoryId, updateCategoryDto, { new: true });
//    if (!existingCategory) {
//      throw new NotFoundException(`Category #${CategoryId} not found`);
//    }
//    return existingCategory;
// }

async updateSociete(SocieteId: string, updateSocieteDto: UpdateSocieteDto): Promise<ISociete> {
    const existingSociete = await this.SocieteModel.findByIdAndUpdate(SocieteId, updateSocieteDto, { new: true });
   if (!existingSociete) {
     throw new NotFoundException(`Societe #${SocieteId} not found`);
   }
   return existingSociete;
}
async getAllSocietes(): Promise<ISociete[]> {
    const SocieteData = await this.SocieteModel.find();
    if (!SocieteData || SocieteData.length == 0) {
        throw new NotFoundException('Societes data not found!');
    }
    return SocieteData;
}
async getSociete(SocieteId: string): Promise<ISociete> {
   const existingSociete= await     this.SocieteModel.findById(SocieteId).exec();
   if (!existingSociete) {
    throw new NotFoundException(`Societe#${SocieteId} not found`);
   }
   return existingSociete;
}
async deleteSociete(SocieteId: string): Promise<ISociete> {
    const deletedSociete= await this.SocieteModel.findByIdAndDelete(SocieteId);
   if (!deletedSociete) {
     throw new NotFoundException(`Societe #${SocieteId} not found`);
   }
   return deletedSociete;
}
}



