# Netflix Web App — Backend (NestJs)

## Features

- Fetch data from the free movies API (TMDB) for use in Next.js.

## Tech Stack

- NestJs 11

## Folder Structure

```
netflix-web-app-api/

├─ dist/
├─ node_modules/
├─ src/
│ ├─ data/
│ │ ├─ repositories/
│ │ │ └─ movie/
│ │ │ └─ movie.interface.ts
│ │ └─ tmdb-adapter/
│ │ └─ tmdb-movie/
│ │ ├─ tmdb-movie.ts
│ │ └─ tmdb-movie.types.ts
│ │
│ ├─ domain/
│ │ └─ entities/
│ │ └─ movie/
│ │ └─ movie.entity.ts
│ │
│ ├─ usecases/
│ │ └─ get-popular-movies/
│ │ └─ get-popular-movies.ts
│ │
│ ├─ movies/
│ │ └─ movies.module.ts
│ │
│ ├─ presentation/
│ │ ├─ controllers/
│ │ │ └─ movies.controller.ts
│ │ └─ dto/
│ │ └─ movie/
│ │ └─ movie.dto.ts
│ │
│ ├─ app.controller.spec.ts
│ ├─ app.controller.ts
│ ├─ app.module.ts
│ ├─ app.service.ts
│ └─ main.ts
```
# Getting Started

## Project setup

```
$ pnpm install
```

## Run the project

```
$ pnpm start:dev
```
