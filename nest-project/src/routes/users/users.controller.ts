import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post, Res, UseGuards } from "@nestjs/common";
import { createUserDto } from "./dto/create-user.dto";
import { User } from "./users.interface";
import { Response } from "express";
import { UsersService } from "./users.service";
import { AuthGuard } from "../auth/auth.guard";

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) { }

    @Get()
    findAll() {
        return this.usersService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    findOnById(@Param('id') id: any) {
        return this.usersService.findById(id)
    }

    @Post()
    async create(@Body() createUser: createUserDto) {
        const user = await this.usersService.create(createUser as User);
        return user
    }

    @Patch(':id')
    async update(@Param('id') id: any, @Body() updateUser: createUserDto, @Res() resp: Response) {

        const user = await this.usersService.update(id, updateUser as User)

        if (user) {
            resp.status(200).send(user)
        }

        resp.status(400).send()
    }

    @Delete(':id')
    async delete(@Param('id') id: any, @Res() resp: Response) {
        if (this.usersService.delete(id)) {
            resp.status(200).send()
        }
        resp.status(404).send()
    }
}   