import { Connection } from 'mongoose';
import { ReminderSchema } from './schemas/reminder.schema';

export const ReminderProvider = [
    {
        provide: 'RemindersRepository',
        useFactory: (connection: Connection) => connection.model('Reminder', ReminderSchema),
        inject: ['MongoDBConnection'],
    },
];