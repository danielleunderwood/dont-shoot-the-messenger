FROM node:16.13.0
ENV NODE_ENV=production

COPY ./producer/package*.json ./

RUN npm install 

COPY ./producer .

CMD ["npm", "run", "docker"]
