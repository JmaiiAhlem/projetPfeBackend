
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;

    // @IsString()
    // @MaxLength(30)
    // @ApiProperty()
    // @IsNotEmpty()
    // readonly firstName: string;
    
    @IsString()
    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @IsString()
    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly adresse: string;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    readonly phone: string; 
  
    @IsString()
    @ApiProperty()
    readonly datNais: string;
    
    @IsString()
    @ApiProperty()
    readonly etatCivil: string;


    @IsString()

    @ApiProperty()
    readonly fonction: string; 

    @IsString()
    @ApiProperty()
    readonly typecontrat: string;

    @IsString()
    @ApiProperty()
    readonly datDebut: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly role: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly category: string;

    @ApiProperty()
    readonly verif:boolean;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly bankName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly rib: string;

}