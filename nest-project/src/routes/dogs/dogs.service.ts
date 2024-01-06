import { Body, Inject, Injectable } from "@nestjs/common";
import { createDogDto } from "./dto/create-dog.dto";
import { Model } from "mongoose";
import { Dogs } from "./dogs.interface";

@Injectable()
export class DogsService {

    constructor(
        @Inject('dogs_model')
        private dogsModel: Model<Dogs>
    ) { }

    async findAll() {
        return await this.dogsModel.find()
    }

    async create(@Body() createCat: createDogDto) {
        const cat = await this.dogsModel.create(createCat);
        await cat.save()
        return cat
    }

}   