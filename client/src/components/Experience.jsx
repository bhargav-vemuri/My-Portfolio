import { motion } from "framer-motion";

export function Experience({ experience = [] }) {
  return (
    <section id="experience" className="relative w-full py-32 bg-transparent border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-cream/10 pb-8 mb-16">
          <div>
            <div className="relative inline-block">
              <h2 className="font-sans font-bold text-5xl md:text-6xl tracking-tight text-cream drop-shadow-lg">
                Experience<span className="text-slate-blue">.</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="absolute -bottom-3 left-0 h-[3px] bg-gradient-to-r from-slate-blue to-transparent rounded-full"
              />
            </div>
          </div>
        </div>
        
        <div className="relative space-y-8 w-full max-w-4xl mx-auto">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[8px] md:left-[35px] top-0 bottom-0 w-[1px] bg-cream/10" />

          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pl-8 md:pl-20 group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full left-[2px] md:left-[28px] top-1.5 md:top-2 bg-gradient-to-r from-terra to-slate-blue shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 transition-transform duration-300 group-hover:scale-125" />
              
              <div className="md:col-span-3 pt-1">
                <p className="text-cream/60 font-mono text-xs uppercase tracking-widest bg-cream/5 inline-block px-3 py-1 rounded-full border border-cream/5">{exp.period}</p>
              </div>
              <div className="md:col-span-9 bg-cream/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-cream/10 shadow-[0_8px_32px_rgba(23,21,20,0.3)] transition-all duration-300 group-hover:border-slate-blue/30 group-hover:bg-cream/10 group-hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl text-cream font-bold mb-2 tracking-tight drop-shadow-sm">{exp.role}</h3>
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-terra to-slate-blue font-medium mb-4 text-xs md:text-sm uppercase tracking-widest font-mono">{exp.company}</h4>
                <p className="text-cream/80 leading-relaxed text-sm md:text-base font-normal tracking-wide">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
