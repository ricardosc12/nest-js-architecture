import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { createDogDto } from "./dto/create-dog.dto";
import { DogsService } from "./dogs.service";

@Injectable()
@Controller('dogs')
export class DogsController {

    constructor(
        private readonly dogsService: DogsService
    ) { }

    @Get()
    findAll() {
        return this.dogsService.findAll()
    }

    @Post()
    async create(@Body() args: createDogDto) {
        const dog = await this.dogsService.create(args);
        await dog.save()
        return dog
    }
}   