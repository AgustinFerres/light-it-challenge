#!/bin/bash

set -e

echo "🚀 Starting Laravel Docker Setup..."

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        print_status "Creating .env file from .env.example..."
        cp .env.example .env
    else
        print_error ".env.example file not found. Please create a .env file manually."
        exit 1
    fi
else
    print_status ".env file already exists."
fi

print_status "Installing php dependencies..."
/bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.4)"

print_status "Installing dependencies..."
npm install && npm run build

print_status "Running migrations..."
php artisan migrate

print_status "Setting up storage link..."
php artisan storage:link

print_status "✅ Setup completed successfully!"
echo
echo "To start the application, run:"
echo "  - composer run dev"


