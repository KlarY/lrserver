import * as mongoose from 'mongoose';

export const ReminderSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        create_time: {
            type: Date,
        },
        owner: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        },
        description: {
            type: String,
        },
        location: {
            type: String,
        },
        pic: {
            type: String,
        },
        location_pic: {
            type: String,
        },
    },
    { collection: 'Reminder', versionKey: false },
);