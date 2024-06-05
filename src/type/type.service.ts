import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TypeContrat } from '../schema/typeContrat.schema';
import { UpdateContratDto } from 'src/dto/update-contrat.dto';
import { IContrat } from 'src/interface/contrat.interface';
import { Type } from 'src/schema/type.schema';
import { TypeDto } from 'src/dto/type-contrat.dto';
import { UpdateTypeContratDto } from 'src/dto/type-contrat-update.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type.name) private readonly typeModel: Model<Type>,
  ) {}

  async createTypeContrat(typeDto: TypeDto): Promise<Type> {
    const newType = new this.typeModel(typeDto);
    return await newType.save();
  }

  async getAllTypeContrats(): Promise<Type[]> {
    const contratTypeData = await this.typeModel.find();
    if (!contratTypeData || contratTypeData.length === 0) {
      throw new NotFoundException('Type Contrats not found!');
    }
    return contratTypeData;
  }

  async getTypeContrat(contratTypeId: string): Promise<Type> {
    const existingTypeContrat = await this.typeModel.findById(contratTypeId).exec();
    if (!existingTypeContrat) {
      throw new NotFoundException(`Contrat #${contratTypeId} not found`);
    }
    return existingTypeContrat;
  }

  async deleteTypeContrat(contratTypeId: string): Promise<Type> {
    const deletedContrat = await this.typeModel.findByIdAndDelete(contratTypeId);
    if (!deletedContrat) {
      throw new NotFoundException(`Contrat #${contratTypeId} not found`);
    }
    return deletedContrat;
  }

  async updateTypeContrat(contraTypetId: string, updateTypeContratDto: UpdateTypeContratDto): Promise<Type> {
    const existingTypeContrat = await this.typeModel.findByIdAndUpdate(contraTypetId, updateTypeContratDto, { new: true });
   if (!existingTypeContrat) {
     throw new NotFoundException(`Contrat #${contraTypetId} not found`);
   }
   return existingTypeContrat;
}
}