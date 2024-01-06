import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/mongo/database.module';
import { DogsResolver } from './dogs.resolver';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Connection } from 'mongoose';
import { DogsSchema } from './schema/dogs.schema';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [
        DogsController
    ],
    providers: [
        {
            provide: 'dogs_model',
            useFactory: (connection: Connection) => connection.model('dogs', DogsSchema),
            inject: ['DATABASE_CONNECTION'],
        },
        DogsService,
        DogsResolver
    ],
})

export class DogsModule { }
