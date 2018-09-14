import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ length: 50, unique: true })
    open_id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50, unique: true })
    session_key: string;
}