import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "RetailCo",
      industry: "Retail",
      challenge: "Legacy system couldn't handle growing traffic and modern payment methods",
      solution: "Built a scalable microservices architecture with AI-powered recommendations",
      results: [
        { icon: TrendingUp, label: "Revenue", value: "+150%" },
        { icon: Users, label: "User Growth", value: "+200%" },
        { icon: Clock, label: "Load Time", value: "-60%" }
      ],
      tech: ["React", "Node.js", "AWS", "AI/ML"]
    },
    {
      title: "Mobile Banking App Launch",
      client: "FinanceHub",
      industry: "Finance",
      challenge: "Need for secure, user-friendly mobile banking with biometric authentication",
      solution: "Developed native iOS/Android apps with end-to-end encryption and AI fraud detection",
      results: [
        { icon: Users, label: "Downloads", value: "500K+" },
        { icon: Award, label: "Rating", value: "4.8★" },
        { icon: TrendingUp, label: "Transactions", value: "+300%" }
      ],
      tech: ["React Native", "Firebase", "Blockchain", "AI"]
    },
    {
      title: "Multiplayer Gaming Platform",
      client: "GameWorld",
      industry: "Gaming",
      challenge: "Creating real-time multiplayer experience with low latency across regions",
      solution: "Built cloud-native game server infrastructure with global CDN integration",
      results: [
        { icon: Users, label: "Players", value: "1M+" },
        { icon: Clock, label: "Latency", value: "<50ms" },
        { icon: TrendingUp, label: "Retention", value: "85%" }
      ],
      tech: ["Unity", "WebGL", "WebSocket", "Cloud"]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Success Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-glow-cyan bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{study.client}</span> • {study.industry}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {study.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-accent/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">Challenge:</h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-accent mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Results:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, i) => (
                      <div 
                        key={i}
                        className="text-center p-4 rounded-lg bg-muted/30 border border-accent/20"
                      >
                        <result.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent mb-1">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
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

export default CaseStudies;
