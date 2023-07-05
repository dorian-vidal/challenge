FROM node:15.14.0

WORKDIR /app

# Set environment variables
ENV NODE_ENV development
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Bundle app source
# COPY . /usr/src/app
RUN yarn build

# Clear the cache
RUN yarn cache clean

EXPOSE 3000

CMD [ "yarn", "start:dev" ]


