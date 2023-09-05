FROM node:18.16.0 as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update -yqq \
    && apt-get -yqq install nasm

COPY . .

RUN npm install

ENV NODE_ENV=production

RUN npm run build

EXPOSE 3010

CMD [ "npm", "run", "start" ]

