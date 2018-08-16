import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Truck } from 'entities/truck';
import { Customer } from './customer';


@Entity('carriers')
export class Carrier extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column('varchar', { length: 255 })
    name: string;
    
    @Column('varchar', { length: 255 })
    email: string;

    @Column('varchar', {
        length: 500,
        default: "Toronto",
    })
    address: string;

    @OneToMany(type => Truck, truck => truck.carrier, {
        cascade: true
    })
    trucks: Truck[];

    @ManyToMany(type => Customer, customer => customer.carriers)
    @JoinTable()
    customers: Customer[];

}