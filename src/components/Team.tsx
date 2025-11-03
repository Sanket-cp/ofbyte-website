import { Users, Award, Code, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Team = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const teamStats = [
    { icon: Users, label: "Team Members", value: "14+", description: "Expert Professionals" },
    { icon: Award, label: "Years Experience", value: "2+", description: "Average per Member" },
    { icon: Code, label: "Technologies", value: "15+", description: "Modern Tech Stack" },
    { icon: Briefcase, label: "Projects Completed", value: "25+", description: "Successful Deliveries" }
  ];

  const developers = [
    {
      name: "Sanket Debnath",
      role: "Full-Stack Developer & Content Writer",
      experience: "2+ years",
      education: "B.Tech CSE",
      projects: "10+ projects",
      skills: ["React", "Node.js", "JavaScript", "Content Writing"]
    },
    {
      name: "Pradipta Dutta",
      role: "AI & DevOps Engineer",
      experience: "3+ years",
      education: "B.Tech CSE",
      projects: "12+ projects",
      skills: ["Python", "TensorFlow", "AWS", "Docker"]
    },
    {
      name: "Agniva Ghosh",
      role: "Designer & Video Editor",
      experience: "2+ years",
      education: "B.Tech CSE",
      projects: "15+ projects",
      skills: ["Figma", "Photoshop", "CapCut", "Canva"]
    },
    {
      name: "Mrinal Keshav",
      role: "Frontend Developer",
      experience: "2+ years",
      education: "B.Tech CSE",
      projects: "8+ projects",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div ref={elementRef} className="container mx-auto px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 md:px-0">
            Meet our core team members leading a group of 14+ skilled professionals specializing in development, design, and content creation
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className={`p-4 md:p-6 rounded-2xl bg-gradient-card backdrop-blur-sm border border-accent/20 text-center hover:shadow-glow-blue transition-all duration-500 hover:-translate-y-2 hover:scale-105 md:hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                animation: 'float 5s ease-in-out infinite',
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 bg-gradient-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Developer Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl bg-gradient-card backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-glow-blue group hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {dev.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {dev.name}
                  </h3>
                  <p className="text-accent font-medium">{dev.role}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Award className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-medium">{dev.experience}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Code className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Education:</span>
                  <span className="font-medium">{dev.education}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Projects:</span>
                  <span className="font-medium">{dev.projects}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Key Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {dev.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Team Note */}
        <div className="mt-12 text-center">
          <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-sm border border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold mb-2">Our Extended Team</h3>
            <p className="text-muted-foreground text-sm">
              Plus 10+ additional specialists including mobile developers, AI engineers, QA testers, 
              project managers, and creative professionals working behind the scenes to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
