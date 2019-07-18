## To run:
## docker build -t project-name .
## docker run project-name

FROM node:alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Bundle app source
COPY . /usr/src/app
RUN npm install
RUN npm run build
### RUN npm run start
EXPOSE 4000
CMD [ "npm", "start" ]