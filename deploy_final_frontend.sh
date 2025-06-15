#!/bin/bash

set -e

echo "?? Step 1: Extracting deployment bundle..."
unzip -o skystrike_final_with_deployment.zip -d skystrike_frontend_final

cd skystrike_frontend_final

echo "?? Step 2: Installing frontend dependencies..."
npm install

echo "?? Step 3: Building production frontend..."
npm run build

echo "?? Step 4: Building Docker image..."
docker build -t skystrike-ui .

echo "?? Step 5: Running container on port 8080..."
docker rm -f skystrike-ui || true
docker run -d --name skystrike-ui -p 8080:80 skystrike-ui

echo "? Deployment complete. Visit http://<your-server-ip>:8080"
