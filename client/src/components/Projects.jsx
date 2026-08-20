import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, CheckCircle2, Target, Lightbulb, ExternalLink } from "lucide-react";

export function Projects({ projects = [] }) {
  return (
    <section id="projects" className="relative w-full py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24 relative z-10">
        <div className="flex flex-col border-b border-white/10 pb-8">
          <p className="text-cyan-400 tracking-[0.2em] uppercase text-xs font-mono font-semibold mb-4 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">Projects</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-white drop-shadow-lg">Things I've Built</h2>
        </div>
      </div>

      <div className="flex flex-col gap-24 relative z-10">
        {projects.map((project, idx) => (
          <ProjectScene key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectScene({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div ref={ref} style={{ opacity, y, scale }} className="relative w-full flex flex-col items-center group">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <motion.div 
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden relative transition-all duration-500 group-hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] group/card flex flex-col md:flex-row"
        >
          
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
          
          {/* Header/Title/Media Area */}
          <div className="md:w-1/2 lg:w-2/5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between bg-black/20">
            <div>
              <h3 className="font-sans font-bold text-3xl md:text-4xl text-white tracking-tight mb-4 drop-shadow-md">{project.title}</h3>
              <p className="text-slate-400 font-mono text-sm bg-white/5 inline-block px-3 py-1 rounded-full mb-8">{project.year}</p>
              
              {project.mediaUrl && (
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-8 bg-black/40 aspect-video relative group/media">
                  <img src={project.mediaUrl} alt={`${project.title} preview`} className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-all duration-700 group-hover/media:scale-105" />
                  <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
                </div>
              )}
            </div>
            
            <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 mt-6">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 text-white hover:text-emerald-400 transition-all w-max group/btn-live"
                >
                  <div className="p-2 rounded-full bg-emerald-400/10 group-hover/btn-live:bg-emerald-400/20 border border-emerald-400/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-emerald-400 group-hover/btn-live:-translate-y-0.5 group-hover/btn-live:translate-x-0.5 transition-transform" />
                  </div>
                  <span className="tracking-widest uppercase text-xs font-mono font-semibold">Live Site</span>
                </a>
              )}

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-white hover:text-cyan-400 transition-all w-max group/btn"
              >
                <div className="p-2 rounded-full bg-white/10 group-hover/btn:bg-cyan-400/20 transition-colors border border-transparent group-hover/btn:border-cyan-400/20">
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </div>
                <span className="tracking-widest uppercase text-xs font-mono font-semibold">View Repository</span>
              </a>
            </div>
          </div>

          {/* Details Area */}
          <div className="md:w-1/2 lg:w-3/5 p-8 md:p-12 flex flex-col justify-center gap-10">
            <div className="relative pl-6 border-l-2 border-white/10 hover:border-blue-400 transition-colors">
              <div className="absolute left-[-11px] top-0 bg-background rounded-full p-1 border border-white/10 text-blue-400">
                <Target className="w-3 h-3" />
              </div>
              <h4 className="text-white text-xs tracking-widest uppercase mb-3 font-mono font-semibold">Problem</h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light">{project.problem}</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-white/10 hover:border-cyan-400 transition-colors">
              <div className="absolute left-[-11px] top-0 bg-background rounded-full p-1 border border-white/10 text-cyan-400">
                <Lightbulb className="w-3 h-3" />
              </div>
              <h4 className="text-white text-xs tracking-widest uppercase mb-3 font-mono font-semibold">Approach</h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light">{project.approach}</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-white/10 hover:border-emerald-400 transition-colors">
              <div className="absolute left-[-11px] top-0 bg-background rounded-full p-1 border border-white/10 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <h4 className="text-white text-xs tracking-widest uppercase mb-3 font-mono font-semibold">Impact</h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light">{project.impact}</p>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
