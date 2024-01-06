import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { createCatDto } from './dto/create-cat.dto';
import { Cat } from './model/cats.model';


@Resolver('Cat')
export class CatsResolver {
    constructor(private readonly catsService: CatsService) { }

    @Query(returns => [Cat])
    async cats() {
        return this.catsService.findAll();
    }


    @Mutation(returns => Cat)
    async createCat(@Args() args: createCatDto) {
        return await this.catsService.create(args)
    }
}