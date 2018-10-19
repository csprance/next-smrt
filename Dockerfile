FROM node:10
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD npm run start
