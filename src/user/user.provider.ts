import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';

export const UserProvider = [
    {
        provide: 'UsersRepository',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['MongoDBConnection'],
    },
];