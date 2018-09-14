import { Module } from '@nestjs/common';
import { ReminderService } from '../reminder.service';
import { ReminderProvider } from '../reminder.provider';
import { DatabaseModule } from '../../database.module';
import { ReminderController } from './reminder.controller';
import { UserService } from '../../user/user.service';
import { UserProvider } from '../../user/user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ReminderController],
    providers: [
        ReminderService,
        ...ReminderProvider,
        UserService,
        ...UserProvider,
    ],
})
export class ReminderModule { }