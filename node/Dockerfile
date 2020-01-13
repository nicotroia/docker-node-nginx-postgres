FROM mhart/alpine-node:latest as builder

RUN apk update && apk add bash curl postgresql-client

WORKDIR /node

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE ${NODE_PORT}

CMD until pg_isready --username=${PG_USER} --host=${PG_HOST}; do sleep 1; done && \
  node src/bin/www
