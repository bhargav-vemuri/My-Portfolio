# VSS Bhargav | Software Engineer Portfolio

A highly-optimized, premium full-stack portfolio built on the MERN stack. Designed with a custom React architecture, fluid Framer Motion animations, a dynamic particle background, and a fully interactive, secure Express backend for live content management.

## 🚀 Architecture Overview
- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion, @tsparticles
- **Backend**: Node.js, Express.js, Mongoose, JWT Auth, Express-Rate-Limit, Zod validation
- **Database**: MongoDB

## 📦 Local Setup & Deployment

### 1. Backend Initialization
Ensure you have MongoDB running locally (default: `mongodb://127.0.0.1:27017/portfolio`) or provide a `MONGODB_URI` environment variable.

```bash
cd server
npm install
npm start
```
The backend will run on `http://localhost:5000` by default.

**Environment Variables (`server/.env`):**
```env
MONGODB_URI=your_mongo_url
JWT_SECRET=your_jwt_secret
ADMIN_PASSWORD=your_admin_password
PORT=5000
```

**Seeding the Database:**
To populate the initial data, navigate to `http://localhost:5000/api/seed` in your browser.

### 2. Frontend Initialization
In a new terminal tab:
```bash
cd client
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`. Make sure `client/src/pages/Home.jsx` points its `API_URL` to your desired backend (local or production).

### 3. Media Uploads
To serve videos (e.g. `.mp4`, `.webm`) or images locally, place them in `client/public/uploads/`. You can then reference them in the Admin Dashboard via `/uploads/your-video.mp4`.

## 🔐 Admin Dashboard
Access the secure Content Management System at `/admin/login` on your frontend. 
The CMS allows you to seamlessly update Projects, Experience, Education, and Skills live, protected by complete Zod data validation and JWT session security.
