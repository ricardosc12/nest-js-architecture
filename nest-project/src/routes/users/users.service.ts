import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserSchema } from './schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) { }

    findAll() {
        return this.userModel.find()
    }

    async findById(id: any) {
        const user = await this.userModel.findById(id)
        if (!user) {
            throw new NotFoundException({ message: "Usuário não encontrado!" })
        }
        return user
    }

    async findByUsername(usernameArg: string) {
        const user = await this.userModel.findOne({
            username: usernameArg
        })
        if (!user) {
            throw new NotFoundException({ message: "Usuário não encontrado!" })
        }
        return user
    }

    async create(userArg: User) {
        const user = await this.userModel.create(userArg)
        await user.save()
        return user
    }

    async update(id: any, userArg: User) {
        try {
            const user = await this.userModel.updateOne({
                _id: id
            }, userArg)

            return user
        }
        catch {
            return null
        }
    }

    async delete(id: any) {
        const resp = await this.userModel.deleteOne({
            _id: id
        })

        if (!resp.deletedCount) {
            throw new BadRequestException({ message: "Não foi possível deletar o usuário!" })
        }

        return true
    }
}
