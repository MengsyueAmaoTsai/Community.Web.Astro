ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS build 
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && \
    pnpm i 

# Build the app
COPY . .
RUN pnpm run build

FROM node:${NODE_VERSION} AS production
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=build /app/dist ./dist

RUN npm i -g pnpm && \
    pnpm i --prod

ENV HOST=0.0.0.0
EXPOSE 4321

ENTRYPOINT [ "pnpm", "start" ]