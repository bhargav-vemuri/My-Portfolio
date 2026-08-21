

export function Footer() {
  return (
    <section className="relative w-full py-16 border-t border-white/10 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        <div className="flex items-center gap-4">
          <p className="text-slate-400 font-mono text-sm">
            © {new Date().getFullYear()} VSS Bhargav. All rights reserved.
          </p>
          <a href="/admin/login" className="text-slate-500 hover:text-cyan-400 transition-colors opacity-70 hover:opacity-100 text-xs font-mono">
            [Admin Access]
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/bhargav-vemuri" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-widest">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vssbhargav" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-mono text-sm uppercase tracking-widest">
            LinkedIn
          </a>
          <a href="mailto:bhargavvemuri79@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-sm uppercase tracking-widest">
            Email
          </a>
        </div>

      </div>
    </section>
  );
}
