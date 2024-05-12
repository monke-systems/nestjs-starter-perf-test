FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm i --no-audit
COPY . .
RUN npm run build

##################################

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm i --no-audit --omit=dev

COPY --from=build /app/lib .

CMD ["node", "index.js"]
