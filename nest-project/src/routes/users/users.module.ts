import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/mongo/database.module';
import { Connection } from 'mongoose';
import { UserSchema } from './schema/users.schema';
import { UsersService } from './users.service';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        {
            provide: 'users_model',
            useFactory: (connection: Connection) => connection.model('users', UserSchema),
            inject: ['mongo_db_connection'],
        },
        UsersService,
        CaslAbilityFactory
    ],
    exports: [UsersService]
})
export class UsersModule { }
