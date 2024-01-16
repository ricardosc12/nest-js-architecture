import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post, Request, Res, UnauthorizedException, UseGuards } from "@nestjs/common";
import { createUserDto } from "./dto/create-user.dto";
import { Response } from "express";
import { UsersService } from "./users.service";
import { User } from "./schema/users.schema";
import { Action, CaslAbilityFactory } from "src/casl/casl-ability.factory";
import { JwtAuthGuard } from "../common/auth/jwt-auth.guard";


@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
        private caslAbility: CaslAbilityFactory
    ) { }

    @Get()
    findAll(@Request() req) {
        return this.usersService.findAll()
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    findOnById(@Param('id') id: any, @Request() req) {
        const ability = this.caslAbility.createForUser(req.user)
        if (!ability.can(Action.Read, User)) {
            throw new UnauthorizedException({ message: "Usuário não autorizado!" })
        }
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