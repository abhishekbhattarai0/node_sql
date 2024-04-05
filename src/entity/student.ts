import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm"
import { employ } from "./employ"

@Entity() //define as table
export class student {

    @PrimaryGeneratedColumn('uuid') //gives unique id
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number



    @DeleteDateColumn()
    deleteDate: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany( ()=> employ,(employ)=> employ.student,{cascade:true, eager:true},)
    employ: employ[]
}
