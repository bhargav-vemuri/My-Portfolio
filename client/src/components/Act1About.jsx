
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8c.16-.4.65-2.03-.15-3.8s-2.06-.6-3.8 1.15a13.3 13.3 0 0 0-7 0C6.16 3.6 4.6 4 4.6 4s-.31 1.63-.15 3.8a5.2 5.2 0 0 0-1.5 3.8c0 5.76 3.35 6.79 6.5 7.16A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Act1About() {
  return (
    <section className="relative w-full py-32 border-t border-muted/10">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-12 drop-shadow-md pb-2">Act I: About Me</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-xl text-muted leading-relaxed mb-6">
            I am a developer driven by the intersection of AI, machine learning, and full-stack engineering. 
            My work focuses on crafting systems that are not only architecturally robust but also deliver 
            seamless, highly optimized user experiences. I specialize in building solutions that bridge 
            the gap between complex data pipelines and elegant, user-centric interfaces.
          </p>
          <p className="text-xl text-muted leading-relaxed mb-8">
            Currently pursuing my B.Tech in CSE with a specialization in AI & ML, I thrive in environments that challenge me to push technical boundaries. Whether I'm optimizing algorithms or designing high-performance React architectures, my goal is always to engineer products that create tangible, real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 border-t border-muted/20 pt-12">
            <a 
              href="mailto:bhargavvemuri79@gmail.com" 
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-muted/30 text-foreground hover:bg-white/10 hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>bhargavvemuri79@gmail.com</span>
            </a>
            <a 
              href="tel:8309942627" 
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-muted/30 text-foreground hover:bg-white/10 hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>+91 8309942627</span>
            </a>
            
            <div className="flex gap-6 sm:ml-auto mt-6 sm:mt-0">
              <a href="https://github.com/bhargav-vemuri" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/vssbhargav" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
