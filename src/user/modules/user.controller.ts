import { Controller, Get, Response, Req, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDTO } from '../DTO/createUser.dto';

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get('user')
    public async getAllUser(@Req() request, @Response() res) {
        let users;
        try {
            if (Object.keys(request.query).length === 0){
                users = await this.userService.findAll();
            }else{
                users = await this.userService.findOne(request.query);
            }
        } catch (e) {
             return res.status(HttpStatus.OK).json({error: e});
        }
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('user/:id')
    public async getUser( @Response() res, @Param() param, @Req() req) {
        const user = await this.userService.findById(param.id);
        return res.status(HttpStatus.OK).json(user);
    }

    @Post('user')
    public async createUser( @Response() res, @Body() createUserDTO: CreateUserDTO) {

        const user = await this.userService.create(createUserDTO);
        return res.status(HttpStatus.OK).json(user);
    }

    @Patch('user/:_id')
    public async updateUser( @Param() param, @Response() res, @Body() body) {

        const user = await this.userService.update(param._id, body);
        return res.status(HttpStatus.OK).json(user);
    }

    @Delete('user/:_id')
    public async deleteUser( @Param() param, @Response() res) {

        const user = await this.userService.delete(param._id);
        return res.status(HttpStatus.OK).json(user);
    }
}