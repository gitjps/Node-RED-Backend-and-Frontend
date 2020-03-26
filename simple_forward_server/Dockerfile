FROM node:8.7.0-alpine

# Create app directory
RUN mkdir -p /simple_forward_server
WORKDIR /simple_forward_server

COPY package.json /simple_forward_server

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /simple_forward_server

EXPOSE 3000
CMD [ "npm", "start" ]