FROM node

RUN npm install http-server -g 
CMD ["http-server", "dist"]
EXPOSE 8080
