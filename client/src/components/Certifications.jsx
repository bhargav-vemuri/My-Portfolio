import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

export function Certifications({ certifications }) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative w-full py-24 lg:py-32 border-t border-cream/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <div className="inline-block relative">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-cream tracking-tighter">
                Certifications<span className="text-terra">.</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="absolute -bottom-2 md:-bottom-4 left-0 h-[3px] md:h-[4px] bg-gradient-to-r from-terra via-sage to-transparent rounded-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <Reveal key={cert._id || index} delay={0.1 * index} y={30}>
              <div className="group relative h-full bg-[#1c1a19]/80 backdrop-blur-sm border border-cream/5 hover:border-sage/30 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(184,196,169,0.1)] hover:-translate-y-1 flex flex-col justify-between">
                
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage group-hover:scale-110 group-hover:bg-sage/20 transition-all duration-500">
                      <Award className="w-7 h-7" />
                    </div>
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cream/40 hover:text-terra transition-colors p-2 hover:bg-terra/10 rounded-full"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-cream tracking-tight mb-3">
                    {cert.title}
                  </h3>
                  
                  <div className="text-lg text-cream/70 font-medium">
                    {cert.issuer}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-cream/5 flex items-center justify-between">
                  <div className="text-sm font-mono tracking-wider text-slate-blue/80 uppercase">
                    {cert.date}
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-sage hover:text-cream transition-colors flex items-center gap-2 group-hover:underline underline-offset-4"
                    >
                      View Credential
                    </a>
                  )}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
