# RichillCapital.Community.Web

## Install Dependencies

```bash
pnpm i
```

## Run Local Development Server

```bash
pnpm run dev
```

Then visit <http://localhost:9994>

## Build for Production

```bash
pnpm build
```

## Run Production

```bash
# Preview
pnpm run preview

# Production
pnpm start
```

## Build Docker Image

```bash
docker build -t community-web:latest .
```

## Run Docker Container

```bash
docker run -d -it -p 9994:4321 --restart=always --name community-web community-web:latest
```
