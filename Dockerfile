FROM node:6.9.3
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN export NODE_ENV=production
EXPOSE 6006
CMD [ "npm", "run", "storybook" ]
