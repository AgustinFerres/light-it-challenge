# Running the Application on Linux

Follow these steps to set up and run the application on Linux:

## Prerequisites

Make sure you have the following installed:
- Docker and Docker Compose
- Node.js >= 18.18

## Setup Instructions

1. **Start the Docker containers:**
   ```bash
   docker-compose up -d
   ```

2. **Run the setup script:**
   ```bash
   ./setup.sh
   ```

3. **Run the development server:**
   ```bash
   composer run dev
   ```

The application should now be running and accessible according to your project's configuration.

## Troubleshooting

- Ensure the `setup.sh` script has executable permissions: `chmod +x setup.sh`
- Verify Docker and Docker Compose are properly installed and running
- Check that all required ports are available and not in use by other services
