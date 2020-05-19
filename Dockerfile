FROM node:14-slim@sha256:54e669f5d86e0f10324029074f7379179a628c0b2b97130f05c0f377742daadb

# Bundle app source
COPY . /usr/src/app
RUN cd /usr/src/app && npm install --save-prod && npm run build && npm install -g serve
CMD cd /usr/src/app && serve -s build
