import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, CheckCircle2, Target, Lightbulb, ExternalLink } from "lucide-react";

export function Projects({ projects = [] }) {
  return (
    <section id="projects" className="relative w-full py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-cream/10 pb-8 mb-16">
          <div>
            <div className="relative inline-block">
              <h2 className="font-sans font-bold text-5xl md:text-6xl tracking-tight text-cream drop-shadow-lg">
                Things I've Built<span className="text-sage">.</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="absolute -bottom-3 left-0 h-[3px] bg-gradient-to-r from-sage to-transparent rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24 relative z-10">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
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
      <div className="max-w-[90rem] mx-auto w-full px-4 md:px-8">
        <motion.div 
          className="group/card flex flex-col xl:flex-row bg-cream/5 backdrop-blur-xl rounded-3xl border border-cream/10 shadow-[0_8px_32px_rgba(23,21,20,0.3)] hover:shadow-[0_16px_64px_rgba(217,125,85,0.15)] hover:border-cream/20 transition-all duration-500 overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-terra via-slate-blue to-sage opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 z-20" />
          
          {/* Left Column: 55% Width. Title + Edge-to-Edge Video */}
          <div className="xl:w-[55%] flex flex-col bg-background/40 border-b xl:border-b-0 xl:border-r border-cream/10 relative">
            
            <div className="p-8 xl:p-12 pb-6 xl:pb-8 flex justify-between items-start">
              <h3 className="font-sans font-bold text-3xl xl:text-4xl text-sage brightness-110 tracking-tight drop-shadow-md">{project.title}</h3>
              <p className="text-terra font-mono text-xs xl:text-sm bg-terra/10 border border-terra/20 px-3 py-1.5 rounded-full whitespace-nowrap ml-4">{project.year}</p>
            </div>

            {project.mediaUrl && (
              <div className="w-full aspect-video relative overflow-hidden bg-background shrink-0 mt-auto">
                {project.mediaUrl.toLowerCase().endsWith('.mp4') || project.mediaUrl.toLowerCase().endsWith('.webm') ? (
                  <video 
                    src={project.mediaUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
                  />
                ) : (
                  <img 
                    src={project.mediaUrl} 
                    alt={`${project.title} preview`} 
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-700" 
                  />
                )}
                <div className="absolute inset-0 border border-cream/10 pointer-events-none" />
              </div>
            )}
          </div>

          {/* Right Column: 45% Width. Matter + Buttons */}
          <div className="xl:w-[45%] p-8 xl:p-12 flex flex-col justify-center gap-8 bg-background/20">
            <div className="flex flex-col gap-6">
              <div className="relative pl-5 border-l-2 border-cream/10 hover:border-slate-blue transition-colors">
                <div className="absolute left-[-11px] top-0 bg-background rounded-full p-1 border border-cream/10 text-slate-blue">
                  <Target className="w-3 h-3" />
                </div>
                <h4 className="text-cream text-xs tracking-widest uppercase mb-2 font-mono font-semibold">Problem</h4>
                <p className="text-cream/80 leading-relaxed text-sm font-normal tracking-wide">{project.problem}</p>
              </div>
              
              <div className="relative pl-5 border-l-2 border-cream/10 hover:border-terra transition-colors">
                <div className="absolute left-[-11px] top-0 bg-background rounded-full p-1 border border-cream/10 text-terra">
                  <Lightbulb className="w-3 h-3" />
                </div>
                <h4 className="text-cream text-xs tracking-widest uppercase mb-2 font-mono font-semibold">Approach</h4>
                <p className="text-cream/80 leading-relaxed text-sm font-normal tracking-wide">{project.approach}</p>
              </div>
              
              <div className="relative pl-5 border-l-2 border-cream/10 hover:border-sage transition-colors">
                <div className="absolute left-[-11px] top-0 bg-background rounded-full p-1 border border-cream/10 text-sage">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <h4 className="text-cream text-xs tracking-widest uppercase mb-2 font-mono font-semibold">Impact</h4>
                <p className="text-cream/80 leading-relaxed text-sm font-normal tracking-wide">{project.impact}</p>
              </div>
            </div>

            {/* Buttons Bar Below Matter */}
            <div className="flex flex-wrap gap-4 pt-6 mt-2 border-t border-cream/10">
              {project.liveLink && (
                <a 
                  href={project.liveLink.startsWith('http') ? project.liveLink : `https://${project.liveLink}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 text-cream hover:text-sage transition-all w-max group/btn-live bg-cream/5 px-6 py-3 rounded-full border border-cream/10 hover:border-sage/30"
                >
                  <div className="p-1.5 rounded-full bg-sage/10 group-hover/btn-live:bg-sage/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-sage" />
                  </div>
                  <span className="tracking-widest uppercase text-xs font-mono font-semibold">Live Site</span>
                </a>
              )}

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-cream hover:text-terra transition-all w-max group/btn bg-cream/5 px-6 py-3 rounded-full border border-cream/10 hover:border-terra/30"
              >
                <div className="p-1.5 rounded-full bg-terra/10 group-hover/btn:bg-terra/20 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-terra" />
                </div>
                <span className="tracking-widest uppercase text-xs font-mono font-semibold">Repository</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
