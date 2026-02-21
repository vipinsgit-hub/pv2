import { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      imageRef.current.style.transform = `translate(${xPercent * 10}px, ${yPercent * 10}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24 lg:py-0">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 animate-fade-in-up">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Open to Internships & Entry-Level Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hey! I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Vipin</span>
              </h1>
            </div>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed">
              Cybersecurity Enthusiast <span className="text-muted-foreground">|</span>{' '}
              Full Stack Developer <span className="text-muted-foreground">|</span>{' '}
              <span className="text-primary">AI Learner & Researcher</span> <span className="text-muted-foreground">|</span>{' '}
              Psychology Explorer
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm a Computer Science student with a strong interest in full-stack development and cybersecurity. 
              I enjoy building real-world projects, securing systems, and continuously improving my technical, 
              communication, and analytical skills.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Theni, India
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="btn-glow bg-foreground text-background hover:bg-foreground/90 font-medium px-8"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/vipinsgit-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/b-vipin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://tryhackme.com/p/RIDERofBLUE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300"
                  aria-label="TryHackMe"
                >
                  <Shield className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div 
              ref={imageRef}
              className="relative transition-transform duration-300 ease-out"
            >
              {/* Image container with glow effect */}
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 rounded-3xl blur-2xl" />
                
                {/* Main image */}
                <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[430px] md:w-[380px] md:h-[510px] lg:w-[420px] lg:h-[560px] rounded-2xl overflow-hidden hero-image-container">
                  <img
                    src="/hero-portrait.jpg"
                    alt="Vipin - Portfolio Portrait"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-foreground/10" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-foreground/10 rounded-lg -z-10" />
                <div className="absolute -top-6 -right-6 w-16 h-16 border border-foreground/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
