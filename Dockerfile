# Use a base image with Node.js
FROM node:latest

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn add serve
RUN yarn install

# Copy the entire app directory to the working directory
COPY . .

# Build the React app (replace 'npm run build' with your build command)
RUN yarn build

# Set the command to start the app
CMD ["yarn", "start"]
