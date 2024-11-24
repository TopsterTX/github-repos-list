FROM node:22.4.1 AS builder

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . ./
RUN yarn build

FROM nginx:latest
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

CMD ["/bin/bash", "-c", "nginx -g 'daemon off;'"]