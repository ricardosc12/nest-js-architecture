import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MaxLength, MinLength, isNotEmpty } from "class-validator";

export class createUserDto {

    @IsEmail(undefined, { message: "Forneça um email válido!" })
    @IsOptional()
    email: string;

    @IsString({ message: "A senha deve ser uma cadeia de caracteres" })
    // @MinLength(8, { message: "Senha deve ser maior do que 8 caracteres" })
    // @MaxLength(40, { message: "Senha deve ser menor do que 40 caracteres" })
    password: string;

    @IsString({message: "Username deve ser uma string"})
    username: string;
}