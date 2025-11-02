import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Consultation",
      description: "We listen to your needs, understand your business goals, and define project scope",
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Project Proposal", "Timeline & Budget"]
    },
    {
      icon: Lightbulb,
      title: "Design & Planning",
      description: "Create wireframes, UI/UX designs, and technical architecture plans",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Designs", "Technical Specs", "Architecture Diagram"]
    },
    {
      icon: Code,
      title: "Development",
      description: "Agile development with weekly sprints and continuous client feedback",
      duration: "8-12 weeks",
      deliverables: ["Working Prototypes", "Weekly Demos", "Source Code"]
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Comprehensive testing including functional, performance, and security tests",
      duration: "2-3 weeks",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"]
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Launch to production with monitoring, documentation, and training",
      duration: "1 week",
      deliverables: ["Live Application", "Documentation", "Training Materials"]
    },
    {
      icon: HeadphonesIcon,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements based on user feedback",
      duration: "Ongoing",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Reports"]
    }
  ];



  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">How We Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Our Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent, predictable, and collaborative approach to building your dream product
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-glow-cyan bg-card/50 backdrop-blur-sm group relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <CardContent className="p-6 pt-8">
                <step.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{step.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-accent font-semibold">Duration:</span>
                    <span className="text-muted-foreground">{step.duration}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-accent font-semibold block mb-1">Deliverables:</span>
                    <ul className="space-y-1">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="text-muted-foreground">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Process;
