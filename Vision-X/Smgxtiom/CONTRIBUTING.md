# Contributing Guide - Smgxtiom

Thank you for your interest in contributing to Smgxtiom! This guide will help you understand our development process and how to contribute effectively.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- Git
- MongoDB account
- Basic understanding of React and Express.js

### Setup for Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/Smgxtiom.git
cd Smgxtiom
```

2. **Setup backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your settings
npm run dev
```

3. **Setup frontend (new terminal)**
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

---

## 📋 Finding Issues to Work On

### Priority Areas
1. **Backend Controllers** - Implement remaining CRUD operations
2. **File Uploads** - Integrate Multer for video/document uploads
3. **Validation** - Add input validation to all endpoints
4. **Real-time Features** - Setup Socket.io infrastructure
5. **Testing** - Write tests for critical functions

### Issue Labels
- `good-first-issue` - Perfect for beginners
- `bug` - Something is broken
- `feature` - New feature request
- `enhancement` - Improve existing feature
- `documentation` - Improve docs

---

## 🔧 Code Standards

### Frontend (React)
```javascript
// Use functional components
const MyComponent = () => {
  return (
    <div>
      {/* Component code */}
    </div>
  );
};

export default MyComponent;
```

### Backend (Express)
```javascript
// Use async/await
const getUser = async (req, res) => {
  try {
    // Your logic here
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
```

### Naming Conventions
- **Files**: camelCase (e.g., `userController.js`)
- **Components**: PascalCase (e.g., `UserProfile.jsx`)
- **Variables**: camelCase (e.g., `userName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_USERS`)

---

## 🧪 Testing Your Changes

### Test Backend API
```bash
# Using curl
curl -X GET http://localhost:5000/api/courses

# Using Postman
# Import the API documentation
```

### Test Frontend Component
```bash
# Check browser console for errors
# Use React DevTools extension
# Test on mobile devices
```

---

## 📝 Commit Messages

### Format
```
type(scope): description

feat(auth): add two-factor authentication
fix(courses): resolve enrollment validation bug
docs(readme): update installation steps
style(components): format code with prettier
test(models): add user model tests
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (formatting)
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance

---

## 🔀 Pull Request Process

1. **Create a branch**
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**
- Write clean, readable code
- Follow code standards
- Add comments for complex logic
- Test thoroughly

3. **Commit your changes**
```bash
git add .
git commit -m "feat(module): description"
```

4. **Push to GitHub**
```bash
git push origin feature/your-feature-name
```

5. **Create Pull Request**
- Use clear title and description
- Reference any related issues (#123)
- Include screenshots for UI changes
- List breaking changes if any

---

## 🔍 Code Review Checklist

Before submitting, verify:
- ✅ Code follows project standards
- ✅ No console errors or warnings
- ✅ Responsive design tested
- ✅ All features working as expected
- ✅ No hardcoded values
- ✅ Proper error handling
- ✅ Comments for complex code
- ✅ Commit messages are clear

---

## 📚 Project Structure Guide

### Adding a New Backend Feature

1. **Create Model** - `backend/src/models/Feature.js`
```javascript
const featureSchema = new Schema({
  name: String,
  description: String,
  // fields...
}, { timestamps: true });

module.exports = mongoose.model('Feature', featureSchema);
```

2. **Create Controller** - `backend/src/controllers/featureController.js`
```javascript
const getFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    res.json({ success: true, data: features });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
```

3. **Create Routes** - `backend/src/routes/featureRoutes.js`
```javascript
const express = require('express');
const router = express.Router();
const { getFeatures } = require('../controllers/featureController');

router.get('/', getFeatures);

module.exports = router;
```

4. **Register Routes** - Update `backend/server.js`
```javascript
app.use('/api/features', require('./src/routes/featureRoutes'));
```

### Adding a React Component

1. **Create Component** - `frontend/src/components/Feature.jsx`
```javascript
import React from 'react';

const Feature = () => {
  return (
    <div className="feature-container">
      {/* Component JSX */}
    </div>
  );
};

export default Feature;
```

2. **Use Component** - Import and use in parent
```javascript
import Feature from '../components/Feature';

export default function ParentComponent() {
  return <Feature />;
}
```

---

## 🐛 Bug Reporting

### Submit a Bug Report
1. Go to Issues tab
2. Click "New Issue"
3. Select "Bug Report"
4. Fill in details:
   - **Title**: Brief description
   - **Steps to Reproduce**: How to trigger bug
   - **Expected Behavior**: What should happen
   - **Actual Behavior**: What actually happens
   - **Screenshots**: If applicable
   - **Environment**: OS, browser, version

### Example Bug Report
```
Title: Login fails with special characters in password

Steps to Reproduce:
1. Register with password: "Pass@word#123"
2. Click Logout
3. Try to login with same credentials

Expected: Should login successfully
Actual: Shows "Invalid credentials" error
```

---

## 💡 Feature Request

### Submit a Feature Request
1. Go to Issues tab
2. Click "New Issue"
3. Select "Feature Request"
4. Describe:
   - **What problem it solves**
   - **Why it's needed**
   - **How it should work**
   - **Any related issues**

---

## 🎓 Development Tips

### Useful Commands
```bash
# Backend
npm run dev          # Start with nodemon
npm test             # Run tests
npm run build        # Build for production

# Frontend
npm start            # Start dev server
npm run build        # Build for production
npm run lint         # Run linter
```

### Debugging
```javascript
// Backend - Add logging
console.log('Debug:', variable);
// Or use: require('debug')('app:*');

// Frontend - Use React DevTools
// Or add breakpoints in browser DevTools
```

### Performance Tips
- Lazy load components: `React.lazy()` + `Suspense`
- Use memo for expensive components: `React.memo()`
- Implement pagination for large lists
- Optimize images and assets
- Use CDN for static files

---

## 📖 Documentation

When contributing documentation:
- Use clear, concise language
- Include code examples
- Update TABLE OF CONTENTS
- Add relevant links
- Include screenshots for UI changes
- Keep markdown formatting consistent

---

## 🚫 Things to Avoid

- ❌ Committing node_modules
- ❌ Hardcoding sensitive data
- ❌ Console.log in production code
- ❌ Modifying .env files in commits
- ❌ Making unrelated changes
- ❌ Not testing before submitting PR
- ❌ Complex nested ternary operators
- ❌ Swallowing errors silently

---

## ✅ Checklist Before Submitting

- [ ] Code follows style guide
- [ ] No console errors
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Commit messages clear
- [ ] No hardcoded values
- [ ] Error handling implemented
- [ ] Tested locally
- [ ] Mobile responsive (if UI)
- [ ] No breaking changes

---

## 🤝 Community Guidelines

### Be Respectful
- Be kind and constructive
- Respect different opinions
- Welcome new contributors
- Provide helpful feedback

### Communication
- Use English in all discussions
- Be clear and specific
- Provide context and examples
- Search for existing issues first

### Code of Conduct
- Be inclusive
- Be professional
- Report misconduct to maintainers
- Follow project guidelines

---

## 📞 Need Help?

- **Documentation**: Check `README.md` and guides
- **Issues**: Search existing issues
- **Discussions**: Start a discussion thread
- **Email**: Contact maintainers
- **Chat**: Join our community Discord/Slack

---

## 🎉 Recognition

Contributors will be recognized:
- In the CONTRIBUTORS.md file
- In release notes
- In GitHub insights
- Special badge on profile

---

## 🔗 Useful Resources

- [React Docs](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Git Guide](https://git-scm.com/doc)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---

**Thank you for contributing to Smgxtiom! Happy coding! 🚀**

Last Updated: January 15, 2024
