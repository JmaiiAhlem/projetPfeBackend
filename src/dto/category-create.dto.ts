import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto{
    @IsNotEmpty()
    @ApiProperty()

    cname: string;

    @IsNotEmpty()
    @ApiProperty()
    description: string 
    
    @IsString()
    @ApiProperty()
    superviseur: string 
    
   
}