FROM node:latest

WORKDIR /nest
COPY . /nest
RUN yarn install && yarn build
CMD [ "yarn", "start:prod" ]

