FROM node:14-slim

# Bundle app source
COPY . /usr/src/app
RUN cd /usr/src/app && npm install --save-prod && npm run build && npm install -g serve
CMD cd /usr/src/app && serve -s build
