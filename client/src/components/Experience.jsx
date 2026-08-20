import { motion } from "framer-motion";

export function Experience({ experience = [] }) {
  return (
    <section id="experience" className="relative w-full py-32 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16">
          <div>
            <p className="text-blue-400 tracking-[0.2em] uppercase text-xs font-mono font-semibold mb-4 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">Experience</p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-white drop-shadow-lg">Professional Journey</h2>
          </div>
        </div>
        
        <div className="relative space-y-12 w-full max-w-5xl mx-auto">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[8px] md:left-[35px] top-0 bottom-0 w-[1px] bg-white/10" />

          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pl-8 md:pl-20 group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full left-0 md:left-[28px] top-1 md:top-2 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 transition-transform duration-300 group-hover:scale-125" />
              
              <div className="md:col-span-3 pt-1">
                <p className="text-slate-400 font-mono text-xs uppercase tracking-widest bg-white/5 inline-block px-3 py-1 rounded-full border border-white/5">{exp.period}</p>
              </div>
              <div className="md:col-span-9 bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-white/10 group-hover:-translate-y-1">
                <h3 className="text-2xl md:text-3xl text-white font-bold mb-2 tracking-tight drop-shadow-sm">{exp.role}</h3>
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium mb-6 text-sm uppercase tracking-widest font-mono">{exp.company}</h4>
                <p className="text-slate-300 leading-relaxed text-sm md:text-lg font-light">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
