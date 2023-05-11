# Базовый образ
FROM node:lts-alpine as build-stage

# Рабочая директория
WORKDIR /app

# Копируем файлы `package.json` и `package-lock.json` (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

# Собираем проект
RUN npm run build

# production stage
FROM node:lts-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app ./

EXPOSE 3000

CMD [ "npm", "start" ]