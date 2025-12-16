# E-Commerce REST API

A TypeScript-based RESTful API for e-commerce applications built with Express.js and MongoDB. This API provides endpoints for managing products and categories with full CRUD operations.

## Features

- **Product Management**: Create, read, update, and delete products
- **Category Management**: Create, read, update, and delete categories
- **Product-Category Relationships**: Products are linked to categories
- **Validation**: Comprehensive input validation and error handling
- **TypeScript**: Full TypeScript support with strict type checking
- **MongoDB Integration**: Uses Mongoose ODM for database operations
- **RESTful Design**: Follows REST API conventions

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Middleware**: CORS, Morgan (logging), Express JSON parser
- **Development**: ts-node-dev for hot reloading

## Project Structure

```
src/
├── app.ts              # Express app configuration and middleware
├── index.ts           # Server entry point
├── config/
│   └── db.ts          # MongoDB connection setup
├── models/
│   ├── Product.ts     # Product schema and model
│   └── category.ts    # Category schema and model
├── controllers/
│   ├── productController.ts    # Product business logic
│   └── categoryController.ts   # Category business logic
└── routes/
    ├── productRouter.ts       # Product routes
    └── categoriesRouter.ts    # Category routes
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joejohn98/ecom-rest-api.git
   cd ecom-rest-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   DATABASE_URI=mongodb://localhost:27017/ecommerce_db
   PORT=4000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server

## API Endpoints

### Products

| Method | Endpoint                     | Description                 | Request Body                                                                                                   |
| ------ | ---------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/products`              | Get all products            | -                                                                                                              |
| GET    | `/api/products/product/:id`  | Get single product by ID    | -                                                                                                              |
| GET    | `/api/products/category/:id` | Get products by category ID | -                                                                                                              |
| POST   | `/api/products`              | Create a new product        | `{ "title": "Product Name", "description": "Product description", "price": 99.99, "category": "category_id" }` |
| PUT    | `/api/products/:id`          | Update a product            | `{ "title": "Updated Name", "price": 149.99 }`                                                                 |
| DELETE | `/api/products/:id`          | Delete a product            | -                                                                                                              |

### Categories

| Method | Endpoint              | Description           | Request Body                  |
| ------ | --------------------- | --------------------- | ----------------------------- |
| GET    | `/api/categories`     | Get all categories    | -                             |
| POST   | `/api/categories`     | Create a new category | `{ "name": "Category Name" }` |
| PUT    | `/api/categories/:id` | Update a category     | `{ "name": "Updated Name" }`  |
| DELETE | `/api/categories/:id` | Delete a category     | -                             |

## Data Models

### Product Model

```typescript
{
  title: String,        // Required, 3-100 characters
  description: String,  // Required, 20-2000 characters
  price: Number,        // Required
  category: ObjectId,   // Required, references Category
  quantity: Number,     // Default: 0
  active: Boolean,      // Default: true
  createdAt: Date,      // Auto-generated
  updatedAt: Date       // Auto-generated
}
```

### Category Model

```typescript
{
  name: String,         // Required, unique, 3-50 characters
  createdAt: Date,      // Auto-generated
  updatedAt: Date       // Auto-generated
}
```

## Error Handling

The API returns consistent error responses:

```json
{
  "status": "fail",
  "message": "Error description"
}
```

Common HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## Validation

### Product Validation

- Title: 3-100 characters, required
- Description: 20-2000 characters, required
- Price: Number, required
- Category: Valid MongoDB ObjectId, required

### Category Validation

- Name: 3-50 characters, required, unique

## Database Configuration

The application uses Mongoose to connect to MongoDB. Update the `DATABASE_URI` in your `.env` file to point to your MongoDB instance.

Example connection string for MongoDB Atlas:

```
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce_db
```

## Development

1. The project uses TypeScript with strict type checking enabled
2. Source files are in the `src/` directory
3. Compiled JavaScript files are output to `dist/`
4. Development server automatically restarts on file changes

## Dependencies

### Production

- `express`: Web framework
- `mongoose`: MongoDB ODM
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variable management
- `morgan`: HTTP request logging

### Development

- `typescript`: TypeScript compiler
- `ts-node-dev`: Development server with hot reload
- `@types/express`: TypeScript definitions for Express
- `@types/mongoose`: TypeScript definitions for Mongoose
- `@types/node`: TypeScript definitions for Node.js

## License

ISC

## Author

Joe John
