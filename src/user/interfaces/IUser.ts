import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly _id: string;
    readonly open_id: string;
    readonly name: string;
    readonly session_key: string;
    readonly reminders: object;
    readonly shared_reminders: object;
}