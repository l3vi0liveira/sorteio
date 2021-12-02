FROM node:12.2.0-alpine as react_build 
#also say 
WORKDIR /app
#copy the react app to the container
COPY . /app/ 
COPY .sequelizerc /app/

#prepare the container for building react 
RUN npm install --silent
RUN npm run build 

EXPOSE 3333
CMD [ "npm", "start" ]