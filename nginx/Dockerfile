FROM nginx:alpine

RUN apk update && apk add bash

ADD . /nginx

WORKDIR /nginx

COPY . ./

EXPOSE ${NGINX_PORT}

CMD nginx -g 'daemon off;'
