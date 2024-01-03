import { IsString } from "class-validator";

export class createCatDto {

    @IsString()

    name: string;
}