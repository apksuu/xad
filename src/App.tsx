import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  Globe, 
  Code2, 
  Cpu, 
  Zap,
  Clock
} from 'lucide-react';

// --- Types ---
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: React.ReactNode;
}

// --- Constants ---
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aether Engine',
    description: 'A lightweight, high-performance rendering engine for web-based visualizations.',
    tags: ['TypeScript', 'WebGL', 'Rust'],
    link: '#',
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    id: '2',
    title: 'Flux Design System',
    description: 'A comprehensive UI library focused on accessibility and motion-first interactions.',
    tags: ['React', 'Tailwind', 'Motion'],
    link: '#',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: '3',
    title: 'Prism API',
    description: 'Distributed edge functions for real-time data processing and transformation.',
    tags: ['Go', 'Cloudflare', 'gRPC'],
    link: '#',
    icon: <Zap className="w-5 h-5" />,
  },
];

// --- Components ---

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div className="glass px-6 py-3 rounded-full flex items-center gap-8 text-sm font-medium">
      <a href="#home" className="hover:text-black/60 transition-colors">Home</a>
      <a href="#projects" className="hover:text-black/60 transition-colors">Projects</a>
      <a href="#about" className="hover:text-black/60 transition-colors">About</a>
      <div className="w-px h-4 bg-black/10" />
      <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:text-black/60 transition-colors">
        <Mail className="w-4 h-4" />
        Connect
      </a>
    </div>
  </nav>
);

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-3xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-2xl bg-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-500">
          {project.icon}
        </div>
        <a href={project.link} className="p-2 rounded-full hover:bg-black/5 transition-colors">
          <ExternalLink className="w-4 h-4 text-black/40" />
        </a>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-black/60 text-sm leading-relaxed mb-6">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 rounded-full bg-black/[0.03] text-[10px] uppercase tracking-wider font-bold text-black/40">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const StatusBadge = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 text-xs font-medium text-black/40 mb-8">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Available for projects</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-black/10" />
      <div className="flex items-center gap-1.5">
        <Clock className="w-3 h-3" />
        <span>{time} Local Time</span>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Nav />
      
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="home" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <StatusBadge />
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 max-w-3xl">
              Building digital experiences that feel <span className="text-black/40 italic font-serif">intentional</span> and precise.
            </h1>
            <p className="text-xl text-black/60 max-w-2xl leading-relaxed mb-10">
              I'm a software engineer and designer focused on creating tools that empower people. Currently exploring the intersection of AI, distributed systems, and human-centric design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-black/80 transition-all flex items-center gap-2 group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2">
                <a href="https://github.com" className="p-4 rounded-full border border-black/5 hover:bg-black/5 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="p-4 rounded-full border border-black/5 hover:bg-black/5 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-black/30 mb-4">Selected Works</h2>
              <h3 className="text-3xl font-semibold">Featured Projects</h3>
            </div>
            <a href="#" className="text-sm font-medium text-black/40 hover:text-black transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(project => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* About / Experience Section */}
        <section id="about" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-black/30 mb-6">About Me</h2>
              <p className="text-xl text-black/70 leading-relaxed mb-8">
                With over 8 years of experience in the industry, I've worked with startups and established companies to ship products that millions of people use every day.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center shrink-0">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Full-stack Development</h4>
                    <p className="text-sm text-black/50">Building robust backends and delightful frontends.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">System Architecture</h4>
                    <p className="text-sm text-black/50">Designing scalable and resilient cloud infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-12 rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold mb-6">Let's build something meaningful together.</h3>
                <p className="text-white/60 mb-10">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <a 
                  href="mailto:hello@example.com" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
                >
                  Get in touch
                </a>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-top border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-black/40">
            <div className="w-2 h-2 rounded-full bg-black/10" />
            <span>© 2024 Minimalist Hub. Built with precision.</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-black/40">
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">GitHub</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
