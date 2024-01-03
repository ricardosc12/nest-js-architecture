import { Connection } from 'mongoose';
import { CatsScheme } from './schema/cats.schema';
import { CatsService } from './cats.service';

export const catsProvider = [
    {
        provide: 'CATS_MODEL',
        useFactory: (connection: Connection) => connection.model('cats', CatsScheme),
        inject: ['DATABASE_CONNECTION'],
    },
    CatsService
];