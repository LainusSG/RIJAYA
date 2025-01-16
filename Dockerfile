### STAGE 1: Build ###
FROM --platform=linux/amd64 node:latest AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --configuration=production
### STAGE 2: Run ###
FROM --platform=linux/amd64 nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/racsapp/browser /usr/share/nginx/html