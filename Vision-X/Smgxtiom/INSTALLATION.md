# Smgxtiom Installation Guide

## Quick Start

### 1. **Backend Setup**

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file and configure
cp .env.example .env

# Start MongoDB (use local or cloud instance)
# Update MONGODB_URI in .env

# Run development server
npm run dev

# Backend will be available at http://localhost:5000
```

### 2. **Frontend Setup**

```bash
# Navigate to frontend folder (in another terminal)
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start

# Frontend will be available at http://localhost:3000
```

---

## ✅ Verification

- Backend health check: `http://localhost:5000/api/health`
- Try login with demo credentials (see README.md)
- You should see the home page with course listings

---

## 🔧 Common Issues

### MongoDB Connection Error
- Make sure MongoDB is running locally or update MONGODB_URI with your cloud instance

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### CORS Error
- Check CORS_ORIGIN in backend .env matches frontend URL
- Default: `http://localhost:3000`

---

## 📦 What's Included

✅ Complete UI/UX with 3 role-based dashboards
✅ Authentication system (JWT)
✅ Database models for all features
✅ API routes and controllers
✅ Responsive design (mobile + desktop)
✅ Modern animations (Framer Motion)
✅ Charts and analytics (Recharts)
✅ File uploads support
✅ Dark mode support

---

## 🎯 Next Steps

1. Configure database (MongoDB)
2. Test authentication with demo accounts
3. Explore student/teacher/admin dashboards
4. Check API documentation in backend routes
5. Customize branding and colors in tailwind.config.js
6. Deploy to your preferred hosting

---

Happy coding! 🚀
