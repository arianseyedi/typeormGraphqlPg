import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    OneToOne,
} from 'typeorm';
import { Customer } from './customer'


@Entity('cards')
export class Card extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column('text')
    title: string;

    @Column('text', {
        nullable: true,
    })
    description: string;

    @Column('boolean', {
        default: "false",
    })
    done: boolean;

    @OneToOne(type => Customer, customer => customer.todo)
    customer: Customer;

}