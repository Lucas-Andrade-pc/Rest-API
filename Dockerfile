FROM node

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g nodemon
CMD ["npm", "run", "start"]
