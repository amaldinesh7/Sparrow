# Sparrow-Backend

Creating a [Postgres](https://www.postgresql.org/) database and setting up a [Hapi](https://hapi.dev/) server

## Prerequisites

1. [Node JS](https://nodejs.org/)
2. [Postgres](https://www.postgresql.org/)

## Database

User in postgres is default to 'postgres'

1. Create a new database

```
CREATE DATABASE surveysparrow;
```
2. Assigning a password for user postgres

```
ALTER ROLE postgres WITH PASSWORD 'pass';
```

## Usage

1. To install dependencies:

```
npm install
```

2. To start

```
node server.js
```
