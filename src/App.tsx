import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { portfolioData } from './data/portfolio';
import { cn } from './lib/utils';

// --- Shared Components ---

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-20 px-6 md:px-12 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono uppercase tracking-widest text-[#F4F4F5]">
    {children}
  </span>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
      isScrolled ? "bg-black/90 backdrop-blur-sm border-b border-white/5 py-4" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          lfvilella<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 hover:text-white transition-colors"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono uppercase tracking-widest text-zinc-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const quickProjects = portfolioData.projects.slice(0, 3);

  return (
    <Section className="min-h-screen flex items-center pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start w-full">
        {/* Left Col: Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="dot animate-pulse"></div>
            <span className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.3em]">Available for new challenges</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.85] text-white">
            LUIS FELIPE<br />
            VILELLA<span className="text-blue-500 text-5xl md:text-7xl">_</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-md leading-relaxed font-light">
            Senior Software Engineer who goes after <span className="text-white font-medium">real problems</span>—whatever shape or complexity they take—and <span className="text-white font-medium">gets them done</span>. When the straight path hits a wall, I work around it and keep shipping.
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Right Col: Selected Works Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 flex flex-col gap-6"
        >
          <div className="flex justify-between items-end mb-2">
            <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
              Quick Access ({String(quickProjects.length).padStart(2, '0')})
            </h2>
            <div className="h-px flex-grow mx-6 mb-1 bg-zinc-900"></div>
          </div>

          {quickProjects.map((project, i) => (
            <a
              key={project.title}
              href={`#project-${i}`}
              className="project-card p-6 rounded-sm bg-zinc-900/20 border border-white/5 hover:border-blue-500/30 group transition-all duration-300 block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-xs text-zinc-500 mb-4 line-clamp-1">{project.description}</p>
                  <div className="flex gap-4">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] font-mono text-zinc-600 group-hover:text-blue-500 transition-colors uppercase">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-2 border border-zinc-800 rounded group-hover:bg-zinc-800 transition-colors">
                  <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const About = () => {
  return (
    <Section id="about" className="relative border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-6">The Story</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight tracking-tight">{portfolioData.about.title}</h3>
          <p className="text-zinc-400 leading-relaxed max-w-xl font-light">
            {portfolioData.about.story}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">Exp Years</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">Prod Apps</div>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:block">
          <div className="p-12 border border-zinc-900 rounded-lg relative overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <pre className="text-xs font-mono text-zinc-500">
              <code>{`class Engineer:
    def __init__(self):
        self.name = "Luis Felipe Vilella"
        self.focus = ["Resolving Problems", "Product Owner Vision"]
        self.mindset = "Deep work"

# Initialize...`}</code>
            </pre>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Stack = () => {
  return (
    <Section id="stack" className="border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">Core Stack</h2>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Mastery.</h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioData.skills.map((skill, idx) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-8 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-blue-500/20 group transition-all"
          >
            <div className="mb-6 text-zinc-600 group-hover:text-blue-500 transition-colors">
              <skill.icon size={20} />
            </div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] mb-6 text-zinc-400 group-hover:text-white transition-colors">{skill.category}</h4>
            <div className="flex flex-col gap-3">
              {skill.items.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-zinc-800 rounded-full group-hover:bg-blue-500 transition-colors" />
                  <span className="text-sm font-light text-zinc-500 group-hover:text-zinc-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Projects = () => {
  return (
    <Section id="projects" className="border-t border-white/5">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">Engineering Impact</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Case Studies.</h3>
        </div>
      </div>

      <div className="grid gap-8">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            id={`project-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="project-card p-1 items-start rounded-sm overflow-hidden"
          >
            <div className="p-8 md:p-12 bg-[#050505]">
              <div className="space-y-8 max-w-4xl">
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h4>
                  <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">{project.tagline}</p>
                </div>

                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-zinc-900">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-600 block mb-2 tracking-widest">Problem</span>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-blue-500 block mb-2 tracking-widest">Impact</span>
                    <p className="text-sm text-white leading-relaxed font-medium">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map(t => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Experience = () => {
  return (
    <Section id="experience" className="border-t border-white/5">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
        <div>
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">Experience</h2>
          <h3 className="text-3xl font-bold tracking-tight mb-8">Career Trajectory.</h3>
          <p className="text-zinc-500 text-sm leading-relaxed font-light">
            Focusing on long-term value, sustainable architecture, and technical leadership across diverse domains.
          </p>
        </div>

        <div className="space-y-20">
          {portfolioData.experience.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border-l-2 border-zinc-900 pl-10 relative"
            >
              <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{exp.company}</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-600 tracking-widest">{exp.period}</span>
              </div>

              <div className="space-y-6">
                {exp.achievements.map((achievement, i) => (
                  <p key={i} className="text-sm text-zinc-400 font-light leading-relaxed italic border-b border-zinc-900/50 pb-4 last:border-0">
                    "{achievement}"
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section id="contact" className="border-t border-white/5 pt-32 pb-40">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-8">Contact Initiation</h2>
        <h3 className="text-5xl md:text-7xl font-black mb-16 tracking-tight leading-[0.9]">CRAFTED WITH<br />PRECISION.</h3>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${portfolioData.email}`}
            className="px-12 py-6 bg-white text-black font-bold text-xs uppercase tracking-[0.3em] rounded-sm hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Start a Thread
          </a>
          <div className="flex gap-2">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="p-6 bg-zinc-950 border border-zinc-900 rounded-sm text-zinc-500 hover:text-blue-400 transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-40 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-end gap-10 w-full">
        <div className="text-xl font-bold tracking-tighter text-zinc-800">
          lfvilella<span className="text-blue-500/50">.</span>
        </div>
        <div className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.4em]">
          {new Date().getFullYear()}
        </div>
      </footer>
    </Section>
  );
};

// --- App Root ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Cursor Follower (Optional - can be added here) */}
    </div>
  );
}
