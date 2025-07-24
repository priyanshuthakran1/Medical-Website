# Step 1: Build React app
FROM node:18 as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files (src/, public/, etc.)
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the build with Nginx
FROM nginx:alpine

# Clean default nginx HTML folder
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for browser access
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
