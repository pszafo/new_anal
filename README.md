# Zafo.ai SaaS Analytics Tool

## Overview
Zafo.ai is a SaaS tool designed to help B2B companies track user movement, understand churn risk, analyze feature usage, and gather new feature requests.

## Features
- User movement tracking
- Churn risk analysis
- Feature usage analytics
- New feature request tracking
- AI-enabled plain English search
- Customizable dashboards

## Tech Stack
- **Frontend:** React, Redux, TypeScript
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Analytics:** Python, TensorFlow
- **Deployment:** Render

## Getting Started
### Prerequisites
- Node.js
- Docker
- PostgreSQL

### Installation
1. Clone the repository
   ```sh
   git clone https://github.com/your-username/zafo-analytics-tool.git
   ```
2. Install dependencies for client and server
   ```sh
   cd zafo-analytics-tool/client
   npm install
   cd ../server
   npm install
   ```

### Running the Application
1. Start the backend server
   ```sh
   npm run start:server
   ```
2. Start the frontend application
   ```sh
   cd ../client
   npm run start:client
   ```

### Deployment
The project is configured for deployment on Render. Refer to the `render.yaml` file for more details.
