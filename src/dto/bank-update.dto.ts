
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { BankDto } from "./bank.dto";
export class BankUpdateDto extends BankDto {
  
    readonly id: number;
    
}