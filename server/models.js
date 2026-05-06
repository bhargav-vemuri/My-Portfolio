const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  problem: { type: String, required: true },
  approach: { type: String, required: true },
  impact: { type: String, required: true },
  link: { type: String, required: true }
}, { timestamps: true });

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  school: { type: String, required: true },
  period: { type: String, required: true },
  details: { type: String, required: true }
}, { timestamps: true });

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true });

module.exports = {
  Project: mongoose.model('Project', ProjectSchema),
  Experience: mongoose.model('Experience', ExperienceSchema),
  Education: mongoose.model('Education', EducationSchema),
  Skill: mongoose.model('Skill', SkillSchema)
};
