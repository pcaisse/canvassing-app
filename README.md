# Canvassing App

Using Next.js and tRPC (see [starter template](https://github.com/trpc/trpc/tree/main/examples/next-minimal-starter)).

Also uses Prisma for database access.

## Requirements
- Docker (version 18+) to manage MySQL database
- NVM to manage Node versions

## Setup

1. Ensure Docker and NVM are installed.
1. Run `nvm use` to source correct Node version as per `.nvmrc`.
1. Create a `.env` file at the project directory root with contents like so:
    ```
    MYSQL_NAME=canvas_db
    MYSQL_ROOT_PASSWORD=123456
    DB_PORT=3306
    PORT=3000
    DATABASE_URL=mysql://root:${MYSQL_ROOT_PASSWORD}@localhost:${DB_PORT}/${MYSQL_NAME}
    ```
1. Run containerized MySQL instance via:
    ```bash
    docker run --name=mysql1 -p 3306:3306 --env-file .env -d mysql
    ```
    and optionally ensure it's running and accessible via:
    ```bash
    docker exec -it mysql1 mysql -u root -p
    ```
1. Then install dependencies, sync database with schema, and run app:
    ```bash
    npm i
    npx prisma db push
    npm run dev
    ```
