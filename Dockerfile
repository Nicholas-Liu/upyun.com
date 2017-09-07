FROM node:6

WORKDIR /src
ADD package.json /src/package.json
ADD yarn.lock /src/yarn.lock
# https://github.com/yarnpkg/yarn/issues/1538#issuecomment-280461380
RUN echo '115.231.100.92 r.widget-inc.com' >> /etc/hosts && TMPDIR=/tmp yarn install
ADD . /src
RUN yarn build
RUN yarn run prerender

EXPOSE 8000
CMD NODE_ENV=production ./node_modules/.bin/pm2 start server.js -i 2 --no-daemon
