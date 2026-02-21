import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, FolderGit2, TrendingUp, Calendar, Search, Shield, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Management App',
    description: 'A full-stack team project management system with task tracking, role-based access control, and workflow organization. Built with secure authentication and seamless frontend–backend integration. Demonstrates strong API design and database management skills.',
    icon: FolderGit2,
    tags: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'REST APIs'],
    github: 'https://github.com/vipinsgit-hub',
    demo: null,
    featured: true,
  },
  {
    title: 'FinWise AI',
    description: 'A personal finance assistant that tracks income and expenses while generating a financial health score. Uses rule-based insights and interactive dashboards. Demonstrates backend logic, data handling, and product thinking.',
    icon: TrendingUp,
    tags: ['React', 'Python', 'FastAPI', 'Chart.js', 'Data Analysis'],
    github: 'https://github.com/vipinsgit-hub',
    demo: null,
    featured: true,
  },
  {
    title: 'Smart Timetable Generator',
    description: 'An automated timetable generation system that resolves scheduling conflicts using constraint-based logic. Focuses on optimization and algorithmic problem-solving. Highlights strong programming fundamentals.',
    icon: Calendar,
    tags: ['Python', 'Algorithms', 'Constraint Logic', 'Data Structures'],
    github: 'https://github.com/vipinsgit-hub',
    demo: null,
    featured: false,
  },
  {
    title: 'ProxLab',
    description: 'A BLE-based proximity security system that automatically locks a device when an authorized mobile moves out of range. Uses RSSI-based distance authentication. Demonstrates IoT and endpoint security concepts.',
    icon: Lock,
    tags: ['BLE', 'Python', 'Kotlin', 'Windows API', 'Linux', 'IoT'],
    github: 'https://github.com/vipinsgit-hub',
    demo: null,
    featured: false,
  },
  {
    title: 'ASAP App (OSINT Monitor)',
    description: 'An OSINT monitoring tool that tracks keywords across public sources and generates alerts. Automates intelligence gathering and filtering. Demonstrates security automation and monitoring logic.',
    icon: Search,
    tags: ['Python', 'Web Scraping', 'REST APIs', 'Background Jobs'],
    github: 'https://github.com/vipinsgit-hub',
    demo: null,
    featured: false,
  },
  {
    title: 'Home Security Lab',
    description: 'A self-built cybersecurity lab for practicing vulnerability assessment, network scanning, and log analysis. Simulates real-world attack and defense scenarios. Strengthens hands-on security skills.',
    icon: Shield,
    tags: ['Linux', 'Nmap', 'Wireshark', 'OpenVAS', 'SSH', 'Kali Linux'],
    github: 'https://github.com/vipinsgit-hub',
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-secondary/15 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">My work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Featured Projects</h2>
          <div className="w-20 h-1 bg-foreground/20 mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of my full-stack development and cybersecurity projects, 
            showcasing my skills in building secure and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card group relative rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Header with Icon */}
              <div className="relative h-48 bg-gradient-to-br from-secondary/50 to-secondary/20 flex items-center justify-center overflow-hidden">
                {/* Background pattern */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border border-border/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <project.icon className="h-10 w-10 text-foreground/70" />
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-foreground/10 text-foreground border-0">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border/50 hover:bg-secondary/50"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border/50 hover:bg-secondary/50"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            variant="outline"
            size="lg"
            className="border-border/50 hover:bg-secondary/50"
            asChild
          >
            <a
              href="https://github.com/vipinsgit-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
