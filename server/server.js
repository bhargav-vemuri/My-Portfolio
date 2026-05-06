require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const { z } = require('zod');

const { Project, Experience, Education, Skill } = require('./models');

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://my-portfolio-seven-rho-42.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_only';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'director123';

mongoose.connect(MONGODB_URI).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Auth Middleware
const requireAdmin = (req, res, next) => {
  const token = req.cookies.admin_token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Auth Routes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { error: "Too many login attempts from this IP, please try again after 15 minutes" }
});

app.post('/api/auth', loginLimiter, (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: '24h' });
    res.cookie('admin_token', token, { 
      httpOnly: true, 
      secure: true, 
      sameSite: 'none', 
      path: '/' 
    });
    return res.json({ success: true });
  }
  return res.status(401).json({ error: "Unauthorized" });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('admin_token');
  res.json({ success: true });
});

app.get('/api/auth/check', requireAdmin, (req, res) => {
  res.json({ success: true });
});

// Seed Route
app.get('/api/seed', async (req, res) => {
  try {
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Skill.deleteMany({});

    const projects = [
      {
        title: "ScriptVision",
        year: "2026",
        problem: "Analyzing and breaking down film scripts into cinematic shots manually is incredibly time-consuming for directors and cinematographers.",
        approach: "Built an AI system utilizing Groq LLM and Hugging Face models to parse PDFs and automatically generate shot-by-shot breakdowns with camera, lighting, and sound design.",
        impact: "Reduced manual script analysis effort by 60%. Delivered a full-stack experience using React, Node.js, Express, and MongoDB.",
        link: "https://github.com/bhargav-vemuri/Script-To-Visual"
      },
      {
        title: "Reality Checker",
        year: "2026",
        problem: "Tracking expenses often lacks behavioral insights, making it hard to identify impulse vs. essential spending.",
        approach: "Designed a rule-based scoring engine to evaluate financial discipline, complete with secure JWT authentication and interactive charts.",
        impact: "Provides actionable insights and predicts savings outcomes based on spending distribution.",
        link: "https://github.com/bhargav-vemuri/Expense-Tracker"
      },
      {
        title: "EcoShare",
        year: "2026",
        problem: "Campus commuting needed an efficient, real-time platform for students to share rides and reduce their footprint.",
        approach: "Developed a full-stack ride-sharing platform supporting dynamic seat allocation and live updates with a 15-second auto-refresh.",
        impact: "Handled concurrent ride operations ensuring data consistency for bookings and seat availability across the campus.",
        link: "https://github.com/bhargav-vemuri/ecoshare"
      },
      {
        title: "Campus Guide",
        year: "2026",
        problem: "Students often lack a centralized platform to discover, rate, and review local cafes, parks, and venues around their university campus.",
        approach: "Developed a full-stack MERN application featuring role-based authentication (student vs. owner portals), secure local image uploads, and an interactive directory.",
        impact: "Bridged the gap between local vendors and the student community, offering a community-driven leaderboard with live 5-star rating mechanisms.",
        link: "https://github.com/bhargav-vemuri/Campus-Guide"
      },
      {
        title: "Last Mile Delivery",
        year: "2026",
        problem: "The last mile of supply chain delivery is notoriously inefficient, resource-heavy, and difficult to optimize dynamically.",
        approach: "Developed a Python-based simulation engine utilizing Reinforcement Learning (RL) to optimize delivery routing.",
        impact: "Enhanced simulation efficiency by resolving blocking I/O and implementing RL epsilon decay for better route convergence.",
        link: "https://github.com/bhargav-vemuri/Last-Mile_Delivery"
      }
    ];

    const experience = [
      {
        role: "Machine Learning Research Intern",
        company: "SRM University AP",
        period: "June 2025 - July 2025",
        description: "Built an end-to-end ML pipeline to predict Chronic Kidney Disease (CKD) from clinical data using supervised learning. Handled preprocessing and trained Decision Tree & Naive Bayes models, improving performance by 10% using ROC-AUC."
      }
    ];

    const education = [
      {
        degree: "B.Tech in CSE (AI & ML)",
        school: "SRM University, Andhra Pradesh",
        period: "2023 - 2027",
        details: "CGPA: 8.12 | Coursework: Machine Learning, Data Structures, Algorithms, DBMS."
      },
      {
        degree: "Class XII",
        school: "NRI Junior College, Tenali",
        period: "2021 - 2023",
        details: "Percentage: 73.4%"
      },
      {
        degree: "Class X",
        school: "Sri Chaitanya School, Tenali",
        period: "2020 - 2021",
        details: "Percentage: 100%"
      }
    ];

    const skills = [
      "Next.js", "React.js", "Node.js", "Express.js", 
      "MongoDB", "Python", "Tailwind CSS", "Framer Motion",
      "PostgreSQL", "Docker", "Machine Learning", "Git & GitHub"
    ];

    await Project.insertMany(projects);
    await Experience.insertMany(experience);
    await Education.insertMany(education);
    await Skill.insertMany(skills.map(name => ({ name })));

    res.json({ message: "Database seeded successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Zod Validation Schemas
const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  year: z.string().min(1, "Year is required"),
  problem: z.string(),
  approach: z.string(),
  impact: z.string(),
  link: z.string().url("Must be a valid URL").optional().or(z.literal(''))
});

const experienceSchema = z.object({
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  period: z.string().min(1, "Period is required"),
  description: z.string()
});

const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  school: z.string().min(1, "School is required"),
  period: z.string().min(1, "Period is required"),
  details: z.string()
});

const skillSchema = z.object({
  name: z.string().min(1, "Skill name is required")
});

const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors.map(e => e.message).join(', ') });
  }
};

const getModelSchema = (path) => {
  if (path === 'projects') return projectSchema;
  if (path === 'experience') return experienceSchema;
  if (path === 'education') return educationSchema;
  if (path === 'skills') return skillSchema;
  return z.any();
};

// Helper for CRUD
const buildCrudRoutes = (model, path) => {
  const schema = getModelSchema(path);

  app.get(`/api/${path}`, async (req, res) => {
    try {
      const data = await model.find().sort({ createdAt: 1 });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post(`/api/${path}`, requireAdmin, validateSchema(schema), async (req, res) => {
    try {
      const item = await model.create(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.put(`/api/${path}/:id`, requireAdmin, validateSchema(schema), async (req, res) => {
    try {
      const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete(`/api/${path}/:id`, requireAdmin, async (req, res) => {
    try {
      await model.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

buildCrudRoutes(Project, 'projects');
buildCrudRoutes(Experience, 'experience');
buildCrudRoutes(Education, 'education');
buildCrudRoutes(Skill, 'skills');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
