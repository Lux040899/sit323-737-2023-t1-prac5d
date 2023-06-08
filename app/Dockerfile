FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache curl \
    && npm install \
    && npm cache clean --force

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]