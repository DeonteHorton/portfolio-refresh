FROM node:18

COPY . /src

WORKDIR /src

RUN npm install && npm run build

CMD node .output/server/index.mjs