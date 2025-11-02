import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "CEO, TechVentures México",
      country: "🇲🇽 Mexico",
      content: "Working with this team has been transformative for our business. They delivered a world-class platform that exceeded all our expectations. Their expertise in AI integration is truly impressive.",
      rating: 5
    },
    {
      name: "Ana Silva",
      role: "Product Director, Innovate Brasil",
      country: "🇧🇷 Brazil",
      content: "The mobile app they developed for us has been a game-changer. Beautiful design, flawless performance, and delivered ahead of schedule. Highly recommended!",
      rating: 5
    },
    {
      name: "Diego Fernández",
      role: "Founder, GameStudio AR",
      country: "🇦🇷 Argentina",
      content: "Their game development expertise is unmatched. They brought our vision to life with stunning graphics and smooth gameplay. Professional, responsive, and talented team.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div ref={elementRef} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-accent bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of the amazing clients we've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-gradient-card backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-glow-cyan hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                animation: 'float 6s ease-in-out infinite',
                animationDelay: `${index * 0.6}s`
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-accent mt-1">{testimonial.country}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">4.8/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">15+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">25+</div>
            <div className="text-sm text-muted-foreground">Projects Done</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
