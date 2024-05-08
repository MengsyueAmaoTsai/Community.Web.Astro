FROM node:lts-alpine AS build 
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm i 

COPY . .
RUN pnpm run build

FROM node:lts-alpine AS production
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=build /app/dist ./dist

RUN npm i -g pnpm && pnpm i --prod

EXPOSE 4321

ENTRYPOINT [ "pnpm", "start" ]