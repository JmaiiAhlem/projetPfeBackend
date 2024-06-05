
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class EquipeDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly Ename: string;
    

}