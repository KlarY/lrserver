import { Reminder } from '../reminder.entity';
import { IReminder } from './IReminder';

export interface IReminderService {
    findAll(owner_id: string): Promise<Array<IReminder>>;
    findById(owner_id: string, _id: string): Promise<IReminder | null>;
    findOne(owner_id: string, options: object): Promise<IReminder | null>;
    create(owner_id: string, reminder: IReminder): Promise<IReminder>;
    update(owner_id: string, _id: string, newValue: IReminder): Promise<IReminder | null>;
    delete(owner_id: string, _id: string): Promise<number>;
}