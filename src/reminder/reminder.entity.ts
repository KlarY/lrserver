import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reminder {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ length: 50 })
    title: string;

    @Column({ length: 50 })
    create_time: string;

    @Column({ length: 50 })
    owner: string;

    @Column({ length: 50 })
    description: string;

    @Column({ length: 50 })
    location: string;

    @Column({ length: 50 })
    pic: string;

    @Column({ length: 50 })
    location_pic: string;
}