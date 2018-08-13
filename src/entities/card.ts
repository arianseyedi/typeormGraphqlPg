import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm';


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

}