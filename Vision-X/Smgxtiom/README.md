# Smgxtiom - IT Education Platform

A modern, responsive IT Education Platform with separate interfaces for students, teachers, and administrators. Built with React, Node.js, Express, and MongoDB.

---

## 🚀 Features

### 🎓 Student Features
- Dashboard with learning progress
- Browse and enroll in courses
- Video course player with playlist
- Check timetable and holidays
- Track attendance and exam results
- Submit assignments and homework
- View test/quiz scores
- Profile management

### 👨‍🏫 Teacher Features
- Start and manage live classroom streams
- Upload course videos and materials
- Manage student data
- Create and upload exams
- View student attendance reports
- Create tests and quizzes
- Manage timetable
- Upload homework and assignments

### 👨‍💼 Admin Features
- Complete user management (add/remove students and teachers)
- Course management and analytics
- Manage classroom cameras
- Security settings and API key management
- View system analytics and reports
- Monitor system health

### 🌟 Extra Features
- JWT-based authentication
- Role-based access control
- Responsive mobile design
- Modern glassmorphism UI
- Smooth animations
- Dark mode support
- Live classroom streaming
- Real-time notifications
- Course search functionality

---

## 📋 Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router** - Client-side routing
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **Zustand** - State management

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Multer** - File uploads
- **Socket.io** - Real-time communication

---

## 📁 Project Structure

```
Smgxtiom/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Public pages (Home, Login, Register)
│   │   ├── dashboards/     # Role-based dashboards
│   │   ├── services/       # API services
│   │   ├── contexts/       # Auth store and state management
│   │   ├── utils/          # Utility functions
│   │   ├── assets/         # Static assets
│   │   ├── App.jsx         # Main app component
│   │   └── index.jsx       # Entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── index.html
│
├── backend/
│   ├── src/
│   │   ├── models/         # MongoDB schemas
│   │   ├── controllers/    # Business logic
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth, error handling
│   │   ├── utils/          # Helper functions
│   │   └── config/         # Configuration files
│   ├── server.js           # Express app entry point
│   └── package.json
│
└── README.md
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smgxtiom
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

5. Start the server:
```bash
npm run dev
```

Backend runs on: **http://localhost:5000**

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm start
```

Frontend runs on: **http://localhost:3000**

---

## 🔑 Demo Credentials

### Student Login
- **Email:** student@example.com
- **Password:** password123

### Teacher Login
- **Email:** teacher@example.com
- **Password:** password123

### Admin Login
- **Email:** admin@example.com
- **Password:** password123

---

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create course (Teacher/Admin)
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course
- `POST /api/courses/enroll` - Enroll in course

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user details
- `PUT /api/users/:id` - Update user (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)
- `GET /api/users/profile` - Get own profile
- `PUT /api/users/profile` - Update own profile

### Attendance
- `POST /api/attendance` - Record attendance
- `GET /api/attendance` - Get attendance records
- `GET /api/attendance/my-attendance` - Get own attendance

### Other Endpoints
- `/api/enrollments` - Enrollment management
- `/api/announcements` - Announcements
- `/api/timetable` - Timetable
- `/api/holidays` - Holidays
- `/api/exams` - Exams and tests

---

## 🎨 UI Features

### Design Elements
- **Glassmorphism** - Modern frosted glass effect
- **Gradient backgrounds** - Primary to secondary gradients
- **Smooth animations** - Framer Motion transitions
- **Dark mode** - Full dark theme support
- **Responsive layout** - Mobile-first design approach
- **Custom scrollbars** - Styled scrollbars

### Components
- Sidebar navigation with collapse
- Dashboard with stats cards
- Course cards with progress
- Video player with controls
- Charts and analytics
- Forms with validation
- Modal dialogs
- Toast notifications

---

## 🔐 Security Features

- JWT token-based authentication
- Role-based access control (RBAC)
- Password hashing with Bcryptjs
- Protected API endpoints
- CORS configuration
- Helmet.js for security headers
- Input validation
- Error handling middleware

---

## 📈 Analytics & Dashboards

### Admin Analytics
- Daily active users
- Course popularity
- User distribution by role
- System health monitoring
- Activity logging
- Suspicious activity tracking

### Teacher Dashboard
- Student progress tracking
- Course statistics
- Attendance reports
- File upload management
- Class scheduling

### Student Dashboard
- Learning progress
- Course completion rate
- Attendance record
- Exam results
- Assignment tracking

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend (Heroku/Railway)
```bash
# Update .env for production
npm start
```

---

## 📖 Usage Guide

### For Students
1. Register as a student
2. Browse available courses on home page
3. Enroll in courses you're interested in
4. Access course materials and videos
5. Track your progress and attendance
6. Submit assignments and take exams
7. View results and certificates

### For Teachers
1. Register as a teacher
2. Create courses with modules and videos
3. Start live classes with camera stream
4. Upload course materials
5. Create exams and assignments
6. Track student progress
7. Manage attendance records

### For Admins
1. Manage all users
2. Monitor system analytics
3. Manage cameras and classrooms
4. Configure security settings
5. View activity logs
6. Manage courses

---

## 🐛 Troubleshooting

### Connection Issues
- Ensure MongoDB is running
- Check CORS_ORIGIN in backend .env
- Verify frontend API_URL in .env

### Authentication Issues
- Clear browser cache and cookies
- Check JWT_SECRET in backend .env
- Verify token expiration time

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 3000 (frontend)
npx kill-port 3000
```

---

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smgxtiom
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📚 Documentation

For complete API documentation, check the backend route files in `/backend/src/routes/`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📧 Support

For issues, questions, or suggestions, please contact us or open an issue on GitHub.

---

**Made with ❤️ by Smgxtiom Team**

Happy Learning! 🎓
