import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
export class Dog {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;
}