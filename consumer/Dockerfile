FROM node:16.13.0
ENV NODE_ENV=production

COPY ./consumer/package*.json ./

RUN npm install 

COPY ./consumer .

CMD ["npm", "run", "docker"]
