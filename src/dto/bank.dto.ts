
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class BankDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly bname: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly bcode: string;


}