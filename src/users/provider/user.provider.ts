import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const userProvider: Provider[] = [
  {
    provide: 'UserRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
