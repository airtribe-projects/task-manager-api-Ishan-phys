# Task Management API

## Overview

The Task Management API is a simple RESTful API for managing tasks. This API allows users to create, retrieve, update, and delete tasks. The following endpoints are implemented:

- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/****:id**: Retrieve a specific task by its ID.
- **POST /tasks**: Create a new task with the required fields (title, description, completed).
- **PUT /tasks/****:id**: Update an existing task by its ID.
- **DELETE /tasks/****:id**: Delete a task by its ID.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install express
   ```

3. Start the server:

   ```bash
   node app.js
   ```

   By default, the server runs on `http://localhost:3000`.

## API Endpoints

### 1. Retrieve All Tasks

**Endpoint:** `GET /tasks`

**Description:** Fetch all available tasks.

**Example Request:**

```bash
curl -X GET http://localhost:3000/tasks
```

**Response:**

```json
[
    {
        "id": 1,
        "title": "Updated Task",
        "description": "Updated Task Description",
        "completed": true,
        "priority": "high"
    },
    {
        "id": 2,
        "title": "Create a new project",
        "description": "Create a new project using the Express application generator",
        "completed": true
    },
    {
        "id": 3,
        "title": "Install nodemon",
        "description": "Install nodemon as a development dependency",
        "completed": true
    },
    {
        "id": 4,
        "title": "Install Express",
        "description": "Install Express",
        "completed": false
    },
    {
        "id": 5,
        "title": "Install Mongoose",
        "description": "Install Mongoose",
        "completed": false
    },
    {
        "id": 6,
        "title": "Install Morgan",
        "description": "Install Morgan",
        "completed": false
    },
    {
        "id": 7,
        "title": "Install body-parser",
        "description": "Install body-parser",
        "completed": false
    },
    {
        "id": 8,
        "title": "Install cors",
        "description": "Install cors",
        "completed": false
    },
    {
        "id": 9,
        "title": "Install passport",
        "description": "Install passport",
        "completed": false
    },
    {
        "id": 10,
        "title": "Install passport-local",
        "description": "Install passport-local",
        "completed": false
    },
    {
        "id": 11,
        "title": "Install passport-local-mongoose",
        "description": "Install passport-local-mongoose",
        "completed": false
    },
    {
        "id": 12,
        "title": "Install express-session",
        "description": "Install express-session",
        "completed": false
    },
    {
        "id": 13,
        "title": "Install connect-mongo",
        "description": "Install connect-mongo",
        "completed": false
    },
    {
        "id": 14,
        "title": "Install dotenv",
        "description": "Install dotenv",
        "completed": false
    },
    {
        "id": 15,
        "title": "Install jsonwebtoken",
        "description": "Install jsonwebtoken",
        "completed": false
    }
]
```

### 2. Retrieve a Specific Task by ID

**Endpoint:** `GET /tasks/:id`

**Example Request:**

```bash
curl -X GET http://localhost:3000/tasks/1
```

**Response:**

```json
{
    "id": 1,
    "title": "Set up environment",
    "description": "Install Node.js, npm, and git",
    "completed": true
}
```

### 3. Create a New Task

**Endpoint:** `POST /tasks`

**Example Request:**

```bash
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{
    "title": "New Task",
    "description": "New Task Description",
    "completed": false
}'
```

**Response:**

```json
{
    "id": 16,
    "title": "New Task",
    "description": "New Task Description",
    "completed": false,
    "creationDate": "2025-03-05T10:39:46.741Z"
}
```

### 4. Update an Existing Task

**Endpoint:** `PUT /tasks/:id`

**Example Request:**

```bash
curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{
    "title": "Updated Task",
    "description": "Updated Task Description",
    "completed": true
}'
```

**Response:**

```json
{
    "id": 1,
    "title": "Updated Task",
    "description": "Updated Task Description",
    "completed": true
}
```

### 5. Delete a Task

**Endpoint:** `DELETE /tasks/:id`

**Example Request:**

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

**Response:**

```json
{
  "message": "Task deleted successfully"
}
```

## Testing

You can test the API using tools like Postman or cURL. Make sure your server is running before testing the endpoints.

## License

This project is licensed under the MIT License.

