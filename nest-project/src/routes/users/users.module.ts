import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/mongo/database.module';
import { Connection } from 'mongoose';
import { User, UserSchema } from './schema/users.schema';
import { UsersService } from './users.service';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        CaslAbilityFactory
    ],
    exports: [UsersService]
})
export class UsersModule { }
