import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Zap, Star, Trophy, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      icon: Shield,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      icon: Zap,
      title: "Microsoft Azure Developer",
      issuer: "Microsoft",
      year: "2023"
    },
    {
      icon: Star,
      title: "Meta React Professional",
      issuer: "Meta",
      year: "2024"
    },
    {
      icon: Trophy,
      title: "Unity Certified Developer",
      issuer: "Unity Technologies",
      year: "2023"
    },
    {
      icon: CheckCircle2,
      title: "ISO 27001 Certified",
      issuer: "Information Security",
      year: "2024"
    }
  ];

  const achievements = [
    "Top 1% Developer on GitHub",
    "Winner - Latin America Tech Awards 2023",
    "Featured in TechCrunch",
    "5-Star Rating on Clutch"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Credentials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Certifications & Awards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team holds industry-leading certifications and recognition for technical excellence
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-glow-cyan bg-card/50 backdrop-blur-sm group"
            >
              <CardContent className="p-6">
                <cert.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-accent">{cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-accent/20"
              >
                <Trophy className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
