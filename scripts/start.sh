#!/bin/bash
cd /home/ec2-user/app || exit

echo "Installing dependencies..."
npm install

echo "Stopping old PM2 processes..."
pm2 delete all || true

echo "Starting new app..."
pm2 start server.js --name todo-app
