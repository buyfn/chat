FROM node

ENV PROJECT_ROOT /usr/src/app
WORKDIR $PROJECT_ROOT

COPY package* ./
RUN npm i
COPY . .

RUN npm run build
CMD ["node", "dist/index.js"]
