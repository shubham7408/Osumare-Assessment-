# Osumare-Assessment-
Assessment 

# Task Management API

A RESTful API built with Node.js and Express.js for managing tasks. This API provides endpoints for creating, reading, updating, and deleting tasks with features like pagination, sorting, and filtering.
## Features

- CRUD operations for tasks
- In-memory data storage
- Input validation
- Error handling
- Pagination
- Sorting and filtering
- Proper response formatting
- Modular architecture
- Environment configuration

## Project Structure

task-api/
│
├── src/
│   ├── controllers/      # Request handlers
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration files
│   └── models/          # Data models
│
├── server.js            # Application entry point
├── package.json
├── .env                 # Environment variables
└── README.md

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/task-api.git

2. Install dependencies:
npm install

3. Create a `.env` file in the root directory:
PORT=3000
NODE_ENV=development

4. Start the server:
# Development mode
npm run dev

# Production mode
npm start

## Configuration

The application can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Port number for the server | 3000 |
| NODE_ENV | Environment mode | development |

## API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a specific task |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## API Documentation

### Get All Tasks

GET /api/tasks

Query Parameters:
- `page` (optional): Page number for pagination (default: 1)
- `limit` (optional): Number of items per page (default: 10)
- `status` (optional): Filter tasks by status
- `sortBy` (optional): Sort tasks by field name

Response:
```json
{
    "success": true,
    "data": {
        "tasks": [
            {
                "id": 1,
                "title": "Task 1",
                "description": "Description 1",
                "status": "pending",
                "createdAt": "2024-03-15T10:00:00.000Z"
            }
        ],
        "total": 1,
        "page": 1,
        "totalPages": 1
    }
}
```

### Get Task by ID

GET /api/tasks/:id

Response:
{
    "success": true,
    "data": {
        "id": 1,
        "title": "Task 1",
        "description": "Description 1",
        "status": "pending",
        "createdAt": "2024-03-15T10:00:00.000Z"
    }
}

### Create Task

POST /api/tasks

Request Body:
{
    "title": "New Task",
    "description": "Task Description"
}

Response:
{
    "success": true,
    "data": {
        "id": 1,
        "title": "New Task",
        "description": "Task Description",
        "status": "pending",
        "createdAt": "2024-03-15T10:00:00.000Z"
    }
}

### Update Task


PUT /api/tasks/:id

Request Body:
{
    "title": "Updated Task",
    "description": "Updated Description",
    "status": "completed"
}

Response:
{
    "success": true,
    "data": {
        "id": 1,
        "title": "Updated Task",
        "description": "Updated Description",
        "status": "completed",
        "updatedAt": "2024-03-15T11:00:00.000Z"
    }
}

### Delete Task

DELETE /api/tasks/:id

Response:
{
    "success": true,
    "data": null
}

## Error Handling

The API uses standard HTTP response codes:

- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error Response Format:

{
    "success": false,
    "error": "Error message"
}
## Testing

You can test the API using tools like Postman or curl:

1. Create a task:
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Test Task","description":"Test Description"}'

2. Get all tasks:
curl http://localhost:3000/api/tasks

3. Get tasks with pagination and filtering:
curl http://localhost:3000/api/tasks?page=1&limit=10&status=pending&sortBy=title

4. Update a task:
curl -X PUT http://localhost:3000/api/tasks/1 \
-H "Content-Type: application/json" \
-d '{"title":"Updated Task","description":"Updated Description"}'

5. Delete a task:
curl -X DELETE http://localhost:3000/api/tasks/1