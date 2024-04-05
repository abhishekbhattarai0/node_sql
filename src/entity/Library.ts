import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Library{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique:true})
    bookName: string

    @Column()
    takenDate: string

    @Column()
    returnDate: string
    
    
}
