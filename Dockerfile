FROM nginx

RUN npm install http-server -g \
    & http-server dist

EXPOSE 8080
