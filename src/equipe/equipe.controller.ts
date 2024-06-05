

  
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { EquipeService } from './Equipe.service';
import { EquipeDto } from 'src/dto/equipe.dto';
@Controller('equipe')
export class EquipeController {
   constructor(private readonly EquipeService: EquipeService) { }
@Post()
   async createEquipe(@Res() response, @Body() createEquipeDto: EquipeDto ) {
  try {
    const newEquipe = await this.EquipeService.createEquipe(createEquipeDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'Equipe has been created successfully',
    newEquipe,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Equipe not created!',
    error: 'Bad Request'
 });
 }
}
// @Put('/:id')
// async updateEquipe(@Res() response,@Param('id') EquipeId: string,
// @Body() updateEquipeDto: UpdateEquipeDto) {
//   try {
//    const existingEquipe = await this.EquipeService.updateEquipe(EquipeId, updateEquipeDto);
//   return response.status(HttpStatus.OK).json({
//   message: 'Equipe has been successfully updated',
//   existingEquipe,});
//  } catch (err) {
//    return response.status(err.status).json(err.response);
//  }
// }
@Get()
async getEquipes(@Res() response) {
try {
  const EquipeData = await this.EquipeService.getAllEquipes();
  return response.status(HttpStatus.OK).json({
  message: 'All Equipes data found successfully',EquipeData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getEquipe(@Res() response, @Param('id') EquipeId: string) {
 try {
    const existingEquipe = await
this.EquipeService.getEquipe(EquipeId);
    return response.status(HttpStatus.OK).json({
    message: 'Equipe found successfully',existingEquipe,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteEquipe(@Res() response, @Param('id') EquipeId: string)
{
  try {
    const deletedEquipe = await this.EquipeService.deleteEquipe(EquipeId);
    return response.status(HttpStatus.OK).json({
    message: 'Equipe deleted successfully',
    deletedEquipe,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}
