FROM node:6

WORKDIR /src
ADD package.json /src/package.json
ADD yarn.lock /src/yarn.lock
# https://github.com/yarnpkg/yarn/issues/1538#issuecomment-280461380
RUN TMPDIR=/tmp yarn install
ADD . /src
RUN yarn build

EXPOSE 8000
CMD NODE_ENV=production ./node_modules/bin/pm2 start server.js -i 2 --no-daemon
