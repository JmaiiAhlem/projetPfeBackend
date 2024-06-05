import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { TypeContratDto } from 'src/dto/typeContrat.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { TypeContratService } from './type-contrat.service';
import { UpdateContratDto } from 'src/dto/update-contrat.dto';

@ApiTags('contrat')

@Controller('type-contrat')
export class TypeContratController {

    constructor(private readonly typeContratService: TypeContratService) { }

    @Post("createContrat")
    @ApiBody({ type: TypeContratDto })
       async createContrat(@Res() response, @Body() typeContratDto: TypeContratDto) {
      try {
        const newContrat = await this.typeContratService.createContrat(typeContratDto);
        return response.status(HttpStatus.CREATED).json({
        message: 'Contrat a été créé avec succès',
        newContrat,});
     } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Contrat non créée !',
        error: 'Bad Request'
     });
     }
    }

    @Put('/:id')
    @ApiBody({ type: UpdateContratDto })
    async updateSociete(@Res() response,@Param('id') contratId: string,
    @Body() updateContratDto: UpdateContratDto) {
      try {
       const existingContrat = await this.typeContratService.updateContrat(contratId, updateContratDto);
      return response.status(HttpStatus.OK).json({
      message: 'Le contrat a été mise à jour avec succès',
      existingContrat,});
     } catch (err) {
       return response.status(err.status).json(err.response);
     }
    }
    @Get()
    async getContrats(@Res() response) {
    try {
      const ContratData = await this.typeContratService.getAllContrats();
      
      return response.status(HttpStatus.OK).json({
      message: 'All Contrats data found successfully',ContratData});
     } catch (err) {
      return response.status(err.status).json(err.response);
     }
    }
    @Get('/:id')
    async getContrat(@Res() response, @Param('id') ContratId: string) {
     try {
        const existingContrat = await
    this.typeContratService.getContrat(ContratId);
        return response.status(HttpStatus.OK).json({
        message: 'Contrat found successfully',existingContrat,});
     } catch (err) {
       return response.status(err.status).json(err.response);
     }
    }
    
    @Delete('/:id')
    async deleteContrat(@Res() response, @Param('id') ContratId: string)
    {
      try {
        const deleteContrat = await this.typeContratService.deleteContrat(ContratId);
        return response.status(HttpStatus.OK).json({
        message: 'Contrat supprimée avec succès',
        deleteContrat,});
      }catch (err) {
        return response.status(err.status).json(err.response);
      }
     }
    }
    

