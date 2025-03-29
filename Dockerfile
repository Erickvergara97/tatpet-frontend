# Use node image as base image
FROM node:22.13.1-alpine
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install
# Copy all files
COPY . .
# Expose port 3000
EXPOSE 3000
# Start the application
CMD ["npm", "run", "start"]

