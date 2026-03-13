# Smgxtiom - Quick Start Guide

Get started with Smgxtiom in 5 minutes! 🚀

---

## ⚡ Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB account (local or cloud)

---

## 🚀 Step-by-Step Setup

### Stage 1: Backend Setup (2 minutes)

```bash
# 1. Navigate to backend
cd Smgxtiom/backend

# 2. Install dependencies
npm install

# 3. Create .env file
copy .env.example .env
# On Mac/Linux: cp .env.example .env

# 4. Edit .env and add your MongoDB URI
# Default values:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/smgxtiom
# JWT_SECRET=your_secret_key_here

# 5. Start backend server
npm run dev

# ✅ Backend running on http://localhost:5000
```

### Stage 2: Frontend Setup (2 minutes)

**Open a new terminal:**

```bash
# 1. Navigate to frontend
cd Smgxtiom/frontend

# 2. Install dependencies
npm install

# 3. Create .env file
copy .env.example .env
# On Mac/Linux: cp .env.example .env

# 4. Frontend will use default API URL:
# VITE_API_URL=http://localhost:5000/api

# 5. Start frontend server
npm start

# ✅ Frontend running on http://localhost:3000
```

---

## 🎯 Test the Application

1. Open browser: `http://localhost:3000`
2. Click on **Login** in top navigation
3. Use demo credentials:

**Student Account:**
- Email: `student@example.com`
- Password: `password123`

**Teacher Account:**
- Email: `teacher@example.com`
- Password: `password123`

**Admin Account:**
- Email: `admin@example.com`
- Password: `password123`

---

## 📱 Explore Features

After login, you'll see the respective dashboard:

### 🎓 Student Dashboard
- View enrolled courses
- Watch course videos
- Check timetable
- Track attendance
- View exam results
- Submit assignments

### 👨‍🏫 Teacher Dashboard
- Start live classes
- Upload course materials
- Manage students
- Record attendance
- Create exams
- View student progress

### 👨‍💼 Admin Dashboard
- Manage users (add/remove)
- Manage courses
- View analytics
- Monitor system health
- Manage cameras
- Security settings

---

## 🔧 Troubleshooting

### Backend won't start?
```bash
# Check if MongoDB is running
# If using local: ensure MongoDB service is running
# If using cloud: check MONGODB_URI in .env

# Check if npm install succeeded
npm install

# Try again
npm run dev
```

### Frontend is blank?
```bash
# Clear browser cache
# Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

# Or clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port already in use?

**Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -i :5000
kill -9 <PID>
```

### CORS Error?
Make sure `.env` in backend has:
```
CORS_ORIGIN=http://localhost:3000
```

---

## 📁 Project Structure (Quick View)

```
Smgxtiom/
├── frontend/          # React app
│   ├── src/
│   │   ├── pages/     # Home, Login, Register
│   │   ├── dashboards/ # Student, Teacher, Admin
│   │   ├── components/ # Navbar, Footer, Sidebar
│   │   └── services/  # API calls
│   └── package.json
│
└── backend/           # Node.js/Express API
    ├── src/
    │   ├── models/    # Database schemas
    │   ├── controllers/ # Business logic
    │   ├── routes/    # API endpoints
    │   └── middleware/ # Auth, errors
    └── server.js
```

---

## ✨ What's Included

✅ 39 React Components  
✅ 11 Database Models  
✅ 30+ Features  
✅ 9 API Route Groups  
✅ 3 Dashboard Types  
✅ Full Authentication  
✅ Mobile Responsive  
✅ Modern UI/UX  
✅ Dark Mode Support  

---

## 📚 Full Documentation

- 📖 [README.md](README.md) - Comprehensive overview
- 🔧 [INSTALLATION.md](INSTALLATION.md) - Detailed setup
- 📊 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Code organization
- 📡 [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - All endpoints

---

## 🚀 Next Steps

1. ✅ **Run locally** - Get it working on your machine
2. 📖 **Read documentation** - Understand the structure
3. 🛠️ **Customize branding** - Change colors/logos
4. 🔌 **Integrate your data** - Connect to your MongoDB
5. 🚀 **Deploy** - Push to production

---

## 📞 Support

- Check the docs first
- Review error messages in console
- Check browser dev tools (F12) for console errors
- Verify .env files are configured correctly

---

## 🎓 Learning Path

1. **Understand Structure** - Check PROJECT_STRUCTURE.md
2. **Test APIs** - Use Postman or cURL
3. **Modify Components** - Edit React files
4. **Add Features** - Follow existing patterns
5. **Deploy** - Use Vercel (frontend) + Heroku (backend)

---

## 💡 Pro Tips

- Use Postman to test API endpoints before frontend integration
- Check browser console (F12) for client-side errors
- Check terminal output for server-side errors
- MongoDB Atlas is free for testing (mongodb.com/cloud/atlas)
- Tailwind CSS can be customized in `tailwind.config.js`

---

## 🎉 You're All Set!

Your Smgxtiom platform is now running! Start exploring and building amazing features!

**Questions?** Check the documentation files or the code comments.

Happy coding! 💻✨
