


import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankDto } from 'src/dto/bank.dto';
import { BankUpdateDto } from 'src/dto/bank-update.dto';

@Controller('bank')
export class BankController {
   constructor(private readonly bankService: BankService) { }
@Post('createBank')
   async createBank(@Res() response, @Body() createBankDto: BankDto) {
  try {
    const newBank = await this.bankService.createBank(createBankDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'Bank has been created successfully',
    newBank,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Bank not created!',
    error: 'Bad Request'
 });
 }
}
@Put('/:id')
async updateBank(@Res() response,@Param('id') BankId: string,
@Body() updateBankDto: BankUpdateDto) {
  try {
   const existingBank = await this.bankService.updateBank(BankId, updateBankDto);
  return response.status(HttpStatus.OK).json({
  message: 'Bank has been successfully updated',
  existingBank,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Get()
async getBanks(@Res() response) {
try {
  const BankData = await this.bankService.getAllBanks();
  return response.status(HttpStatus.OK).json({
  message: 'All Banks data found successfully',BankData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getBank(@Res() response, @Param('id') BankId: string) {
 try {
    const existingBank = await
this.bankService.getBank(BankId);
    return response.status(HttpStatus.OK).json({
    message: 'Bank found successfully',existingBank,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteBank(@Res() response, @Param('id') BankId: string)
{
  try {
    const deletedBank = await this.bankService.deleteBank(BankId);
    return response.status(HttpStatus.OK).json({
    message: 'Bank deleted successfully',
    deletedBank,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}
