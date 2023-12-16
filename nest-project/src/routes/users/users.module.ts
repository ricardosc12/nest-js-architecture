import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { usersPriveders } from './users.providers';
import { DatabaseModule } from 'src/database/mongo/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [...usersPriveders],
})
export class UsersModule { }
