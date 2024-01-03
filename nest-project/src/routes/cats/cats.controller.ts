import { Body, Controller, Get, Inject, Injectable, Param, Patch, Post, Res } from "@nestjs/common";
import { createCatDto } from "./dto/create-cat.dto";
import { Model } from "mongoose";
import { Cats } from "./cats.interface";
import { CatsService } from "./cats.service";

@Injectable()
@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll() {
        return this.catsService.findAll()
    }

    @Post()
    async create(@Body() createCat: createCatDto) {
        return this.catsService.create(createCat)
    }

}   