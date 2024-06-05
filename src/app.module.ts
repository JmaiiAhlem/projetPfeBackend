import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { FonctionController } from './fonction/fonction.controller';
import { FonctionService } from './fonction/fonction.service';
import { EquipeController } from './equipe/equipe.controller';
import { EquipeService } from './equipe/equipe.service';
import { BankController } from './bank/bank.controller';
import { BankService } from './bank/bank.service';
import { SocieteController } from './societe/societe.controller';
import { SocieteService } from './societe/societe.service';
import { SearchController } from './search/search.controller';
import { SearchService } from './search/search.service';
import { TypeContratModule } from './type-contrat/type-contrat.module';
import { Category, CategorySchema } from './schema/category.schema';
import { Equipe, EquipeSchema } from './schema/equipe.schema';
import { Bank, BankSchema } from './schema/bank.schema';
import { User, UserSchema } from './schema/user.schema';
import { Fonction, FonctionSchema } from './schema/fonction.schema';
import { Societe, SocieteSchema } from './schema/societe.schema';
import { EquipeModule } from './equipe/equipe.module';
import { TypeModule } from './type/type.module';
import { BankModule } from './bank/bank.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gestion:visto@cluster0.cephn8g.mongodb.net/'),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Equipe.name, schema: EquipeSchema },
      { name: Bank.name, schema: BankSchema },
      { name: User.name, schema: UserSchema },
      { name: Fonction.name, schema: FonctionSchema },
      { name: Societe.name, schema: SocieteSchema },
    ]),
    TypeContratModule,
    EquipeModule,
    TypeModule,
    BankModule
  ],
  controllers: [
    AppController,
    CategoryController,
    BankController,
    FonctionController,
    SocieteController,
    SearchController,
    UserController,
  ],
  providers: [
    AppService,
    CategoryService,
    BankService,
    FonctionService,
    SocieteService,
    SearchService,
    UserService,
  ],
})
export class AppModule {}