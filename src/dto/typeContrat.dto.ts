import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class TypeContratDto {
  

    @IsString()
    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly type: string;

    @IsString()
    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly descriptionContrat: string;

    @IsString()
    @ApiProperty()
    readonly duree: string;
       
}