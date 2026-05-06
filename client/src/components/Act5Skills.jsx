
import { motion } from "framer-motion";
import { useRef } from "react";

export function Act5Skills({ skills = [] }) {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 px-4 overflow-hidden border-t border-muted/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/20 to-transparent pointer-events-none z-0" />
      
      <div className="max-w-4xl w-full text-center mb-16 z-10 relative">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-8 drop-shadow-md pb-2">Act V: The Armory</h2>
        <p className="text-muted max-w-lg mx-auto text-lg">Full-stack technologies and Machine Learning frameworks.</p>
      </div>
      
      <div className="relative w-full max-w-3xl flex flex-wrap justify-center items-center gap-4 z-10">
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 400, damping: 25, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -4, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="px-6 py-3 rounded-full border border-muted/20 text-foreground bg-white/5 backdrop-blur-md cursor-pointer transition-shadow duration-300 shadow-[0_0_10px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-accent/50"
            >
              <span className="font-sans text-lg">{skill}</span>
            </motion.div>
          );
        })}
      </div>
      
      {/* Cinematic glow sync */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
}
