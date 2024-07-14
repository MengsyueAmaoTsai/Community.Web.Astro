ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS build 
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && \
    pnpm i 

# Build the app
COPY . .
RUN pnpm build


FROM node:${NODE_VERSION} AS runtime
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=build /app/dist ./

RUN npm i -g pnpm && \
    pnpm i --prod

ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 4321
CMD ["node", "./server/entry.mjs"]
