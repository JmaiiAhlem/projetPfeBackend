import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TypeContratDto } from '../dto/typeContrat.dto';
import { TypeContrat } from '../schema/typeContrat.schema';
import { UpdateContratDto } from 'src/dto/update-contrat.dto';
import { IContrat } from 'src/interface/contrat.interface';

@Injectable()
export class TypeContratService {
  constructor(
    @InjectModel(TypeContrat.name) private readonly typeContratModel: Model<TypeContrat>,
  ) {}

  async createContrat(typeContratDto: TypeContratDto): Promise<TypeContrat> {
    const newContrat = new this.typeContratModel(typeContratDto);
    return await newContrat.save();
  }

  async getAllContrats(): Promise<TypeContrat[]> {
    const contratData = await this.typeContratModel.find();
    if (!contratData || contratData.length === 0) {
      throw new NotFoundException('Contrats not found!');
    }
    return contratData;
  }

  async getContrat(contratId: string): Promise<TypeContrat> {
    const existingContrat = await this.typeContratModel.findById(contratId).exec();
    if (!existingContrat) {
      throw new NotFoundException(`Contrat #${contratId} not found`);
    }
    return existingContrat;
  }

  async deleteContrat(contratId: string): Promise<TypeContrat> {
    const deletedContrat = await this.typeContratModel.findByIdAndDelete(contratId);
    if (!deletedContrat) {
      throw new NotFoundException(`Contrat #${contratId} not found`);
    }
    return deletedContrat;
  }

  async updateContrat(contratId: string, updateContratDto: UpdateContratDto): Promise<IContrat> {
    const existingContrat = await this.typeContratModel.findByIdAndUpdate(contratId, updateContratDto, { new: true });
   if (!existingContrat) {
     throw new NotFoundException(`Contrat #${contratId} not found`);
   }
   return existingContrat;
}
}