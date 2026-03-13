# API Documentation - Smgxtiom

## Base URL
`http://localhost:5000/api`

## Authentication
All protected endpoints require Authorization header:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📌 Authentication Endpoints

### Register User
```
POST /auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student" | "teacher" | "admin"
}

Response: {
  "success": true,
  "data": { user object },
  "token": "JWT_TOKEN"
}
```

### Login User
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "success": true,
  "data": { user object },
  "token": "JWT_TOKEN"
}
```

### Get Current User
```
GET /auth/me
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": { user object }
}
```

### Logout
```
POST /auth/logout
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 📚 Course Endpoints

### Get All Courses
```
GET /courses?search=react&category=programming&level=beginner

Query Parameters:
  - search: Course title (optional)
  - category: Course category (optional)
  - level: beginner | intermediate | advanced (optional)

Response: {
  "success": true,
  "data": [{ course object }, ...]
}
```

### Get Course by ID
```
GET /courses/:id

Response: {
  "success": true,
  "data": { course object }
}
```

### Create Course (Teacher/Admin)
```
POST /courses
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "title": "React Basics",
  "description": "Learn React from scratch",
  "category": "Web Development",
  "level": "beginner",
  "price": 99,
  "thumbnail": "url",
  "duration": 40
}

Response: {
  "success": true,
  "data": { created course object }
}
```

### Update Course (Teacher/Admin)
```
PUT /courses/:id
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description",
  ...
}

Response: {
  "success": true,
  "data": { updated course object }
}
```

### Delete Course (Teacher/Admin)
```
DELETE /courses/:id
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "message": "Course deleted successfully"
}
```

### Enroll in Course (Student)
```
POST /courses/enroll
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "courseId": "course_id"
}

Response: {
  "success": true,
  "data": { enrollment object }
}
```

---

## 👥 User Endpoints

### Get All Users (Admin)
```
GET /users?role=student&search=john

Query Parameters:
  - role: student | teacher | admin (optional)
  - search: User name (optional)

Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": [{ user object }, ...]
}
```

### Get User by ID (Admin)
```
GET /users/:id
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": { user object }
}
```

### Get Own Profile
```
GET /users/profile
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": { user object }
}
```

### Update Own Profile
```
PUT /users/profile
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "fullName": "New Name",
  "phone": "1234567890",
  "address": "123 Street",
  "bio": "My bio"
}

Response: {
  "success": true,
  "data": { updated user object }
}
```

### Update User (Admin)
```
PUT /users/:id
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "fullName": "New Name",
  "email": "newemail@example.com",
  "role": "teacher",
  "isActive": true
}

Response: {
  "success": true,
  "data": { updated user object }
}
```

### Delete User (Admin)
```
DELETE /users/:id
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "message": "User deleted successfully"
}
```

---

## 📋 Attendance Endpoints

### Record Attendance
```
POST /attendance
Authorization: Bearer <TOKEN> (Teacher/Admin)
Content-Type: application/json

{
  "studentId": "student_id",
  "courseId": "course_id",
  "status": "present" | "absent" | "leave"
}

Response: {
  "success": true,
  "data": { attendance object }
}
```

### Get Attendance Records
```
GET /attendance?studentId=xxx&courseId=yyy
Authorization: Bearer <TOKEN>

Query Parameters:
  - studentId: Filter by student (optional)
  - courseId: Filter by course (optional)

Response: {
  "success": true,
  "data": [{ attendance object }, ...]
}
```

### Get My Attendance (Student)
```
GET /attendance/my-attendance
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": [{ attendance object }, ...]
}
```

---

## 📌 Enrollment Endpoints

### Get My Courses (Student)
```
GET /enrollments/my-courses
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": [{ enrollment object }, ...]
}
```

### Get Course Progress (Student)
```
GET /enrollments/:courseId/progress
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": {
    "progress": 65,
    "videosWatched": 13,
    "totalVideos": 20
  }
}
```

---

## 📢 Announcement Endpoints

### Get Announcements
```
GET /announcements?courseId=xxx

Query Parameters:
  - courseId: Filter by course (optional)

Response: {
  "success": true,
  "data": [{ announcement object }, ...]
}
```

### Create Announcement (Teacher/Admin)
```
POST /announcements
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "title": "Important Notice",
  "content": "Announcement content",
  "courseId": "course_id",
  "target": "students" | "all"
}

Response: {
  "success": true,
  "data": { created announcement object }
}
```

---

## ⏱️ Timetable Endpoints

### Get Timetable
```
GET /timetable?courseId=xxx

Query Parameters:
  - courseId: Filter by course (optional)

Response: {
  "success": true,
  "data": [{ timetable object }, ...]
}
```

### Update Timetable (Teacher)
```
PUT /timetable/:id
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "schedule": [
    {
      "day": "Monday",
      "startTime": "10:00",
      "endTime": "11:00",
      "room": "A101"
    }
  ]
}

Response: {
  "success": true,
  "data": { updated timetable object }
}
```

---

## 🏖️ Holiday Endpoints

### Get Holidays
```
GET /holidays

Response: {
  "success": true,
  "data": [{ holiday object }, ...]
}
```

---

## 📝 Exam Endpoints

### Get All Exams
```
GET /exams?courseId=xxx

Query Parameters:
  - courseId: Filter by course (optional)

Response: {
  "success": true,
  "data": [{ exam object }, ...]
}
```

### Get Exam Results (Student)
```
GET /exams/results
Authorization: Bearer <TOKEN>

Response: {
  "success": true,
  "data": [{ exam result object }, ...]
}
```

### Submit Exam (Student)
```
POST /exams/:id/submit
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "answers": [
    {
      "questionId": "q1",
      "answer": "option_a"
    }
  ]
}

Response: {
  "success": true,
  "data": {
    "submissionId": "sub_123",
    "score": 85,
    "totalMarks": 100,
    "percentage": 85
  }
}
```

---

## Health Check

### Server Health Status
```
GET /api/health

Response: {
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## ⚠️ Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400
}
```

### Common Status Codes
- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## 🔑 Response Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Invalid Request |
| 401 | Not Authenticated |
| 403 | Not Authorized |
| 404 | Not Found |
| 409 | Conflict (e.g., email exists) |
| 500 | Server Error |

---

## Sample cURL Requests

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "password123"
  }'
```

### Get Courses
```bash
curl http://localhost:5000/api/courses
```

### Create Course (with token)
```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "React Basics",
    "description": "Learn React",
    "category": "Web",
    "level": "beginner",
    "price": 50
  }'
```

---

## Version
**Current Version:** 1.0.0

## Last Updated
January 15, 2024
