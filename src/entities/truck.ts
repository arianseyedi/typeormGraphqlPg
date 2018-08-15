import { Carrier } from './carrier';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm';


@Entity('trucks')
export class Truck extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column('varchar', { length: 255 })
    model: string;
    
    @Column('int')
    purchaseYear: number;

    @ManyToOne(type => Carrier, carrier => carrier.trucks)
    carrier: Carrier;
}