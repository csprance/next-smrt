FROM node:lts

# install the application
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .

# Set up or Environment from the docker-compose file
ARG API_URL
ARG NODE_ENV
ARG API_KEY
ENV API_URL $API_URL
ENV NODE_ENV $NODE_ENV
ENV API_KEY $API_KEY

# 3000 is the port we need for nextjs
EXPOSE 3000

# build and start
RUN yarn build

# start
CMD npm run start
