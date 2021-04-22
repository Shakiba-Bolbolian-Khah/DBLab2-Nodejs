import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import Employer from './employer.entity';


@Entity()
export default class ProjectEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  field: string;

  @Column({ length: 500 })
  subfield: string;
  
  @Column({ length: 500 })
  title: string;

  @Column({ length: 1500 })
  desc: string;
  
  @Column("string", { array: true })
  skills: string[];

  @Column() //1 to 6
  size: number;

  @Column()
  budget: number;

  @Column({ length: 200 })
  type: string;

  @Column()
  finalCost: number;

  @Column({ type: 'date' })
  deadline: string;


  @ManyToOne(() => Employer, employer => employer.projects)
  employer: Employer;
}