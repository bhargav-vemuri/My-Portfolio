import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/Hero';
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { Footer } from '../components/Footer';
import { AmbientBackground } from '../components/AmbientBackground';
import { Navbar } from '../components/Navbar';
import { ScrollProgress } from '../components/ScrollProgress';

const API_URL = "https://my-portfolio-ek2r.onrender.com";

const loadingPhrases = [
  "Initializing",
  "Hey! Thanks for visiting",
  "Waking up the server...",
  "Taking a minute, hold tight",
  "Gathering assets...",
  "Compiling dependencies...",
  "Preparing the experience...",
  "Almost there..."
];

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [settings, setSettings] = useState({});
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isInitialLoad) {
      interval = setInterval(() => {
        setPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isInitialLoad]);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/api/projects`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/experience`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/education`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/skills`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/certifications`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_URL}/api/settings`, { credentials: 'include' }).then(r => r.ok ? r.json() : { resumeUrl: "" }).catch(() => ({ resumeUrl: "" }))
    ]).then(([p, e, ed, s, c, setRes]) => {
      // Provide fallback empty arrays if backend is disconnected
      setProjects(Array.isArray(p) ? p : []);
      setExperience(Array.isArray(e) ? e : []);
      setEducation(Array.isArray(ed) ? ed : []);
      setSkills(Array.isArray(s) ? s : []);
      setCertifications(Array.isArray(c) ? c : []);
      setSettings(setRes || { resumeUrl: "" });
      
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
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center text-foreground"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-48 h-[2px] bg-white/10 overflow-hidden mb-8 rounded-full"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-gradient-to-r from-terra via-slate-blue to-sage"
              />
            </motion.div>
            
            {/* Minimalist Progress Number with Premium Glow */}
            <div className="relative h-6 w-full flex items-center justify-center mt-6">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="font-sans text-xs md:text-sm tracking-[0.3em] text-terra uppercase font-medium absolute whitespace-nowrap drop-shadow-[0_0_10px_rgba(217,125,85,0.8)]"
                >
                  {loadingPhrases[phraseIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full relative">
      <AmbientBackground />
      <Hero />
      <About resumeUrl={settings.resumeUrl} resumes={settings.resumes || []} />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Education education={education} />
      <Skills skills={skills} />
      <Certifications certifications={certifications} />
      <Footer />
    </main>
    </>
  );
}
