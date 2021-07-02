FROM buildkite/puppeteer:latest

RUN apt-get update && apt-get install -y fonts-open-sans && rm -rf /var/lib/apt/lists/*

RUN mkdir /app
WORKDIR /app

COPY package*.json jest.config.js tsconfig.json svgTransform.js ./
RUN npm ci
COPY . .
