import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'blog_platform',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: ['src/db/migrations/**/*.{js,ts}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
