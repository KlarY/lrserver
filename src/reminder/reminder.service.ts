import { Injectable, Inject } from '@nestjs/common';
import { IReminder, IReminderService } from './interfaces/index';
import { Model } from 'mongoose';
import { CreateReminderDTO } from './DTO/createReminder.dto';

@Injectable()
export class ReminderService implements IReminderService{
    constructor( @Inject('RemindersRepository') private readonly remindersRepository: Model<IReminder>) { }

    public async findAll(owner_id: string): Promise<Array<IReminder>> {
        return await this.remindersRepository.find({owner: owner_id}).populate('owner', '-reminders').exec();
    }

    public async findOne(owner_id: string, options: object): Promise<IReminder | null> {
        return await this.remindersRepository.find({owner: owner_id}).findOne(options).populate('owner', '-reminders').exec();
    }

    public async findById(owner_id: string, _id): Promise<IReminder | null> {
        return await this.remindersRepository.findById(_id).populate('owner', '-reminders').exec();
    }

    public async create(owner_id: string, reminder: CreateReminderDTO): Promise<IReminder> {
        return await this.remindersRepository.create(reminder);
    }

    public async update(owner_id: string, _id: string, newValue: IReminder): Promise<IReminder | null> {
        const reminder = await this.remindersRepository.findById(_id).exec();
        if (!reminder._id) {
            console.error("reminder doesn't exist");
        }
        await this.remindersRepository.findByIdAndUpdate(_id, newValue).exec();
        return await this.remindersRepository.findById(_id).populate('owner', '-reminders').exec();
    }

    public async delete(owner_id: string, _id: string): Promise<number> {
        await this.remindersRepository.findByIdAndRemove(_id).exec();
        const reminder = await this.remindersRepository.findById(_id).populate('owner', '-reminders').exec();
        if (!reminder) {
            return 1;
        }
        else {
            return 0;
        }
    }
}