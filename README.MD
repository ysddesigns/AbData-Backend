# MERN Backend

A simple backend for authentication using Node.js, Express, and MongoDB.

## Setup

1. Install dependencies: `npm install`
2. Create a `.env` file with `MONGO_URI` and `JWT_SECRET`
3. Start the server: `npm run dev`

## API Routes

- `POST /api/auth/register` - Register a user
- `POST /api/auth/login` - Login a user
- `GET /api/users/profile` - Get user profile (Protected)
