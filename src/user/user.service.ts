import { Injectable, Inject } from '@nestjs/common';
import { IUser, IUserService } from './interfaces/index';
import { Model } from 'mongoose';
import { CreateUserDTO } from './DTO/createUser.dto';

@Injectable()
export class UserService implements IUserService{
    constructor( @Inject('UsersRepository') private readonly usersRepository: Model<IUser>) { }

    public async findAll(): Promise<Array<IUser>> {
        return await this.usersRepository.find().exec();
    }

    public async findOne(options: object): Promise<IUser | null> {
        return await this.usersRepository.findOne(options).populate('reminders', '-owner').exec();
    }

    public async findById(_id): Promise<IUser | null> {
        return await this.usersRepository.findById(_id).populate('reminders', '-owner').exec();
    }

    public async create(user: CreateUserDTO): Promise<IUser> {
        return await this.usersRepository.create(user);
    }

    public async update(_id: string, newValue: IUser): Promise<IUser | null> {
        const user = await this.usersRepository.findById(_id).exec();
        if (!user._id) {
            console.error("user doesn't exist");
        }
        await this.usersRepository.findByIdAndUpdate(_id, newValue).exec();
        return await this.usersRepository.findById(_id).populate('reminders', '-owner').exec();
    }

    public async delete(_id: string): Promise<number> {
        await this.usersRepository.findByIdAndRemove(_id).exec();
        const user = await this.usersRepository.findById(_id).exec();
        if (!user) {
            return 1;
        }
        else {
            return 0;
        }
    }
}