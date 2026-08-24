import { motion } from "framer-motion";
import { useRef } from "react";

export function Skills({ skills = [] }) {
  const containerRef = useRef(null);

  // Group by exact category assigned by user, fallback to "General" only if empty
  const skillsByCategory = skills.reduce((acc, skill) => {
    const skillName = skill.name || skill;
    const cat = skill.category && skill.category.trim() !== "" ? skill.category : "General";
    
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skillName);
    return acc;
  }, {});

  return (
    <section id="skills" ref={containerRef} className="relative w-full flex flex-col items-center justify-center py-32 px-4 overflow-hidden border-t border-cream/5 bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 mb-16">
        <div className="flex flex-col items-center text-center pb-8 border-b border-cream/10 mb-8">
          <div className="relative inline-block">
            <h2 className="font-sans font-bold text-5xl md:text-6xl tracking-tight text-cream drop-shadow-lg">
              Skills & Technologies<span className="text-terra">.</span>
            </h2>
            <motion.div 
              initial={{ width: 0, left: "50%", x: "-50%" }}
              whileInView={{ width: "70%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute -bottom-3 h-[3px] bg-gradient-to-r from-transparent via-terra to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative z-10 w-full max-w-5xl px-4">
        {Object.entries(skillsByCategory).map(([category, catSkills], categoryIndex) => (
          <div key={category} className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h3 
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-terra font-mono text-sm tracking-[0.2em] uppercase font-semibold mb-6 border-b border-cream/10 pb-2 inline-block px-4"
            >
              {category}
            </motion.h3>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: categoryIndex * 0.1
                  }
                }
              }}
              className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4"
            >
              {catSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        filter: "blur(0px)",
                        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-6 py-3 rounded-full border border-cream/10 text-cream/80 bg-cream/5 backdrop-blur-md shadow-[0_4px_15px_rgba(23,21,20,0.2)] cursor-default transition-all duration-300 hover:shadow-[0_0_25px_rgba(184,196,169,0.5)] hover:border-sage hover:text-sage hover:bg-sage/10 font-medium text-sm md:text-base font-sans"
                  >
                    <span>{skill}</span>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
