import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/mongo/database.module';
import { Connection } from 'mongoose';
import { UserSchema } from './schema/users.schema';
import { UsersService } from './users.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        {
            provide: 'users_model',
            useFactory: (connection: Connection) => connection.model('users', UserSchema),
            inject: ['DATABASE_CONNECTION'],
        },
        UsersService,
    ],
    exports: [UsersService]
})
export class UsersModule { }
