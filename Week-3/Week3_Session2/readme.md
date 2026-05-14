# Week 3 Session 2: Backend with MongoDB & Auth

## Overview
Express.js backend with MongoDB (Mongoose), JWT authentication, and protected routes.

## Features
- MongoDB integration with Mongoose
- User authentication with JWT
- Password hashing with bcrypt
- Protected API routes
- Cookie-based sessions
- Data validation and error handling

## Installation
```bash
npm install
```

Create `.env` file:
```
PORT=4000
DB_URL=mongodb://localhost:27017/your-db
SECRET_KEY=your-secret-key
```

## Usage
```bash
npm start
```
Server runs on port 4000.

## API Endpoints

### Users (`/user-api`)
- `POST /users` - Register user
- `POST /auth` - Login (returns JWT)
- `GET /users` - Get all users (protected)
- `GET /users/:id` - Get user by ID (protected)

### Products (`/product-api`)
- `POST /product` - Create product
- `GET /product` - Get all products
- `GET /product/:id` - Get product by ID
- `PUT /product/:id` - Update product
- `DELETE /product/:id` - Delete product

## Concepts Covered
- Mongoose ODM and schemas
- JWT authentication
- Password hashing
- Protected routes middleware
- Cookie handling
- Error handling

## Testing
Use `req.http` file to test endpoints. Include cookies for protected routes.

