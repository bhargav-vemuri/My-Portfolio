import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

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

export function About() {
  return (
    <section id="about" className="relative w-full py-32 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="md:w-2/5 lg:w-1/3 flex flex-col justify-between">
            <div>
              <p className="text-cyan-400 tracking-[0.2em] uppercase text-xs font-mono font-semibold mb-4 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">About Me</p>
              <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white drop-shadow-lg leading-tight mb-8">
                Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Systems Architect.</span>
              </h2>
            </div>
            
            <div className="hidden md:flex flex-col gap-6 mt-8">
              <a 
                href="mailto:bhargavvemuri79@gmail.com" 
                className="flex items-center gap-3 w-fit px-5 py-2.5 rounded-full border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 bg-black/20 hover:bg-black/40"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium font-mono">bhargavvemuri79@gmail.com</span>
              </a>
              <a 
                href="tel:8309942627" 
                className="flex items-center gap-3 w-fit px-5 py-2.5 rounded-full border border-white/10 text-white hover:border-emerald-400 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all duration-300 bg-black/20 hover:bg-black/40"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium font-mono">+91 8309942627</span>
              </a>
              
              <div className="flex gap-6 mt-4 ml-2">
                <a href="https://github.com/bhargav-vemuri" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <GithubIcon className="w-6 h-6 drop-shadow-md" />
                </a>
                <a href="https://www.linkedin.com/in/vssbhargav" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-300">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5 lg:w-2/3"
          >
            <div className="p-8 md:p-12 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] h-full">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 font-light">
                I'm a software engineer passionate about building intelligent, scalable systems that bridge AI and modern software engineering. My experience spans enterprise backend development, full-stack applications, distributed systems, and retrieval-augmented AI, with an emphasis on clean architecture, performance, and developer-friendly design.
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                I enjoy turning ambitious ideas into production-ready software—whether it's designing event-driven backend services, building AI-powered applications, or crafting seamless user experiences. My goal is to engineer products that solve meaningful problems while maintaining high standards of scalability, reliability, and usability.
              </p>
              
              {/* Mobile Contact Info (Hidden on Desktop) */}
              <div className="flex md:hidden flex-col sm:flex-row items-center gap-6 border-t border-white/10 pt-10 mt-10">
                <a 
                  href="mailto:bhargavvemuri79@gmail.com" 
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 bg-black/20"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium font-mono">Email</span>
                </a>
                <a 
                  href="tel:8309942627" 
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 bg-black/20"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium font-mono">Phone</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
