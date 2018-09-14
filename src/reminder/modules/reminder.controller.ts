import { Controller, Get, Response, Req, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { ReminderService } from '../reminder.service';
import { UserService } from '../../user/user.service';
import { CreateReminderDTO } from '../DTO/createReminder.dto';

@Controller()
export class ReminderController {

    constructor(private readonly reminderService: ReminderService, private readonly userService: UserService) { }

    @Get('user/:owner_id/reminder')
    public async getAllReminder(@Req() request, @Response() res, @Param() param) {
        let reminders;
        try {
            if (Object.keys(request.query).length === 0){
                reminders = await this.reminderService.findAll(param.owner_id);
            }else{
                reminders = await this.reminderService.findOne(param.owner_id, request.query);
            }
        } catch (e) {
             return res.status(HttpStatus.OK).json({error: e});
        }
        return res.status(HttpStatus.OK).json(reminders);
    }

    @Get('user/:owner_id/reminder/:id')
    public async getReminder( @Response() res, @Param() param) {

        const reminder = await this.reminderService.findById(param.owner_id, param.id);
        return res.status(HttpStatus.OK).json(reminder);
    }

    @Post('user/:owner_id/reminder')
    public async createReminder( @Response() res, @Body() createReminderDTO: CreateReminderDTO, @Param() param) {

        const reminder = await this.reminderService.create(param.owner_id, createReminderDTO);
        let user;
        user = await this.userService.findById(param.owner_id);
        user.reminders.push(reminder._id);
        user = await this.userService.update(param.owner_id, user);
        return res.status(HttpStatus.OK).json(reminder);
    }

    @Patch('user/:owner_id/reminder/:_id')
    public async updateReminder( @Param() param, @Response() res, @Body() body) {

        const reminder = await this.reminderService.update(param.owner_id, param._id, body);
        return res.status(HttpStatus.OK).json(reminder);
    }

    @Delete('user/:owner_id/reminder/:_id')
    public async deleteReminder( @Param() param, @Response() res) {

        const reminder = await this.reminderService.delete(param.owner_id, param._id);
        return res.status(HttpStatus.OK).json(reminder);
    }
}