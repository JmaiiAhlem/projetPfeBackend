
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { SocieteDto } from 'src/dto/societe.dto';
import { SocieteService } from './societe.service';
import { UpdateSocieteDto } from 'src/dto/update-societe.dto';
import { ApiBody } from '@nestjs/swagger';


@Controller('societe')
export class SocieteController{
   constructor(private readonly SocieteService: SocieteService) { }

@Post("createSociete")
   async createSociete(@Res() response, @Body() societeDto: SocieteDto) {
  try {
    const newSociete = await this.SocieteService.createSociete(societeDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'Société a été créé avec succès',
    newSociete,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Société non créée !',
    error: 'Bad Request'
 });
 }
}


@Put('/:id')
@ApiBody({ type: UpdateSocieteDto })
async updateSociete(@Res() response,@Param('id') SocieteId: string,
@Body() updateSocieteDto: UpdateSocieteDto) {
  try {
   const existingSociete = await this.SocieteService.updateSociete(SocieteId, updateSocieteDto);
  return response.status(HttpStatus.OK).json({
  message: 'La société a été mise à jour avec succès',
  existingSociete,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Get()
async getSocietes(@Res() response) {
try {
  const SocieteData = await this.SocieteService.getAllSocietes();
  return response.status(HttpStatus.OK).json({
  message: 'All Categorys data found successfully',SocieteData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getSociete(@Res() response, @Param('id') SocieteId: string) {
 try {
    const existingSociete = await
this.SocieteService.getSociete(SocieteId);
    return response.status(HttpStatus.OK).json({
    message: 'Societe found successfully',existingSociete,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteSociete(@Res() response, @Param('id') SocieteId: string)
{
  try {
    const deleteSociete = await this.SocieteService.deleteSociete(SocieteId);
    return response.status(HttpStatus.OK).json({
    message: 'Société supprimée avec succès',
    deleteSociete,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}
