import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export default class FreelanceEntity extends BaseEntity 
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
  rank: number;

  //Account-related stuff
  @Column()
  accountCost: number;

  @Column({ length: 200 })
  type: string;

  @Column()
  autoextensive: boolean;

  @Column()
  expiration: number;
}