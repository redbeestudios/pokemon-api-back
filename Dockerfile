FROM node:16:14.0
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . .
EXPOSE 5000
CMD ["yarn", "start"]