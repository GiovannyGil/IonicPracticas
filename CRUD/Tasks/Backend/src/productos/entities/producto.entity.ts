import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Productos'})
export class Productos {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @Column()
    descripcion: string;
    
    @Column()
    precio: number;
    
    @Column()
    stock: number;
}
