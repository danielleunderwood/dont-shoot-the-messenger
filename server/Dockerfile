FROM node:16.13.0

COPY ./server .

RUN npm --production=false install 
RUN npm run build 

CMD ["npm", "run", "docker"]
