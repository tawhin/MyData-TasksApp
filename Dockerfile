FROM node:16-alpine3.11
LABEL MAINTAINER=trevwhin@gmail.com

#Copy the source code in to the /src container
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./

CMD ["npm", "start"]