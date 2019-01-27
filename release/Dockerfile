FROM        node:latest
MAINTAINER  Mike Polinowski
ENV         NODE_ENV=production
ENV         PORT=7777
COPY        ./deploy /app
WORKDIR     /app
RUN         npm install
EXPOSE      7777
ENTRYPOINT  ["npm", "start"]