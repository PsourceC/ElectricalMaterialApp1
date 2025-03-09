# Use an official lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for proper versioning
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local directory contents to the container
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]

