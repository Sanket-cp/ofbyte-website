import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Online Learning Platform",
      description: "Interactive e-learning platform with course management, live sessions, and progress tracking",
      image: project1,
      tags: ["React", "TypeScript", "WebRTC", "PostgreSQL"],
      demoUrl: "https://eduscape-iota.vercel.app/",
      githubUrl: ""
    },
    {
      title: "Logo Design Portfolio",
      description: "Professional logo designs and brand identity solutions for various clients and industries",
      image: project2,
      tags: ["Logo Design", "Brand Identity", "Adobe Illustrator", "Figma"],
      demoUrl: "public/Demo Posters & Logos _20251103_112451_0000.pdf",
      githubUrl: ""
    },
    {
      title: "Immersive 3D Game",
      description: "Multiplayer sci-fi adventure game with stunning graphics and engaging storyline",
      image: project3,
      tags: ["Unity", "C#", "WebGL", "Photon"],
      demoUrl: "https://glittery-travesseiro-9e6ba4.netlify.app/",
      githubUrl: ""
    },
    {
      title: "Jiro – AI Companion",
      description: "Intelligent AI companion with natural language processing and personalized interactions",
      image: project4,
      tags: ["AI", "OpenAI", "React", "TypeScript"],
      demoUrl: "https://jiro-your-ai-companion.vercel.app/",
      githubUrl: ""
    }
  ];

  return (
    <section id="projects" className="py-24 relative" style={{ background: 'linear-gradient(to bottom, hsl(var(--background)), hsl(var(--muted) / 0.2))' }}>
      <div className="absolute inset-0 opacity-25" style={{ background: 'var(--gradient-mesh)' }} />
      <div ref={elementRef} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Latest Work</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 md:px-0">
            Explore our portfolio of innovative projects that showcase our expertise 
            in web development, mobile apps, and game creation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-card border border-accent/10 hover:border-accent/30 transition-all duration-700 hover:shadow-glow-cyan hover:-translate-y-3 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-accent/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.demoUrl ? (
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 shadow-glow-cyan"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Project
                      </a>
                    </Button>
                  ) : (
                    <div className="text-white text-sm font-medium px-4 py-2 bg-accent/20 rounded-lg">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
