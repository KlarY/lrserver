import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
    {
        open_id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
        },
        session_key: {
            type: String,
            unique: true,
        },
        reminders: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Reminder',
            },
        ],
        shared_reminders: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Reminder',
            },
        ],
    },
    { collection: 'User', versionKey: false },
);