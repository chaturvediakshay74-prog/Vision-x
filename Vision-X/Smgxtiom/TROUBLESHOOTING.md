# Troubleshooting Guide - Smgxtiom

Solutions for common issues and problems you might encounter.

---

## 🔴 Critical Issues

### Backend Won't Start

**Problem:** Express server crashed or won't listen

**Solutions:**

1. **Check Node.js is installed**
```bash
node --version
npm --version
```

2. **Verify .env file exists**
```bash
cd backend
ls .env
# Should see .env file
```

3. **Check .env has valid MongoDB URI**
```bash
# .env should contain
MONGODB_URI=mongodb://localhost:27017/smgxtiom
# Or MongoDB Atlas URI
```

4. **Clear node_modules and reinstall**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

5. **Check if port 5000 is free**
```bash
# Windows
netstat -ano | findstr :5000

# Mac/Linux
lsof -i :5000

# Kill process if found
taskkill /PID <PID> /F  # Windows
kill -9 <PID>            # Mac/Linux
```

6. **Verify MongoDB is running**
- Local MongoDB: `mongod` should be running
- MongoDB Atlas: Check connection string is correct

---

### Frontend Won't Start

**Problem:** React dev server won't start or shows blank page

**Solutions:**

1. **Clear cache and reinstall**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

2. **Check Node version**
```bash
node --version  # Should be v14 or higher
```

3. **Verify .env file**
```bash
cat .env
# Should have VITE_API_URL=http://localhost:5000/api
```

4. **Check port 3000 is free**
```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000

# Kill if needed
taskkill /PID <PID> /F
kill -9 <PID>
```

5. **Clear browser cache**
- Press Ctrl+Shift+Delete (Chrome)
- Or Cmd+Shift+Delete (Mac)
- Or clear from browser settings

6. **Check console for errors**
- Open DevTools: F12
- Check Console tab for JavaScript errors
- Check Network tab to verify API calls

---

### MongoDB Connection Failed

**Problem:** "Cannot connect to MongoDB" error

**Solutions:**

1. **If using local MongoDB**
```bash
# Start MongoDB service
# Windows: Use MongoDB installer or run mongod
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

2. **Verify connection string**
```bash
# Local instance
MONGODB_URI=mongodb://localhost:27017/smgxtiom

# MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smgxtiom
```

3. **Check username/password** (for Atlas)
```bash
# Format: mongodb+srv://username:password@...
# Ensure @ and special chars are URL encoded
# Use %40 for @, %3A for :
```

4. **Test connection**
```javascript
// Create test.js
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ Connection failed:', err));
```

5. **Check firewall/network**
- Ensure MongoDB service is accessible
- Check firewall rules
- For Atlas, verify IP whitelist includes your IP

---

## 🟡 Authentication Issues

### Can't Login

**Problem:** Login always fails with "Invalid credentials"

**Solutions:**

1. **Check demo credentials**
```
Email: student@example.com
Password: password123
```

2. **Verify user exists in database**
```bash
# In MongoDB
use smgxtiom
db.users.find({ email: "student@example.com" })
```

3. **Check password hashing**
```bash
# If user was created incorrectly, delete and recreate
db.users.deleteOne({ email: "student@example.com" })
```

4. **Clear browser storage**
```javascript
// In browser console (F12)
localStorage.clear()
sessionStorage.clear()
location.reload()
```

5. **Check JWT_SECRET** in .env
- Must be set and non-empty
- Must be same on backend

---

### CORS Errors on Login

**Problem:** "Access to XMLHttpRequest blocked by CORS"

**Solutions:**

1. **Verify CORS_ORIGIN in backend .env**
```env
# Frontend URL must match exactly
CORS_ORIGIN=http://localhost:3000
# NOT: http://localhost:3000/ (no trailing slash)
```

2. **Restart backend after .env change**
```bash
npm run dev
```

3. **Check API URL in frontend .env**
```env
VITE_API_URL=http://localhost:5000/api
```

4. **Test CORS manually**
```bash
curl -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  http://localhost:5000/api/health
```

---

### Token Expired/Invalid

**Problem:** Session expires too quickly or token not recognized

**Solutions:**

1. **Check JWT_EXPIRE in .env**
```env
JWT_EXPIRE=7d  # 7 days is default
```

2. **Check JWT_SECRET matches**
```bash
# Backend .env
JWT_SECRET=your_secret_key
```

3. **Verify token in localStorage**
```javascript
// Browser console
localStorage.getItem('token')
// Should output a long JWT string
```

4. **Check token header format**
```bash
# Should be: Bearer <token>
# Not: <token>
```

---

## 🟡 API Issues

### 404 Not Found Errors

**Problem:** API endpoints return 404

**Solutions:**

1. **Verify API endpoint URL**
```javascript
// Check exact URL format
// Should be: http://localhost:5000/api/courses
// NOT: http://localhost:5000/courses
```

2. **Check route is registered** in backend/server.js
```javascript
// Should have line like:
app.use('/api/courses', require('./src/routes/courseRoutes'));
```

3. **Verify route file exists**
```bash
ls backend/src/routes/
# Should see: courseRoutes.js
```

4. **Test with curl**
```bash
curl http://localhost:5000/api/courses
```

---

### 500 Internal Server Error

**Problem:** API returns 500 error

**Solutions:**

1. **Check backend logs**
```bash
# See error in terminal where npm run dev is running
# Look for error traceback
```

2. **Common causes:**
- MongoDB connection issue
- Missing required fields in request
- Database query error
- Unhandled exception

3. **Test with Postman**
- Create POST request with exact JSON body
- Check response body for error message
- Verify headers (Content-Type: application/json)

4. **Add debugging**
```javascript
// In controller
console.log('Request:', req.body);
console.log('User:', req.user);
try {
  // Your code
} catch (error) {
  console.log('Error details:', error);
}
```

---

### Enrollment Not Working

**Problem:** Can't enroll in courses

**Solutions:**

1. **Verify you're authenticated**
- Check you're logged in
- Verify token in browser storage

2. **Check course exists**
```bash
curl http://localhost:5000/api/courses
# Should see courses in response
```

3. **Verify request format**
```javascript
// POST /api/courses/enroll
{
  "courseId": "valid_course_id"
}
```

4. **Check database constraints**
- Course must exist
- User must be authenticated
- Student can't enroll twice in same course

---

## 🟡 UI/UX Issues

### Blank Dashboard

**Problem:** Dashboard appears empty or shows no data

**Solutions:**

1. **Check browser console** (F12)
- Look for errors in Console tab
- Check Network tab for failed requests

2. **Verify APIs are returning data**
```bash
curl http://localhost:5000/api/courses
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

3. **Check localStorage has token**
```javascript
// Browser console
localStorage.getItem('token')
localStorage.getItem('user')
```

4. **Verify API response format**
```javascript
// Response should be:
{
  "success": true,
  "data": { /* actual data */ }
}
```

---

### Styles Not Loading

**Problem:** Page looks unstyled or colors are wrong

**Solutions:**

1. **Rebuild Tailwind**
```bash
cd frontend

# Clear cache
rm -rf node_modules/.cache

# Reinstall
npm install

# Restart dev server
npm start
```

2. **Check tailwind.config.js**
```javascript
// Should have content array pointing to files
content: [
  "./src/**/*.{js,jsx}",
  "./index.html",
]
```

3. **Verify CSS imports**
```javascript
// App.jsx should have:
import './index.css'
```

4. **Clear browser cache**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or open in incognito window

---

### Animation Stuttering

**Problem:** Framer Motion animations are slow or jerky

**Solutions:**

1. **Reduce animation complexity**
```javascript
// Use simpler animations
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
// Instead of complex transforms
```

2. **Use will-change CSS**
```css
.animated-element {
  will-change: opacity, transform;
}
```

3. **Check for performance issues**
- Open DevTools Performance tab
- Record animation
- Look for dropped frames

4. **Disable animations on mobile**
```javascript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;
```

---

## 🟡 Database Issues

### Duplicate Entries

**Problem:** Duplicate user/course entries in database

**Solutions:**

1. **Add unique index**
```javascript
// In model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,  // Add this
    lowercase: true
  }
});
```

2. **Fix existing data**
```bash
# In MongoDB
db.users.createIndex({ email: 1 }, { unique: true })

# Find duplicates
db.users.aggregate([
  { $group: { _id: "$email", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])

# Remove duplicates manually
db.users.deleteOne({ _id: ObjectId("...") })
```

---

### Data Not Saving

**Problem:** Changes don't persist in database

**Solutions:**

1. **Check database is running**
```bash
mongosh  # or mongo shell
db.version()  # Should return MongoDB version
```

2. **Verify save is being called**
```javascript
try {
  const user = new User(data);
  await user.save();  // Must call save()
  console.log('✅ Saved:', user);
} catch (error) {
  console.log('❌ Error:', error);
}
```

3. **Check validation errors**
```javascript
try {
  await user.save();
} catch (error) {
  console.log('Validation errors:', error.errors);
}
```

4. **Verify database isn't read-only**
```bash
use smgxtiom
db.users.insertOne({ test: true })
```

---

## 🟡 Performance Issues

### Slow Response Times

**Problem:** API calls are very slow

**Solutions:**

1. **Check database indexes**
```bash
# In MongoDB
db.users.getIndexes()
# Should have index on frequently searched fields
```

2. **Add indexes for common queries**
```javascript
// In model
emailIndex: { email: 1 },
courseIndex: { course: 1 },
studentIndex: { student: 1 }
```

3. **Monitor MongoDB performance**
```bash
# In MongoDB shell
db.currentOp()
db.serverStatus()
```

4. **Check for N+1 queries**
```javascript
// Instead of loop querying:
const courses = await Course.find()
  .populate('instructor')  // Populate related data once
  .populate('students');
```

---

### High Memory Usage

**Problem:** Backend uses too much memory

**Solutions:**

1. **Check for memory leaks**
```javascript
// Use clinic.js to find leaks
npm install clinic
clinic doctor -- npm start
```

2. **Limit query results**
```javascript
// Add pagination
const courses = await Course.find()
  .limit(10)
  .skip((page - 1) * 10);
```

3. **Stream large datasets**
```javascript
// Instead of loading all at once
Course.find().stream()
  .on('data', (course) => {
    // Process one at a time
  });
```

---

## 🔧 Debugging Tools

### Browser DevTools
- **F12** - Open DevTools
- **Console tab** - JavaScript errors
- **Network tab** - API calls
- **Application tab** - localStorage, cookies
- **Performance tab** - Speed issues

### Backend Debugging
```javascript
// Add detailed logging
console.time('operation-name');
// ... code ...
console.timeEnd('operation-name');

// Or use debug module
const debug = require('debug')('app:*');
debug('Message:', variable);
```

### MongoDB Tools
```bash
# MongoDB Shell
mongosh

# View databases
show dbs

# Switch to database
use smgxtiom

# View collections
show collections

# Query data
db.users.find()
db.users.findOne({ email: "test@example.com" })
```

---

## 📞 Getting Help

1. **Check documentation**
   - Read README.md
   - Check API_DOCUMENTATION.md
   - Review code comments

2. **Search existing issues**
   - GitHub Issues
   - Stack Overflow
   - Google the error message

3. **Ask for help**
   - Create detailed issue with:
     - Error message (full)
     - Steps to reproduce
     - Your environment (OS, Node version, etc.)
     - Screenshots/logs

---

## 📋 Common Error Messages

### "Cannot GET /api/courses"
- Route not registered in server.js
- Wrong URL format (missing /api prefix)

### "MongoNetworkError: connect ECONNREFUSED"
- MongoDB not running
- Wrong connection string
- Wrong credentials

### "jwt malformed"
- Token not in correct format
- Token corrupted or invalid
- Wrong JWT_SECRET

### "Unauthorized"
- No token provided
- Token expired
- Wrong credentials

### "Forbidden"
- User role doesn't have permission
- Authorization check failed

---

## ✅ Troubleshooting Checklist

- [ ] .env file exists and is correct
- [ ] MongoDB is running
- [ ] Node.js version is v14+
- [ ] npm packages installed
- [ ] No port conflicts
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Can access http://localhost:3000
- [ ] Can access http://localhost:5000/api/health
- [ ] Can login with demo credentials

---

**Last Updated:** January 15, 2024

Still having issues? Create a detailed GitHub issue with your error message and environment details!
