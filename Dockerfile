FROM node:12.17.0-alpine

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build


FROM node:12.17.0-alpine

WORKDIR /srv

COPY package.json ./
RUN npm install --only=production
COPY --from=0 /usr/build .

EXPOSE 8080
CMD ["npm","start"]