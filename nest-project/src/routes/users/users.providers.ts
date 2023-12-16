import { Connection } from 'mongoose';
import { UserSchema } from './schema/users.schema';

export const usersPriveders = [
    {
        provide: 'USERS_MODEL',
        useFactory: (connection: Connection) => connection.model('users', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];