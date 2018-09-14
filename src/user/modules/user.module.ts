import { Module } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserProvider } from '../user.provider';
import { DatabaseModule } from '../../database.module';
import { UserController } from './user.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        UserService,
        ...UserProvider,
    ],
})
export class UserModule { }