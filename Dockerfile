FROM node:14-slim

# Bundle app source
COPY ./package.json /usr/src/app/
RUN cd /usr/src/app && npm install
