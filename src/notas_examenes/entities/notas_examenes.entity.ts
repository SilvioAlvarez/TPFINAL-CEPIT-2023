import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Alumno } from 'src/alumno/entities/alumno.entity'; 
import { Materia } from 'src/materia/entities/materia.entity';

@Entity()
export class NotaExamen {

  @PrimaryGeneratedColumn()
  public idNota: number;

  @Column()
  public nombre: string;

  @Column()
  public anio: string;

  @Column()
  public fechaNota: Date;

  @Column()
  public nota: number;

  @Column()
  public trimestre: number;

  @ManyToOne(() => Alumno, alumno => alumno.notasExamenes)
  alumno: Alumno;

  @ManyToOne(() => Materia, materia => materia.notasExamenes)
  materia: Materia;

  // Otros atributos y métodos si es necesario
}
