import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/users.schema';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AbilityUserService } from './ability/user.ability';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        AbilityUserService
    ],
    exports: [UsersService]
})
export class UsersModule { }
