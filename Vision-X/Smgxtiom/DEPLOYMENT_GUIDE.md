# Deployment Guide - Smgxtiom

Complete guide to deploy Smgxtiom to production environments.

---

## 📋 Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No console errors
- [ ] Environment variables configured
- [ ] Database backups ready
- [ ] SSL certificates ready
- [ ] Domain configured
- [ ] CDN setup (optional)

---

## 🚀 Frontend Deployment

### Option 1: Vercel (Recommended)

**Easiest deployment with zero-config:**

1. **Push code to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select `frontend` directory as root

3. **Configure Environment Variables**
   - Add `VITE_API_URL` with production backend URL
   - Example: `https://api.yourdomain.com/api`

4. **Deploy**
   - Vercel will auto-deploy on every push
   - Preview deployments for pull requests
   - Production URL provided

**Costs:** Free tier available, $20/month for paid

---

### Option 2: Netlify

1. **Build your project locally**
```bash
cd frontend
npm run build
```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop `dist` folder
   - Or connect GitHub for auto-deploy

3. **Configure Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add `VITE_API_URL`

**Costs:** Free tier available, $45/month for pro

---

### Option 3: AWS S3 + CloudFront

1. **Build frontend**
```bash
cd frontend
npm run build
```

2. **Configure AWS**
```bash
# Install AWS CLI
pip install awscli

# Configure credentials
aws configure
```

3. **Upload to S3**
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. **Setup CloudFront**
   - Create distribution
   - Point to S3 bucket
   - Use your domain

**Costs:** Pay-per-use (usually $5-20/month)

---

### Option 4: Docker + Any Cloud

1. **Create Dockerfile** - `frontend/Dockerfile`
```dockerfile
FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Build Docker image**
```bash
docker build -t smgxtiom-frontend .
```

3. **Push to Docker Hub**
```bash
docker tag smgxtiom-frontend yourusername/smgxtiom-frontend
docker push yourusername/smgxtiom-frontend
```

4. **Deploy anywhere** (Google Cloud, AWS, DigitalOcean, etc.)

---

## 🖥️ Backend Deployment

### Option 1: Heroku (Simplest)

1. **Create Heroku account**
   - Go to [heroku.com](https://heroku.com)
   - Sign up (free tier available)

2. **Install Heroku CLI**
```bash
# Windows
choco install heroku-cli

# Mac
brew tap heroku/brew && brew install heroku

# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

3. **Login and create app**
```bash
heroku login
heroku create your-app-name
```

4. **Setup MongoDB**
   - Create MongoDB Atlas cluster (free at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas))
   - Get connection string
   - Add to Heroku config

5. **Set environment variables**
```bash
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret_key
heroku config:set CORS_ORIGIN=https://your-frontend-url.com
```

6. **Deploy**
```bash
git push heroku main
```

7. **Monitor**
```bash
heroku logs --tail
```

**Costs:** $7/month (free tier also available)

---

### Option 2: AWS EC2

1. **Create EC2 Instance**
   - Choose Ubuntu 20.04 LTS
   - Select t2.micro (free tier)
   - Configure security groups (open ports 80, 443, 5000)

2. **Connect to instance**
```bash
ssh -i "key.pem" ubuntu@your-instance-ip
```

3. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Clone and setup project**
```bash
git clone https://github.com/yourusername/Smgxtiom.git
cd Smgxtiom/backend
npm install
cp .env.example .env
# Edit .env with production values
```

5. **Setup MongoDB Atlas**
   - Create cluster
   - Get connection string
   - Add to .env

6. **Start with PM2** (process manager)
```bash
sudo npm install -g pm2
pm2 start server.js --name "smgxtiom-api"
pm2 startup
pm2 save
```

7. **Setup Nginx reverse proxy**
```bash
sudo apt-get install nginx
# Create /etc/nginx/sites-available/default with proxy config
sudo systemctl start nginx
```

**Costs:** $0-5/month (free tier first year)

---

### Option 3: DigitalOcean

1. **Create Droplet**
   - Choose Ubuntu 20.04
   - Select $5/month plan
   - Enable backups

2. **Initial Setup (SSH into droplet)**
```bash
# Update system
sudo apt-get update && sudo apt-get upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB (or use MongoDB Atlas)
sudo apt-get install -y mongodb

# Clone repository
git clone https://github.com/yourusername/Smgxtiom.git
cd Smgxtiom/backend
npm install
```

3. **Setup Environment**
```bash
cp .env.example .env
nano .env
# Edit with production values
```

4. **Use PM2 for process management**
```bash
npm install -g pm2
pm2 start server.js --name "smgxtiom-api"
pm2 startup
pm2 save
```

5. **Setup SSL with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d api.yourdomain.com
```

**Costs:** $5/month

---

### Option 4: Railway

1. **Install Railway CLI**
```bash
npm i -g @railway/cli
```

2. **Connect project**
```bash
cd backend
railway init
```

3. **Add MongoDB addon** (built-in)
```bash
railway add
# Select MongoDB
```

4. **Set environment variables**
```bash
railway variable add JWT_SECRET your_secret
railway variable add CORS_ORIGIN https://your-frontend.com
```

5. **Deploy**
```bash
railway up
```

**Costs:** Free tier available, $5/month for pro

---

## 🔐 Environment Variables for Production

### Frontend (.env.production)
```env
VITE_API_URL=https://api.yourdomain.com/api
VITE_APP_NAME=Smgxtiom
```

### Backend (.env.production)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_super_secret_key_minimum_32_chars
JWT_EXPIRE=30d
CORS_ORIGIN=https://yourdomain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

---

## 🔒 Security Best Practices

1. **Use HTTPS**
   - Get SSL certificate (Let's Encrypt is free)
   - Redirect HTTP to HTTPS

2. **Secure Environment Variables**
   - Never commit .env files
   - Use platform secrets (Heroku, Vercel, etc.)
   - Rotate secrets regularly

3. **Database Security**
   - Use strong passwords
   - Enable authentication
   - Use IP whitelist with MongoDB Atlas
   - Regular backups

4. **Rate Limiting**
```javascript
// Add to server.js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
```

5. **CORS Configuration**
```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
```

---

## 📊 Monitoring & Logging

### Monitor with PM2
```bash
pm2 monit
pm2 logs
pm2 status
```

### Monitor with Heroku
```bash
heroku logs --tail
heroku metrics
```

### Setup External Monitoring
- **DataDog**: Application performance monitoring
- **Sentry**: Error tracking
- **New Relic**: Full-stack monitoring
- **CloudWatch**: AWS monitoring

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy Frontend
        run: |
          cd frontend
          npm install
          npm run build
          # Upload to Vercel or AWS S3
      
      - name: Deploy Backend
        run: |
          cd backend
          git push heroku main
```

---

## 🚨 Troubleshooting Deployment

### Frontend Issues

**Blank page?**
- Check browser console for errors
- Verify API_URL in environment
- Check network requests in DevTools

**CSS not loading?**
- Check asset paths
- Verify Tailwind build process
- Check CDN/cache issues

**CORS errors?**
- Verify CORS_ORIGIN on backend
- Check API request headers
- Ensure frontend can reach backend

### Backend Issues

**Can't connect to MongoDB?**
```bash
# Test connection
node -e "require('mongoose').connect(process.env.MONGODB_URI).then(() => console.log('Connected!'))"
```

**API not responding?**
```bash
# Check server status
curl http://localhost:5000/api/health

# Check logs
pm2 logs
heroku logs --tail
```

**Port conflicts?**
```bash
# Find process on port 5000
lsof -i :5000
kill -9 <PID>
```

---

## 📈 Scaling Strategies

1. **Load Balancing**
   - Deploy multiple backend instances
   - Use load balancer (AWS ELB, Nginx)

2. **Caching**
   - Redis for session storage
   - CDN for static assets

3. **Database Optimization**
   - Add indexes to frequently queried fields
   - Enable MongoDB compression
   - Archive old data

4. **Horizontal Scaling**
   - Deploy containers with Kubernetes
   - Use auto-scaling groups
   - Distribute traffic

---

## 🔄 Rollback Procedure

### Heroku
```bash
heroku releases
heroku rollback v<number>
```

### AWS/DigitalOcean
```bash
git revert <commit-hash>
git push origin main
# Redeploy
```

---

## 📝 Deployment Checklist

- [ ] All tests passing
- [ ] Code reviewed
- [ ] Environment variables configured
- [ ] Database backed up
- [ ] SSL certificate ready
- [ ] DNS configured
- [ ] Monitoring setup
- [ ] Logging enabled
- [ ] Deployment tested
- [ ] Rollback plan ready

---

## 🎉 Post-Deployment

1. **Test production**
   - Verify all features work
   - Test on different browsers
   - Check performance

2. **Monitor metrics**
   - Server response time
   - Error rates
   - User activity

3. **Setup alerts**
   - Down time alerts
   - Error rate alerts
   - Performance alerts

4. **Regular maintenance**
   - Update dependencies
   - Patch security issues
   - Backup database
   - Review logs

---

## 📞 Support

- **Heroku Docs**: https://devcenter.heroku.com
- **AWS Docs**: https://docs.aws.amazon.com
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas**: https://docs.mongodb.com/cloud

---

**Deployment Guide Last Updated:** January 15, 2024

Happy deploying! 🚀
