FROM node:alpine
# Create app directory
RUN mkdir -p /next
WORKDIR /next
# Install app dependencies
COPY package.json .
RUN npm install
# Bundle app source
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
