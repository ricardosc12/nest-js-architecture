import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class createDogDto {

    @IsString()
    @Field(type => String)
    name: string;
}