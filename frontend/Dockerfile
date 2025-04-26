# 1단계: 빌드용 이미지 (Vite 사용 시 필수)
FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# 2단계: Nginx 서버로 정적 파일 서빙
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 기본 설정 사용
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
