import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { student } from "./student"

@Entity()
export class employ {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @ManyToOne( ()=> student,(student)=>student.employ)
    student: student

    
}
