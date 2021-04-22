import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from 'typeorm';
import Project from './projects.entity';

@Entity()
export default class EmpEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  firstName: string;

  @Column({ length: 500 })
  lastName: string;
  
  @Column({ length: 500 })
  email: string;

  @Column({ length: 11 })
  phone: string;
  
  @Column()
  score: number;
  
  @OneToMany(() => Project, project => project.employer)
  projects: Project[];
}