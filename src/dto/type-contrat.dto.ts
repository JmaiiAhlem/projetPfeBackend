import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class TypeDto {
  

    @IsString()
    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly type: string;

    @IsString()
    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @ApiProperty()
    readonly maximuimPermis: string;
       
}