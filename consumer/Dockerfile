FROM node:16.13.0
ENV NODE_ENV=docker

COPY ./consumer .

RUN npm --production=false install 
RUN npm run build 

CMD ["npm", "run", "docker"]
