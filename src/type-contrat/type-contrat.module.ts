import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeContratService } from './type-contrat.service';
import { TypeContratController } from './type-contrat.controller';
import { TypeContrat, TypeContratSchema } from 'src/schema/typeContrat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TypeContrat.name, schema: TypeContratSchema }])
  ],
  controllers: [TypeContratController],
  providers: [TypeContratService],
  exports: [TypeContratService]
})
export class TypeContratModule {}