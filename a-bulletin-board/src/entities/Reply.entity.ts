import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Timestamps } from './Timestamp.entity';

@Entity()
export class Reply extends Timestamps {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
}
