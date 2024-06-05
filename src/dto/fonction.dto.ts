
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class FonctionDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly Fname: string;
    

}