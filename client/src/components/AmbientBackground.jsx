import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background">
      {/* Cinematic Film Grain Overlay for ultra-premium texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Ambient Light Orb 1: Terracotta */}
      <motion.div
        animate={{
          x: [0, 400, -200, 0],
          y: [0, -300, 200, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-terra opacity-25 blur-[100px] md:blur-[150px] mix-blend-screen will-change-transform"
      />
      
      {/* Ambient Light Orb 2: Slate Blue */}
      <motion.div
        animate={{
          x: [0, -400, 300, 0],
          y: [0, 400, -200, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-slate-blue opacity-25 blur-[120px] md:blur-[180px] mix-blend-screen will-change-transform"
      />
      
      {/* Ambient Light Orb 3: Sage Green (Center/Dynamic) */}
      <motion.div
        animate={{
          x: [0, 300, -400, 0],
          y: [0, -200, 300, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-sage opacity-30 blur-[100px] md:blur-[140px] mix-blend-screen will-change-transform"
      />
    </div>
  );
}
