ARG NODE_VERSION=20.4.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

ADD *.json .

RUN npm ci

ADD . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
