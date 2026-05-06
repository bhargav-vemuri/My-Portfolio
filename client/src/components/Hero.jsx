
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="text-center z-10 px-4"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-muted tracking-[0.2em] uppercase text-sm mb-6 font-mono"
        >
          Vemuri Sethu Sai Bhargav
        </motion.p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-tight">
          Engineering intelligent
          <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">systems.</span>
        </h1>
      </motion.div>

      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background pointer-events-none" />
    </section>
  );
}
