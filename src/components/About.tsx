import { Globe2, Target, Users, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Serving clients across Latin America and worldwide with cutting-edge solutions"
    },
    {
      icon: Target,
      title: "Precision Delivery",
      description: "Every project crafted with attention to detail and delivered on time"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned developers, designers, and innovators working together"
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Leveraging the latest AI technologies to build smarter applications"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'var(--gradient-section)' }}>
      <div className="absolute inset-0 opacity-50" style={{ background: 'var(--gradient-mesh)' }} />
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div ref={elementRef} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the Future of{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a tech startup specializing in creating world-class digital experiences. 
            From complex web applications to engaging mobile apps, immersive games, professional video editing, 
            and compelling content writing - we transform ideas into reality with cutting-edge technology and creative excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-gradient-card backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-glow-cyan hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                animation: 'float 6s ease-in-out infinite',
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-card backdrop-blur-sm border border-accent/20 shadow-glow-blue">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower businesses worldwide with intelligent, scalable, and beautifully crafted digital solutions. 
              We believe in the power of technology to transform industries and improve lives. With a strong focus on 
              Latin America while serving clients globally, we're committed to delivering excellence in every line of code, 
              every design element, and every user interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
