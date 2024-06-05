import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Bank, BankSchema } from 'src/schema/bank.schema';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';

@Module({


    imports: [MongooseModule.forFeature([{ name: Bank.name, schema: BankSchema },
    ])],
    controllers: [BankController],
    providers: [BankService],
})
export class BankModule {}
