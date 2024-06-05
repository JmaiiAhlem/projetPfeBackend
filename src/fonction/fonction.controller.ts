

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { FonctionService } from './fonction.service';
import { FonctionDto } from 'src/dto/fonction.dto';

@Controller('fonction')
export class FonctionController{
   constructor(private readonly FonctionService: FonctionService) { }
@Post()
   async createFonction(@Res() response, @Body() createFonctionDto: FonctionDto) {
  try {
    const newFonction = await this.FonctionService.createFonction(createFonctionDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'Fonction has been created successfully',
    newFonction,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Fonction not created!',
    error: 'Bad Request'
 });
 }
}
// @Put('/:id')
// async updateFonction(@Res() response,@Param('id') FonctionId: string,
// @Body() updateFonctionDto: UpdateFonctionDto) {
//   try {
//    const existingFonction = await this.FonctionService.updateFonction(FonctionId, updateFonctionDto);
//   return response.status(HttpStatus.OK).json({
//   message: 'Fonction has been successfully updated',
//   existingFonction,});
//  } catch (err) {
//    return response.status(err.status).json(err.response);
//  }
// }
@Get()
async getFonctions(@Res() response) {
try {
  const FonctionData = await this.FonctionService.getAllFonctions();
  return response.status(HttpStatus.OK).json({
  message: 'All Fonctions data found successfully',FonctionData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getFonction(@Res() response, @Param('id') FonctionId: string) {
 try {
    const existingFonction = await
this.FonctionService.getFonction(FonctionId);
    return response.status(HttpStatus.OK).json({
    message: 'Fonction found successfully',existingFonction,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteFonction(@Res() response, @Param('id') FonctionId: string)
{
  try {
    const deletedFonction = await this.FonctionService.deleteFonction(FonctionId);
    return response.status(HttpStatus.OK).json({
    message: 'Fonction deleted successfully',
    deletedFonction,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}
