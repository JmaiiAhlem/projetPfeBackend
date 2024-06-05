import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Fonction, FonctionSchema } from 'src/schema/fonction.schema';
import { FonctionController } from './fonction.controller';
import { FonctionService } from './fonction.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Fonction.name, schema: FonctionSchema},
    ])],
    controllers: [FonctionController],
    providers: [FonctionService],
  })
export class FonctionModule {}


