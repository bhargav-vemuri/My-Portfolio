import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import { Magnetic } from "./Magnetic";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8c.16-.4.65-2.03-.15-3.8s-2.06-.6-3.8 1.15a13.3 13.3 0 0 0-7 0C6.16 3.6 4.6 4 4.6 4s-.31 1.63-.15 3.8a5.2 5.2 0 0 0-1.5 3.8c0 5.76 3.35 6.79 6.5 7.16A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function About({ resumeUrl }) {
  return (
    <section id="about" className="relative w-full py-16 lg:py-20 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col gap-10 md:gap-14">
          
          {/* Top Section: Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="w-full lg:w-3/4">
              <p className="text-cyan-400 tracking-[0.2em] uppercase text-xs font-mono font-semibold mb-4 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">About Me</p>
              <h2 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-white drop-shadow-lg leading-[1.15]">
                Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 inline-block py-2">Systems Architect.</span>
              </h2>
            </div>
            
            <div className="hidden md:flex flex-col gap-4 min-w-[280px]">
              <a 
                href="mailto:bhargavvemuri79@gmail.com" 
                className="flex items-center gap-4 px-6 py-3.5 rounded-full border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 bg-white/5 backdrop-blur-md"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium font-mono">bhargavvemuri79@gmail.com</span>
              </a>
              <a 
                href="tel:8309942627" 
                className="flex items-center gap-4 px-6 py-3.5 rounded-full border border-white/10 text-white bg-white/5 backdrop-blur-md hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium font-mono">+91 8309942627</span>
              </a>
            </div>
          </div>
          
          {/* Bottom Section: Text and Socials */}
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full xl:w-2/3"
            >
              <div className="p-8 md:p-10 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 font-normal tracking-wide">
                  I am a passionate software engineer dedicated to building intelligent, scalable systems that seamlessly bridge the gap between advanced AI and modern software engineering. My expertise spans enterprise backend development, full-stack applications, and retrieval-augmented AI systems.
                </p>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal tracking-wide">
                  I thrive on turning ambitious ideas into robust, production-ready software—whether that means architecting event-driven microservices, developing AI-powered workflows, or crafting intuitive user experiences. My mission is to engineer products that solve meaningful problems while maintaining uncompromising standards of scalability, reliability, and elegant design.
                </p>
                {/* Mobile Contact Info (Hidden on Desktop) */}
                <div className="flex md:hidden flex-col gap-4 border-t border-white/10 pt-8 mt-8">
                  <a 
                    href="mailto:bhargavvemuri79@gmail.com" 
                    className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 bg-white/5"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-medium font-mono">Email Me</span>
                  </a>
                  <a 
                    href="tel:8309942627" 
                    className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-white/10 text-white hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 bg-white/5"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm font-medium font-mono">Call Me</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Socials / Links Panel */}
            <div className="w-full xl:w-1/3 flex flex-row xl:flex-col gap-6 justify-center">
              <Magnetic>
                <a href="https://github.com/bhargav-vemuri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 group">
                  <div className="p-4 bg-black/40 rounded-full group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-white font-bold font-sans text-xl">GitHub</p>
                    <p className="text-slate-400 font-mono text-sm">@bhargav-vemuri</p>
                  </div>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://www.linkedin.com/in/vssbhargav" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-white/10 transition-all duration-300 group">
                  <div className="p-4 bg-black/40 rounded-full group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-white font-bold font-sans text-xl">LinkedIn</p>
                    <p className="text-slate-400 font-mono text-sm">@vssbhargav</p>
                  </div>
                </a>
              </Magnetic>
              
              {/* Resume Download */}
              {resumeUrl && (
                <a 
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="VSS_Bhargav_Resume.pdf"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
