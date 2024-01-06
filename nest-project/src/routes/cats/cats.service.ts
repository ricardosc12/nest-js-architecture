import { Body, Inject, Injectable } from "@nestjs/common";
import { createCatDto } from "./dto/create-cat.dto";
import { Model } from "mongoose";
import { Cats } from "./cats.interface";

@Injectable()
export class CatsService {

    constructor(
        @Inject('CATS_MODEL')
        private catsModel: Model<Cats>
    ) { }

    async findAll() {
        return await this.catsModel.find()
    }

    async create(@Body() createCat: createCatDto) {
        const cat = await this.catsModel.create(createCat);
        await cat.save()
        return cat
    }

}   