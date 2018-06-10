## To run:
## docker build -t sejalsuits-api .
## docker run sejalsuits-api

FROM node:alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Bundle app source
COPY . /usr/src/app
RUN npm install
### RUN npm run start
EXPOSE 4000
CMD [ "npm", "start" ]
