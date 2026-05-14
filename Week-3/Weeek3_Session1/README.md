# Week 3 Session 1: Backend Basics

## Overview
Basic Express.js backend with REST APIs for users and products, using in-memory storage.

## Features
- Express server setup
- Custom middleware
- RESTful APIs (CRUD operations)
- In-memory data storage
- MongoDB basics documentation

## Installation
```bash
npm install
```

## Usage
```bash
node server.js
```
Server runs on port 5353.

## API Endpoints

### Users (`/users-api`)
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create user
- `PUT /users` - Update user
- `DELETE /users/:id` - Delete user

### Products (`/products-api`)
- `GET /products` - Get all products
- `GET /products/:Brand` - Get product by brand
- `POST /products` - Create product
- `PUT /products` - Update product
- `DELETE /products/:id` - Delete product

## Concepts Covered
- Express server and middleware
- REST API design
- Route parameters
- Request/response handling
- MongoDB basic operations

## Testing
Use `test.http` file to test all endpoints.</content>
<parameter name="filePath">e:\ATP_24EG107B53\Week-3\Weeek3_Session1\README.md