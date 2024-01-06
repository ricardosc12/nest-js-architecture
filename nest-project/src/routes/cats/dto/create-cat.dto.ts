import { IsString } from "class-validator";
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class createCatDto {
    
    @IsString()
    @Field(type => String)
    name: string;
}