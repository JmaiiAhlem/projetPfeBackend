

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { BankUpdateDto } from 'src/dto/bank-update.dto';
import { BankDto } from 'src/dto/bank.dto';
import { IBank } from 'src/interface/bank.interface';

@Injectable()
export class BankService {
constructor(@InjectModel('Bank') private BankModel:Model<IBank>) { }

async createBank(createBankDto: BankDto): Promise<IBank> {
   const newBank = await new this.BankModel(createBankDto);
   return newBank.save();
}

async updateBank(BankId: string, updateBankDto: BankUpdateDto): Promise<IBank> {
    const existingBank = await        this.BankModel.findByIdAndUpdate(BankId, updateBankDto, { new: true });
   if (!existingBank) {
     throw new NotFoundException(`Bank #${BankId} not found`);
   }
   return existingBank;
}
async getAllBanks(): Promise<IBank[]> {
    const BankData = await this.BankModel.find();
    if (!BankData || BankData.length == 0) {
        throw new NotFoundException('Banks data not found!');
    }
    return BankData;
}
async getBank(BankId: string): Promise<IBank> {
   const existingBank = await     this.BankModel.findById(BankId).exec();
   if (!existingBank) {
    throw new NotFoundException(`Bank #${BankId} not found`);
   }
   return existingBank;
}
async deleteBank(BankId: string): Promise<IBank> {
    const deletedBank = await this.BankModel.findByIdAndDelete(BankId);
   if (!deletedBank) {
     throw new NotFoundException(`Bank #${BankId} not found`);
   }
   return deletedBank;
}
}