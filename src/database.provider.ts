import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'MongoDBConnection',
        useFactory: async (): Promise<typeof mongoose> => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb://localhost:27017/LazyReminder', { useNewUrlParser: true });
        },
    },
];