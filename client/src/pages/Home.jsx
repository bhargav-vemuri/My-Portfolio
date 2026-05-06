import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Act1About } from '../components/Act1About';
import { Act2Projects } from '../components/Act2Projects';
import { Act3Experience } from '../components/Act3Experience';
import { Act4Education } from '../components/Act4Education';
import { Act5Skills } from '../components/Act5Skills';
import { EndCredits } from '../components/EndCredits';

const API_URL = "https://my-portfolio-ek2r.onrender.com";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/api/projects`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/experience`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/education`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/skills`, { credentials: 'include' }).then(r => r.json())
    ]).then(([p, e, ed, s]) => {
      // Provide fallback empty arrays if backend is disconnected
      setProjects(Array.isArray(p) ? p : []);
      setExperience(Array.isArray(e) ? e : []);
      setEducation(Array.isArray(ed) ? ed : []);
      setSkills(Array.isArray(s) ? s : []);
      
      setTimeout(() => setIsInitialLoad(false), 1200);
    }).catch(err => {
      console.error("Error fetching data:", err);
      setTimeout(() => setIsInitialLoad(false), 1200);
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {isInitialLoad && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center text-foreground"
          >
            <div className="w-16 h-16 border-4 border-muted/20 border-t-white rounded-full animate-spin mb-8 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] animate-pulse">DIRECTOR'S CUT</h1>
            <p className="mt-4 font-mono text-sm tracking-widest text-muted uppercase">Loading Assets...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <Act1About />
      <Act2Projects projects={projects} />
      <Act3Experience experience={experience} />
      <Act4Education education={education} />
      <Act5Skills skills={skills.map(s => s.name)} />
      <EndCredits />
    </main>
    </>
  );
}
