FROM node:18-alpine

WORKDIR /test_dep

COPY ./package.json .

RUN npm i

COPY . .

CMD [ "npm","start" ]