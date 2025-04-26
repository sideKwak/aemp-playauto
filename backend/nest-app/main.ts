import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/common/filters/http-exception.filter';

// ✅ Swagger 관련 import
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let isRunning = false;

async function bootstrap() {
  if (isRunning) return; // 두 번 실행되는 걸 방지
  isRunning = true;

  const app = await NestFactory.create(AppModule);

  // ✅ 전역 유효성 검사 설정
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // DTO에 정의되지 않은 값 제거
      forbidNonWhitelisted: true,   // DTO에 없는 속성이 들어오면 에러 발생
      transform: true               // 문자열 숫자 자동 형변환 → DTO 타입에 맞게 변환
    }),
  );

  // ✅ CORS 허용 설정
  // app.enableCors({
  //   origin: ['http://localhost:5173'], // React 개발 서버 주소 (Vite 기준)
  //   credentials: true,                 // 쿠키, 인증 정보 포함 시 필요
  // });

  // ✅ Swagger 문서 설정 객체 생성
  const config = new DocumentBuilder()
    .setTitle('상품 API 문서')                      // 문서 제목
    .setDescription('NestJS + TypeORM 기반 API')     // 설명
    .setVersion('1.0')                               // 버전
    .build();

  // ✅ 위 설정을 기반으로 Swagger 문서 객체 생성
  const document = SwaggerModule.createDocument(app, config);

  // ✅ Swagger UI를 /api 경로에 연결
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new AllExceptionsFilter());

  // ✅ 서버 실행
  await app.listen(process.env.PORT ?? 3000);
  console.log(`✅ Server started on http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📄 Swagger 문서: http://localhost:${process.env.PORT ?? 3000}/api`);
  console.log('NODE_ENV=', process.env.NODE_ENV);
}

bootstrap();