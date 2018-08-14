import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    OneToOne,
    JoinColumn,
} from 'typeorm';


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

}