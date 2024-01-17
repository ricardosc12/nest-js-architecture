import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post, Request, Res, UnauthorizedException, UseGuards } from "@nestjs/common";
import { createUserDto } from "./dto/create-user.dto";
import { Response } from "express";
import { UsersService } from "./users.service";
import { User, UserSchema } from "./schema/users.schema";
import { JwtAuthGuard } from "../common/auth/jwt-auth.guard";
import { AbilityUserService, Action } from "./ability/user.ability";
import { AbilityGuard, CheckPolicies } from "./guard/user.guard";



@Controller('users')
@UseGuards(JwtAuthGuard, AbilityGuard)
export class UsersController {

    constructor(
        private usersService: UsersService,
        private abilityService: AbilityUserService
    ) { }

    @Get()
    @CheckPolicies(Action.Read)
    findAll(@Request() req) {
        return this.usersService.findAll(req.fields)
    }

    @Get(":id")
    @CheckPolicies(Action.Read)
    findOnById(@Param('id') id: any, @Request() req) {
        return this.usersService.findById(id, req.fields)
    }

    @Post()
    @CheckPolicies(Action.Create)
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