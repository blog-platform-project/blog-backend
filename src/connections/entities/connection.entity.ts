import { ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export class Connection {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User, (user) => user.id)
  userId: number;

  @ManyToMany(() => User, (user) => user.id)
  userFollowedId: number;
}
