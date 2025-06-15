#!/bin/bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose git

# Replace with your GitHub repo
git clone https://github.com/YOUR_USERNAME/skystrike-prod.git
cd skystrike-prod

sudo docker-compose build
sudo docker-compose up -d
