import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Timestamps } from './Timestamp.entity';

@Entity()
export class Category extends Timestamps {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
