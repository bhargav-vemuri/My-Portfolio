import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: y1, opacity }}
        className="text-center z-10 px-4 flex flex-col items-center"
      >
        <div className="overflow-hidden mb-8">
          <motion.p
            variants={item}
            className="text-cyan-400 tracking-[0.3em] uppercase text-xs md:text-sm font-medium font-mono drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          >
            Vemuri Sethu Sai Bhargav
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-1 md:gap-4 font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.1] drop-shadow-2xl">
          <div className="overflow-hidden py-2">
            <motion.h1 variants={item}>
              Engineering
            </motion.h1>
          </div>
          <div className="overflow-hidden py-2">
            <motion.h1 variants={item} className="flex items-center justify-center">
              <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 pr-3 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">intelligent</span>
              systems.
            </motion.h1>
          </div>
        </div>
        
        <div className="overflow-hidden mt-8 max-w-2xl">
          <motion.p variants={item} className="text-slate-300 text-base md:text-lg lg:text-xl font-light">
            I build scalable distributed backend services and high-performance applications designed for impact.
          </motion.p>
        </div>

        <div className="overflow-hidden mt-20">
          <motion.div variants={item}>
            <motion.a 
              href="#about"
              whileHover={{ y: 5 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="group flex flex-col items-center gap-4 text-white/50 hover:text-cyan-400 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest font-mono font-medium">Explore Work</span>
              <div className="w-[2px] h-16 bg-white/10 group-hover:bg-cyan-400/30 transition-colors relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle bottom gradient to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
