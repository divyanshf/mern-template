FROM node:16-alpine

COPY . /usr/src/mern/server

WORKDIR /usr/src/mern/server

RUN npm install

RUN npm install --save-dev nodemon

EXPOSE 5000

ENTRYPOINT ["npm", "run"]

CMD ["start"]