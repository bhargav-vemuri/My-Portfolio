
import { motion } from "framer-motion";

export function Act3Experience({ experience = [] }) {
  return (
    <section className="relative w-full py-32 border-t border-muted/10">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-16 drop-shadow-md text-center pb-2">Act III: The Journey</h2>
        
        <div className="relative space-y-16">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-muted/30" />

          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 pl-8 md:pl-10 py-2 relative"
            >
              <div className="absolute w-3 h-3 bg-gradient-to-r from-accent to-purple-400 rounded-full left-0 top-4 shadow-[0_0_15px_rgba(56,189,248,0.5)] z-10" />
              <div className="md:col-span-1 pt-1">
                <p className="text-muted font-mono text-sm">{exp.period}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl text-foreground font-medium mb-1">{exp.role}</h3>
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-muted leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
