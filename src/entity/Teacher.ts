import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm"
import { student } from "./student"
import { Library } from "./Library"
@Entity() //define as table
export class Teacher {

    @PrimaryGeneratedColumn('uuid') //gives unique id
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({nullable: true})
    profile:string

    @DeleteDateColumn()
    deleteDate: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(()=>student)
    @JoinColumn()
    student:student
    
    @OneToOne(()=> Library)
    @JoinColumn()
    teacher: Library

    
}
