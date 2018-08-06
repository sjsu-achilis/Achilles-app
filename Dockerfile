FROM node:9.6.1

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
RUN npm install react-scripts@1.1.1 -g
COPY . /app
RUN npm rebuild node-sass
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
