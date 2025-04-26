import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/products.service'; 
import { ConfigModule } from '@nestjs/config'; // ✅ 추가

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ .env 자동 인식

    TypeOrmModule.forRoot({
      type: 'mysql', // ✅ MySQL 사용
      host: process.env.DB_HOST || 'localhost', // 환경변수 없으면 로컬 DB
      // host: process.env.NODE_ENV === 'production' ? 'db' : 'localhost', // 환경변수 없으면 로컬 DB
      port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
      username: process.env.DB_USERNAME || 'root', // 기본 사용자
      password: process.env.DB_PASSWORD || 'root', // 기본 비밀번호
      database: process.env.DB_DATABASE || 'playauto', // DB 이름
      autoLoadEntities: true, // forFeature 등록된 엔티티 자동 감지
      synchronize: process.env.NODE_ENV !== 'production'
    }),
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [ProductsController],  
  providers: [ProductService],
})
export class AppModule {}