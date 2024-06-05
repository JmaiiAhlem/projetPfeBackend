import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TypeContrat, TypeContratSchema } from 'src/schema/typeContrat.schema';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { Type, TypeSchema } from 'src/schema/type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }])
  ],
  controllers: [TypeController],
  providers: [TypeService],
  exports: [TypeService]
})
export class TypeModule {}