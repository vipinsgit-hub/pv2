import { useEffect, useRef, useState } from 'react';
import { Shield, Code, Brain, Lock } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building complete applications from frontend to backend with end-to-end understanding',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Focus',
    description: 'Protecting systems through vulnerability assessment, penetration testing, and security analysis',
  },
  {
    icon: Brain,
    title: 'Psychology & Leadership',
    description: 'Understanding human behavior to improve communication, leadership, and security awareness',
  },
  {
    icon: Lock,
    title: 'Continuous Growth',
    description: 'Improving mentally, physically, and professionally every single day',
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Get to know me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">About Me</h2>
          <div className="w-20 h-1 bg-foreground/20 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Story */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I chose <span className="text-primary font-medium">full-stack development</span> because I enjoy building 
                complete applications from frontend to backend and understanding how systems work end-to-end. 
                Alongside development, I'm deeply interested in <span className="text-primary font-medium">cybersecurity</span>, 
                as protecting systems is just as important as building them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm also passionate about <span className="text-primary font-medium">psychology</span>, since understanding 
                human behavior improves leadership, communication, and security awareness—especially in areas like social engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm learning full-stack development, data structures, networking, Linux, and core cybersecurity 
                concepts, while also studying mindset and human behavior.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to start my career in roles such as <span className="text-primary font-medium">Software Developer</span> or{' '}
                <span className="text-primary font-medium">SOC Analyst</span>, and grow into an{' '}
                <span className="text-primary font-medium">Information Security Consultant</span>. My mission is to build secure, 
                impactful systems and improve myself mentally, physically, and professionally every single day.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/30">
                <div className="text-2xl md:text-3xl font-bold text-foreground">2nd</div>
                <div className="text-xs text-muted-foreground mt-1">Year Student</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/30">
                <div className="text-2xl md:text-3xl font-bold text-foreground">6+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/30">
                <div className="text-2xl md:text-3xl font-bold text-foreground">3+</div>
                <div className="text-xs text-muted-foreground mt-1">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="skill-card group p-6 rounded-2xl bg-card border border-border/50 hover:border-foreground/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <item.icon className="h-6 w-6 text-foreground/80" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
