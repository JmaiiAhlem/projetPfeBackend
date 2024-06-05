import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class ConnectedUser {
 
    

    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email: string;

    readonly verif?:boolean = false ;

}