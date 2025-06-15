#!/bin/bash

# === Set vars ===
DOMAIN="YOUR_DOMAIN_HERE"
EMAIL="your-email@example.com"

# === Update system ===
sudo apt update && sudo apt upgrade -y

# === Install Docker & Certbot ===
sudo apt install -y docker.io docker-compose nginx certbot python3-certbot-nginx

# === Create Certbot Webroot ===
sudo mkdir -p /var/www/certbot

# === Get SSL Cert ===
sudo certbot certonly --webroot -w /var/www/certbot -d $DOMAIN --email $EMAIL --agree-tos --non-interactive

# === Copy NGINX Config ===
sudo cp ./deploy/nginx.conf /etc/nginx/sites-available/skystrike
sudo ln -s /etc/nginx/sites-available/skystrike /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# === Start App ===
docker-compose down
docker-compose up -d --build