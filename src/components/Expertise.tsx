import { Code2, Smartphone, Gamepad2, Brain, Cloud, Palette, FileImage, Settings, Video, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Expertise = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const techCategories = [
    {
      icon: Code2,
      title: "Web Development",
      technologies: ["React", "TypeScript", "Next.js", "Node.js", "Vue.js", "Tailwind CSS"],
      description: "Custom web applications designed for your business needs"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
      description: "Cross-platform and native mobile solutions"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      technologies: ["Unity", "Unreal Engine", "C#", "C++", "WebGL", "3D Modeling"],
      description: "Immersive gaming experiences across platforms"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      technologies: ["OpenAI", "TensorFlow", "PyTorch", "Python", "NLP", "Computer Vision"],
      description: "Intelligent solutions powered by cutting-edge AI"
    },
    {
      icon: Palette,
      title: "Logo Design",
      technologies: ["Brand Identity", "Vector Graphics", "Adobe Suite", "Figma", "Color Theory", "Typography"],
      description: "Professional brand identity and logo creation"
    },
    {
      icon: FileImage,
      title: "Poster Design",
      technologies: ["Print Design", "Digital Graphics", "Marketing Materials", "Photoshop", "Illustrator", "InDesign"],
      description: "Eye-catching designs for marketing and events"
    },
    {
      icon: Video,
      title: "Video Editing",
      technologies: ["Adobe Premiere", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading", "Audio Sync"],
      description: "Professional video editing and post-production services"
    },
    {
      icon: PenTool,
      title: "Content Writing",
      technologies: ["SEO Writing", "Blog Posts", "Web Copy", "Social Media", "Technical Writing", "Creative Content"],
      description: "Engaging content that drives results and connects with your audience"
    },
    {
      icon: Settings,
      title: "DevOps",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Terraform"],
      description: "Streamlined deployment and infrastructure management"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      technologies: ["AWS", "Azure", "GCP", "Serverless", "Microservices", "Vercel"],
      description: "Scalable cloud infrastructure and hosting"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-mesh)' }} />
      <div ref={elementRef} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-semibold mb-2">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Provided <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in software development and enterprise management systems, delivering tailored solutions that cater to diverse industries with our extensive expertise and commitment to innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { stat: "10+", label: "Years Combined Experience" },
            { stat: "30+", label: "Technologies Mastered" },
            { stat: "100%", label: "Client Satisfaction" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="text-center p-6 rounded-2xl bg-card border border-border animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
              <div className="text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
