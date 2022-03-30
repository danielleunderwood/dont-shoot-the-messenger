FROM node:16.13.0
ENV NODE_ENV=production

COPY ./server/package*.json ./

RUN npm install 

COPY ./server .

CMD ["npm", "start"]
