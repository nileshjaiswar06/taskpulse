# TaskPulse API Documentation

This document provides detailed information about the TaskPulse API endpoints, request/response formats, and authentication mechanisms.

## 📌 Base URL

All API endpoints are relative to the base URL of your deployment:

- Development: `http://localhost:3001/api`
- Production: `https://api.taskpulse.com/api`

## 🔐 Authentication

Most endpoints require authentication using JWT (JSON Web Tokens). Include the token in the `Authorization` header:

```http
Authorization: Bearer your_jwt_token_here
```

## 📚 API Endpoints

### Authentication

#### Register a New User

```http
POST /auth/register
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe",
  "role": "recruiter"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "recruiter"
  }
}
```

#### Login

```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "recruiter"
  }
}
```

### Users

#### Get Current User

```http
GET /users/me
```

**Response:**
```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "user@example.com",
  "role": "recruiter",
  "createdAt": "2023-07-29T10:00:00Z"
}
```

### Interviews

#### Schedule an Interview

```http
POST /interviews
```

**Request Body:**
```json
{
  "candidateName": "Jane Smith",
  "candidateEmail": "jane@example.com",
  "position": "Senior Developer",
  "scheduledAt": "2023-08-15T14:00:00Z",
  "duration": 60,
  "interviewers": ["user_id_1", "user_id_2"]
}
```

**Response:**
```json
{
  "id": "interview_id",
  "candidateName": "Jane Smith",
  "candidateEmail": "jane@example.com",
  "position": "Senior Developer",
  "scheduledAt": "2023-08-15T14:00:00Z",
  "duration": 60,
  "status": "scheduled",
  "interviewers": [
    {
      "id": "user_id_1",
      "name": "John Doe"
    },
    {
      "id": "user_id_2",
      "name": "Alice Johnson"
    }
  ],
  "createdAt": "2023-07-29T10:00:00Z"
}
```

## 📝 Error Handling

Errors follow this format:

```json
{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": {
      "field1": "Validation error details"
    }
  }
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error - Something went wrong |

## 📡 WebSocket API

### Endpoint

- Development: `ws://localhost:3001`
- Production: `wss://api.yourdomain.com`

### Events

#### Join Interview Room

```json
{
  "event": "join",
  "data": {
    "interviewId": "interview_id",
    "userId": "user_id"
  }
}
```

#### Code Execution

```json
{
  "event": "code_execute",
  "data": {
    "interviewId": "interview_id",
    "language": "javascript",
    "code": "console.log('Hello, World!');"
  }
}
```

## 📈 Rate Limiting

- 100 requests per minute per IP address
- 1000 requests per minute with valid authentication

## 🔒 Security

- All API endpoints use HTTPS in production
- Sensitive data is encrypted at rest
- Passwords are hashed using bcrypt
- JWT tokens expire after 24 hours
