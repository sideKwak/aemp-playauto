# ✅ 1. Node 기반 이미지 사용
FROM node:18

# ✅ 2. 컨테이너 내 작업 디렉토리 설정
WORKDIR /var/app

# ✅ 3. package.json과 lock 파일만 먼저 복사 (의존성 캐시 활용)
COPY package*.json ./

# ✅ 4. 의존성 설치
RUN npm install

# ✅ 5. 전체 소스 코드 복사
COPY . .

# ✅ 6. NestJS 프로젝트 빌드
RUN npm run build

# ✅ 7. 포트 개방
EXPOSE 3000

# ✅ 8. 앱 실행
CMD ["node", "dist/main.js"]