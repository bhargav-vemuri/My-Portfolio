

export function Footer() {
  return (
    <section className="relative w-full py-16 border-t border-cream/10 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        <div className="flex items-center gap-4">
          <p className="text-cream/60 font-mono text-sm">
            © {new Date().getFullYear()} VSS Bhargav. All rights reserved.
          </p>
          <a href="/admin/login" className="text-cream/40 hover:text-terra transition-colors opacity-70 hover:opacity-100 text-xs font-mono">
            [Admin Access]
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/bhargav-vemuri" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-terra transition-colors font-mono text-sm uppercase tracking-widest">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vssbhargav" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-sage transition-colors font-mono text-sm uppercase tracking-widest">
            LinkedIn
          </a>
          <a href="mailto:bhargavvemuri79@gmail.com" className="text-cream/60 hover:text-slate-blue transition-colors font-mono text-sm uppercase tracking-widest">
            Email
          </a>
        </div>

      </div>
    </section>
  );
}
