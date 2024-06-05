import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class SocieteDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly sname: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly semail: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly sadrsse: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly sphone: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly secteur: string;
    

}