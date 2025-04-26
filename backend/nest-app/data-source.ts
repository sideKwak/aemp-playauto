import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';
import { Product } from './src/entities/product.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'playauto',
  entities: [Product],
  migrations: ['src/migrations/*.ts'],
});