# RichillCapital.Community.Web

## Install Dependencies

```bash
pnpm i
```

## Run Local Development Server

```bash
pnpm run dev
```

Then visit <http://localhost:9995>

## Build for Production

```bash
pnpm build
```

## Run Production

```bash
# Preview
pnpm run preview

# Production

```

## Build Docker Image

```bash
docker build -t community-web:latest .
```

## Run Docker Container

```bash
docker run -d -it -p 9996:3000 --restart=always --name community-web community-web:latest
```
