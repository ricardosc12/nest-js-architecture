import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'mongo_db_connection',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://root:toor@127.0.0.1:27017'),
    },
];