# node LTS
FROM node:18-alpine

WORKDIR /usr/src/app

# copy package files first for caching
COPY app/package.json ./ 
# if package-lock.json exists, copy it too
COPY app/package-lock.json* ./

RUN npm install --production

# copy app source
COPY app/ ./

EXPOSE 3000

CMD ["node", "index.js"]
