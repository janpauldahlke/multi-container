##build phase
FROM node:18-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#run phase
FROM nginx
EXPOSE 3000
# client has also an nginx that listens to :3000
# consider ./nginx/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
