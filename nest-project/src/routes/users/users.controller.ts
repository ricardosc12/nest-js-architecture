import { Body, Controller, Get, Inject, Injectable, Param, Patch, Post, Res } from "@nestjs/common";
import { createUserDto } from "./dto/create-user.dto";
import { Model } from "mongoose";
import { Users } from "./users.interface";
import { Response } from "express";

@Injectable()
@Controller('users')
export class UsersController {

    constructor(
        @Inject('USERS_MODEL')
        private usersModel: Model<Users>
    ) { }

    @Get()
    findAll() {
        return this.usersModel.find()
    }

    @Get(":id")
    findOnById(@Param('id') id: any) {
        return this.usersModel.findById(id)
    }

    @Post()
    async create(@Body() createUser: createUserDto) {
        const user = await this.usersModel.create(createUser);
        await user.save()
    }

    @Patch(':id')
    async update(@Param('id') id: any, @Body() updateUser: createUserDto, @Res() resp: Response) {
        try {
            await this.usersModel.updateOne({
                _id: id
            }, updateUser)
            resp.status(200).send()
        }
        catch (e) {
            resp.status(400).send()
        }
    }

}   