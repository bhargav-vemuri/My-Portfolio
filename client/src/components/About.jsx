import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";

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
    <section id="about" className="relative w-full py-16 lg:py-20 border-t border-cream/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col gap-10 md:gap-14">
          
          {/* Top Section: Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div className="w-full lg:w-3/4">
              <Reveal delay={0.1}>
                <div className="relative inline-block mb-6">
                  <h2 className="font-sans font-bold text-5xl md:text-6xl tracking-tight text-slate-blue drop-shadow-lg">
                    About Me<span className="text-terra">.</span>
                  </h2>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-terra to-transparent rounded-full"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <h3 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-cream drop-shadow-lg leading-[1.15]">
                  Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra to-sage inline-block py-2">AI Systems Developer.</span>
                </h3>
              </Reveal>
            </div>
            
            <Reveal delay={0.4} y={20}>
              <div className="hidden md:flex flex-col gap-4 min-w-[280px]">
                <a 
                  href="mailto:bhargavvemuri79@gmail.com" 
                  className="flex items-center gap-4 px-6 py-3.5 rounded-full border border-cream/10 text-cream hover:border-terra hover:text-terra transition-all duration-300 bg-cream/5 backdrop-blur-md"
                >
                  <Mail className="w-5 h-5 text-terra" />
                  <span className="text-sm font-medium font-mono">bhargavvemuri79@gmail.com</span>
                </a>
                <a 
                  href="tel:8309942627" 
                  className="flex items-center gap-4 px-6 py-3.5 rounded-full border border-cream/10 text-cream bg-cream/5 backdrop-blur-md hover:border-sage hover:text-sage transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-sage" />
                  <span className="text-sm font-medium font-mono">+91 8309942627</span>
                </a>
              </div>
            </Reveal>
          </div>
          
          {/* Bottom Section: Text and Socials */}
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-start">
            <div className="w-full xl:w-2/3">
              <Reveal delay={0.3}>
                <div className="p-8 md:p-10 bg-cream/5 backdrop-blur-lg rounded-3xl border border-cream/10 shadow-[0_8px_32px_rgba(23,21,20,0.3)]">
                  <p className="text-lg md:text-xl text-cream/80 leading-relaxed mb-6 font-normal tracking-wide">
                    I like building things that are a little harder than they first appear. I’m drawn to problems where there’s more going on underneath the surface, whether that means figuring out how information should be connected, how a system should handle scale, or how AI can actually make a product more useful.
                  </p>
                  <p className="text-lg md:text-xl text-cream/80 leading-relaxed font-normal tracking-wide">
                    I’m currently pursuing a B.Tech in Computer Science with a specialization in AI & ML, and most of my work sits somewhere between software engineering and AI. I enjoy going from an idea to a working system, learning what breaks along the way, and refining it until the pieces fit together. For me, the most rewarding part of development is seeing something that started as an idea become something people can actually use.
                  </p>
                  {/* Mobile Contact Info (Hidden on Desktop) */}
                  <div className="flex md:hidden flex-col gap-4 border-t border-cream/10 pt-8 mt-8">
                    <a 
                      href="mailto:bhargavvemuri79@gmail.com" 
                      className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-cream/10 text-cream hover:border-terra hover:text-terra transition-all duration-300 bg-cream/5"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm font-medium font-mono">Email Me</span>
                    </a>
                    <a 
                      href="tel:8309942627" 
                      className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-cream/10 text-cream hover:border-sage hover:text-sage transition-all duration-300 bg-cream/5"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="text-sm font-medium font-mono">Call Me</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
            
            {/* Socials / Links Panel */}
            <div className="w-full xl:w-1/3 flex flex-row xl:flex-col gap-6 justify-center">
              <Reveal delay={0.4} y={20}>
                <Magnetic>
                  <a href="https://github.com/bhargav-vemuri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-cream/5 border border-cream/10 hover:border-terra hover:bg-cream/10 transition-all duration-300 group">
                    <div className="p-4 bg-background/40 rounded-full group-hover:scale-110 transition-transform">
                      <GithubIcon className="w-8 h-8 text-cream group-hover:text-terra transition-colors" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-cream font-bold font-sans text-xl">GitHub</p>
                      <p className="text-cream/60 font-mono text-sm">@bhargav-vemuri</p>
                    </div>
                  </a>
                </Magnetic>
              </Reveal>
              <Reveal delay={0.5} y={20}>
                <Magnetic>
                  <a href="https://www.linkedin.com/in/vssbhargav" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-cream/5 border border-cream/10 hover:border-slate-blue hover:bg-cream/10 transition-all duration-300 group">
                    <div className="p-4 bg-background/40 rounded-full group-hover:scale-110 transition-transform">
                      <LinkedinIcon className="w-8 h-8 text-cream group-hover:text-slate-blue transition-colors" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-cream font-bold font-sans text-xl">LinkedIn</p>
                      <p className="text-cream/60 font-mono text-sm">@vssbhargav</p>
                    </div>
                  </a>
                </Magnetic>
              </Reveal>
              
              {/* Resume Download */}
              {resumeUrl && (
                <Reveal delay={0.6} y={20}>
                  <a 
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="VSS_Bhargav_Resume.pdf"
                    className="flex items-center justify-center gap-3 w-full py-5 bg-cream text-background rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(244,233,215,0.3)] hover:shadow-[0_0_30px_rgba(244,233,215,0.5)]"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
