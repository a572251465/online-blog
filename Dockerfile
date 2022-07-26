FROM nginx:1.14.1-alpine
COPY blogs /usr/share/nginx/blogs
WORKDIR /usr/share/nginx/blogs
