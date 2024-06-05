import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Equipe,EquipeSchema } from "src/schema/equipe.schema";
import { EquipeController } from './equipe.controller';
import { EquipeService } from './Equipe.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Equipe.name, schema: EquipeSchema },
    ])],
    controllers: [EquipeController],
    providers: [EquipeService],
    exports: [EquipeService],

  })

  export class EquipeModule {}
