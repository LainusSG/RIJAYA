### STAGE 1: Build ###
FROM --platform=linux/amd64 node:latest AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --configuration=production
### STAGE 2: Run ###
FROM nginx:1.25.3-alpine-slim

# Copy the NGINX configuration file to the appropriate location
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built Angular app from the 'calipharma' image to the NGINX HTML directory
COPY --from=build /app/dist/racsapp/browser /usr/share/nginx/html

# Specify the command to run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]