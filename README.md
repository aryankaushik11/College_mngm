# Kollege

A College Based Data Management System.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1.  **Backend Setup**:
    - Navigate to `kollege_api`: `cd kollege_api`
    - Create a `.env` file with your `DATABASE_URI`
    - Install dependencies: `npm install`
    - Start server: `npm start` (Runs on port 3500)

2.  **Frontend Setup**:
    - Navigate to root directory: `cd ..`
    - Install dependencies: `npm install`
    - Start app: `npm start` (Runs on port 3000)

## Deployment

The project is configured for Vercel.
- **Frontend**: Deployed to root.
- **Backend**: Deployed to `/api/*`.

**Important:** Add `DATABASE_URI` to your Vercel Project Settings > Environment Variables.
