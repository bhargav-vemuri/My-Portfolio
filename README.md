# Portfolio: The Director's Cut 🎬

A highly-optimized, cinematic full-stack web portfolio built on the MERN stack. Designed with a custom React architecture, it replaces generic layouts with fluid Framer Motion animations, premium Tailwind aesthetics, and a fully interactive, rate-limited secure Express backend for live content management.

## 🚀 Architecture overview
- **Frontend**: React.js, Vite, Tailwind CSS v4, Framer Motion
- **Backend**: Node.js, Express.js, Mongoose, JWT Auth, Express-Rate-Limit, Zod
- **Database**: MongoDB

## 📦 Local Setup & Deployment

### 1. Database Setup
Ensure you have MongoDB running locally (default: `mongodb://127.0.0.1:27017/portfolio`) or set a `MONGODB_URI` environment variable.

### 2. Backend Initialization
```bash
cd server
npm install
npm start
```
The backend will run on `https://my-portfolio-ek2r.onrender.com`.

**Environment Variables (`server/.env`):**
```env
MONGODB_URI=your_mongo_url
JWT_SECRET=your_jwt_secret
ADMIN_PASSWORD=director123
PORT=5000
```

**Seeding the Database:**
To populate the initial cinematic data, navigate to `https://my-portfolio-ek2r.onrender.com/api/seed` in your browser.

### 3. Frontend Initialization
In a new terminal tab:
```bash
cd client
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`.

## 🔐 Admin Dashboard
Access the secure Content Management System at `http://localhost:5173/admin/login` using the `ADMIN_PASSWORD` (default: `director123`). 
The CMS allows you to seamlessly update scenes (Projects), history (Experience & Education), and the Armory (Skills) live with complete Zod data validation and rate-limiting security.
