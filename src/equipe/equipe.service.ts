



import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { EquipeDto } from 'src/dto/equipe.dto';
import { IEquipe } from 'src/interface/equipe.interface';


@Injectable()
export class EquipeService {
constructor(@InjectModel('Equipe') private EquipeModel:Model<IEquipe>) { }

async createEquipe(createEquipeDto: EquipeDto): Promise<IEquipe> {
   const newEquipe = await new this.EquipeModel(createEquipeDto);
   return newEquipe.save();
}

// async updateEquipe(EquipeId: string, updateEquipeDto: UpdateEquipeDto): Promise<IEquipe> {
//     const existingEquipe = await        this.EquipeModel.findByIdAndUpdate(EquipeId, updateEquipeDto, { new: true });
//    if (!existingEquipe) {
//      throw new NotFoundException(`Equipe #${EquipeId} not found`);
//    }
//    return existingEquipe;
// }
async getAllEquipes(): Promise<IEquipe[]> {
    const EquipeData = await this.EquipeModel.find();
    if (!EquipeData || EquipeData.length == 0) {
        throw new NotFoundException('Equipes data not found!');
    }
    return EquipeData;
}
async getEquipe(EquipeId: string): Promise<IEquipe> {
   const existingEquipe = await     this.EquipeModel.findById(EquipeId).exec();
   if (!existingEquipe) {
    throw new NotFoundException(`Equipe #${EquipeId} not found`);
   }
   return existingEquipe;
}
async deleteEquipe(EquipeId: string): Promise<IEquipe> {
    const deletedEquipe = await this.EquipeModel.findByIdAndDelete(EquipeId);
   if (!deletedEquipe) {
     throw new NotFoundException(`Equipe #${EquipeId} not found`);
   }
   return deletedEquipe;
}
}