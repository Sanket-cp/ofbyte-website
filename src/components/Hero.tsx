import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      imageRef.current.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.02)`;
    };

    // Add floating elements animation
    const floatingElements = floatingElementsRef.current?.children;
    if (floatingElements) {
      Array.from(floatingElements).forEach((element, index) => {
        const el = element as HTMLElement;
        const duration = 3 + (index * 0.5);
        const delay = index * 0.2;
        
        el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pb-0">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 md:top-20 right-5 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      </div>
      
      {/* Theme Image with Parallax Effect */}
      <div 
        ref={imageRef}
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
          filter: 'brightness(0.8) contrast(1.2)',
        }}
      />

      {/* Animated Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-primary/20 rounded-full" />
        <div className="absolute top-3/4 right-1/5 w-8 h-8 bg-blue-500/15 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-cyan-500/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-indigo-500/10 rounded-full" />
        <div className="absolute top-1/6 right-1/4 w-5 h-5 bg-primary/15 rounded-full" />
      </div>

      {/* Mesh gradient overlay with animation */}
      <div 
        className="absolute inset-0 opacity-40 animate-gradient-x"
        style={{ 
          background: 'linear-gradient(90deg, #0f172a, #1e293b, #0f172a)',
          backgroundSize: '200% 200%',
        }} 
      />

      {/* Glassmorphism Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-bounce-subtle">
              <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
              <span className="text-sm font-medium text-primary">Innovative Software Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight tracking-tight animate-slide-up">
              OFBYTE
              <br />
              <span className="text-primary animate-color-shift text-2xl sm:text-3xl md:text-5xl lg:text-7xl">Building digital experiences — from code to creativity.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Ofbyte builds powerful web apps, mobile apps, games, AI tools, creates stunning videos, and crafts compelling content for businesses around the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2 sm:px-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-primary hover:bg-primary/90 text-primary-foreground group animate-pulse-gentle"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6 border-primary/30 hover:bg-primary/10 hover:border-primary animate-pulse-gentle"
                style={{ animationDelay: '0.1s' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>

            {/* Stats with enhanced animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8 mt-8 md:mt-12 lg:mt-16 px-2">
              {[
                { value: '25+', label: 'Projects Delivered' },
                { value: '15+', label: 'Happy Clients' },
                { value: '8+', label: 'Countries Served' },
                { value: '2+', label: 'Years Experience' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="animate-scale-in p-2 sm:p-3 md:p-4 hover:scale-105 md:hover:scale-110 transition-transform duration-300 cursor-pointer group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 group-hover:animate-bounce">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes color-shift {
          0%, 100% {
            filter: hue-rotate(0deg);
          }
          50% {
            filter: hue-rotate(15deg);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        
        .animate-color-shift {
          animation: color-shift 8s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .glass-card {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(17, 25, 40, 0.75);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
      `}</style>
    </section>
  );
};
export default Hero;