import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { DogsService } from './dogs.service';
import { createDogDto } from './dto/create-dog.dto';
import { Dog } from './model/dogs.model';


@Resolver('Dog')
export class DogsResolver {
    constructor(private readonly dogsService: DogsService) { }

    @Query(returns => [Dog])
    async dogs() {
        return this.dogsService.findAll();
    }


    @Mutation(returns => Dog)
    async createDog(@Args() args: createDogDto) {
        return await this.dogsService.create(args)
    }
}