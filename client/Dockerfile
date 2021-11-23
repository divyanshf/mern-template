FROM node:16-alpine

COPY . /usr/src/mern/client

WORKDIR /usr/src/mern/client

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run"]

CMD ["start"]