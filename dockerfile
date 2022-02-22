FROM node:lts-alpine

WORKDIR /app


COPY package.json ./


COPY client/package.json client/
RUN npm run install-client --only=production           

COPY client/ client/
RUN npm run build-client

COPY server/package.json server/
RUN npm run install-server --only:production

COPY server/ server/
USER node
CMD ["npm", "run", "server-start"]

EXPOSE 8000