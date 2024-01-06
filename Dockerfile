# Use a base image with Node.js
FROM node:latest

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.json to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn add serve
RUN yarn install

# Copy the entire app directory to the working directory
COPY . .

EXPOSE 9001

# Build the React app (replace 'npm run build' with your build command)
RUN yarn build

EXPOSE 9001

# Health Check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD curl -f http://localhost:9001 || exit 1

# Set the command to start the app
CMD ["yarn", "dev"]
