import { motion } from "framer-motion";

export function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit"
    >
      <div className="flex items-center justify-center gap-1 sm:gap-4 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wide text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
