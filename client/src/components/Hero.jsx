import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ 
          y: y1, 
          opacity,
        }}
        className="text-center z-10 px-4 flex flex-col items-center mt-16 md:mt-24"
      >
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-terra tracking-[0.4em] uppercase text-xs md:text-sm font-medium font-mono"
          >
            Vemuri Sethu Sai Bhargav
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-4 relative z-10 w-full max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold font-sans tracking-tighter text-cream flex flex-col items-center gap-3 md:gap-5 leading-[0.9] drop-shadow-2xl"
          >
            <span className="relative z-10">Engineering</span>
            <span className="flex flex-col md:flex-row items-baseline gap-4 md:gap-6">
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-br from-cream via-terra to-sage lowercase pr-2 pb-6 -mb-6">
                intelligent
              </span>
              <span className="relative z-20">systems.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="text-cream/80 font-medium tracking-[0.05em] md:tracking-[0.1em] max-w-3xl text-center mt-12 md:mt-16 px-4 text-xl md:text-2xl lg:text-3xl"
          >
            Where thoughtful engineering meets practical AI.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mt-24"
        >
          <a 
            href="#about"
            className="group flex flex-col items-center gap-4 text-cream/40 hover:text-terra transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-medium">Scroll to explore</span>
            <div className="w-[1px] h-20 bg-cream/10 group-hover:bg-terra/30 transition-colors relative overflow-hidden">
              <motion.div 
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-terra to-transparent"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle bottom gradient to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
