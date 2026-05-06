
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function Act2Projects({ projects = [] }) {
  return (
    <section className="relative w-full pt-24 pb-48">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24 relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 drop-shadow-md pb-2">Act II: The Work</h2>
        <p className="text-muted text-lg mt-8 max-w-md mx-auto">Scene breakdowns of defining projects.</p>
      </div>

      <div className="flex flex-col gap-32 relative z-10">
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
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="relative w-full flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-8 flex flex-col gap-12 pb-32">
        
        {/* Header section */}
        <div className="text-center flex flex-col items-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 font-mono text-sm mb-4 tracking-widest uppercase pb-1">SCENE {String(index + 1).padStart(2, '0')}</p>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 drop-shadow-sm">{project.title}</h3>
          <p className="text-muted font-mono tracking-wider">{project.year}</p>
        </div>

        {/* 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4">
          <motion.div whileHover={{ y: -10 }} className="bg-background/40 backdrop-blur-sm p-8 rounded-2xl border border-muted/10 shadow-xl transition-all duration-500 hover:border-accent/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default">
            <h4 className="text-foreground text-sm tracking-widest uppercase mb-4 text-accent/80 font-mono">Problem</h4>
            <p className="text-muted leading-relaxed text-sm md:text-base">{project.problem}</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-background/40 backdrop-blur-sm p-8 rounded-2xl border border-muted/10 shadow-xl transition-all duration-500 hover:border-accent/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default">
            <h4 className="text-foreground text-sm tracking-widest uppercase mb-4 text-accent/80 font-mono">Approach</h4>
            <p className="text-muted leading-relaxed text-sm md:text-base">{project.approach}</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-background/40 backdrop-blur-sm p-8 rounded-2xl border border-muted/10 shadow-xl transition-all duration-500 hover:border-accent/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default">
            <h4 className="text-foreground text-sm tracking-widest uppercase mb-4 text-accent/80 font-mono">Impact</h4>
            <p className="text-muted leading-relaxed text-sm md:text-base">{project.impact}</p>
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-4">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-all px-8 py-4 border border-muted/20 rounded-full hover:border-accent/50 hover:bg-accent/5 group bg-background/50 backdrop-blur-sm shadow-lg"
          >
            <span className="tracking-widest uppercase text-sm font-mono">View Repository</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
    </motion.div>
  );
}
