# Blog App Backend

Node.js + Express API backend for blog application.

## Setup

1. Install dependencies: `npm install`
2. Create `.env` file with PORT, DATABASE_URL, JWT_SECRET
3. Start server: `npm start`

## Models

- **User**: firstName, lastName, email, password, role, profileImageUrl, isUserActive
- **Article**: author, title, category, content, comments, isArticleActive

## APIs

- **AdminAPI.js** - Admin operations
- **AuthorAPI.js** - Article CRUD operations
- **UserAPI.js** - User registration & login
- **CommanAPI.js** - Public endpoints

## Middleware

- `verifyToken.js` - JWT authentication

## Tech Stack

- Node.js, Express, MongoDB, JWT
