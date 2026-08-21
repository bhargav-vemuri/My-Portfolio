import { motion } from "framer-motion";

export function Education({ education = [] }) {
  return (
    <section id="education" className="relative w-full py-32 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16">
          <div>
            <p className="text-emerald-400 tracking-[0.2em] uppercase text-xs font-mono font-semibold mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">Education</p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-white drop-shadow-lg">Academic Background</h2>
          </div>
        </div>
        
        <div className="relative space-y-8 w-full max-w-4xl mx-auto">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[8px] md:left-[35px] top-0 bottom-0 w-[1px] bg-white/10" />

          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pl-8 md:pl-20 group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full left-[2px] md:left-[28px] top-1.5 md:top-2 bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10 transition-transform duration-300 group-hover:scale-125" />
              
              <div className="md:col-span-3 pt-1">
                <p className="text-slate-400 font-mono text-xs uppercase tracking-widest bg-white/5 inline-block px-3 py-1 rounded-full border border-white/5">{edu.period}</p>
              </div>
              <div className="md:col-span-9 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-white/10 group-hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl text-white font-bold mb-2 tracking-tight drop-shadow-sm">{edu.degree}</h3>
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-medium mb-4 text-xs md:text-sm uppercase tracking-widest font-mono">{edu.school}</h4>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal tracking-wide">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
