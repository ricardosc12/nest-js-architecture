import { IsString } from "class-validator";

export class LoginArgDto {

    @IsString({ message: "username deve ser uma string!" })
    username: string

    @IsString({ message: "password deve ser uma string" })
    password: string;
}