
import { motion } from "framer-motion";

export function EndCredits() {
  return (
    <section className="relative min-h-[50vh] w-full flex flex-col items-center justify-center overflow-hidden border-t border-muted/10 pb-24">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4 mb-16"
      >
        <p className="text-muted font-mono text-sm tracking-[0.2em] uppercase mb-8">End Credits</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Great systems aren&apos;t just designed.</h2>
        <h2 className="font-serif text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 pb-2">They&apos;re built. Let&apos;s build the next one.</h2>
      </motion.div>

      <div className="absolute bottom-8 left-0 w-full text-center text-muted/50 text-sm font-mono z-10 flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} — Directed by Vemuri Sethu Sai Bhargav</p>
        <a href="/admin/login" className="hover:text-accent transition-colors opacity-50 hover:opacity-100 text-xs">Admin Access</a>
      </div>
    </section>
  );
}
