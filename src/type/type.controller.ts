import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { TypeContratDto } from 'src/dto/typeContrat.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateContratDto } from 'src/dto/update-contrat.dto';
import { TypeService } from './type.service';
import { TypeDto } from 'src/dto/type-contrat.dto';
import { UpdateTypeContratDto } from 'src/dto/type-contrat-update.dto';

@ApiTags('type-contrat')

@Controller('type')
export class TypeController {

    constructor(private readonly type: TypeService) { }

    @Post("createTypeContrat")
    @ApiBody({ type: TypeDto })
       async createContrat(@Res() response, @Body() typeContratDto: TypeDto) {
      try {
        const newTypeContrat = await this.type.createTypeContrat(typeContratDto);
        return response.status(HttpStatus.CREATED).json({
        message: 'Type Contrat a été créé avec succès',
        newTypeContrat,});
     } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Contrat non créée !',
        error: 'Bad Request'
     });
     }
    }

    @Put('/:id')
    @ApiBody({ type: UpdateTypeContratDto })
    async updateTypeContrat(@Res() response,@Param('id') contratTypeId: string,
    @Body() updateTypeContratDto: UpdateTypeContratDto) {
      try {
       const existingTypeContrat = await this.type.updateTypeContrat(contratTypeId, updateTypeContratDto);
      return response.status(HttpStatus.OK).json({
      message: 'Le type  contrat a été mise à jour avec succès',
      existingTypeContrat,});
     } catch (err) {
       return response.status(err.status).json(err.response);
     }
    }
    @Get()
    async getContrats(@Res() response) {
    try {
      const ContratTypeData = await this.type.getAllTypeContrats();
      
      return response.status(HttpStatus.OK).json({
      message: 'All Contrats data found successfully',ContratTypeData});
     } catch (err) {
      return response.status(err.status).json(err.response);
     }
    }
    @Get('/:id')
    async getTypeContrat(@Res() response, @Param('id') ContratId: string) {
     try {
        const existingTypeContrat = await
    this.type.getTypeContrat(ContratId);
        return response.status(HttpStatus.OK).json({
        message: 'Contrat found successfully',existingTypeContrat,});
     } catch (err) {
       return response.status(err.status).json(err.response);
     }
    }
    
    @Delete('/:id')
    async deleteTypeContrat(@Res() response, @Param('id') ContratTypeId: string)
    {
      try {
        const deleteContrat = await this.type.deleteTypeContrat(ContratTypeId);
        return response.status(HttpStatus.OK).json({
        message: 'Contrat type  supprimée avec succès',
        deleteContrat,});
      }catch (err) {
        return response.status(err.status).json(err.response);
      }
     }
    }
    

