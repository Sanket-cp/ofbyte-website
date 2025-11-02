import { Building2, Globe, Smartphone, Gamepad2, Briefcase, Shield } from "lucide-react";

const ClientLogos = () => {
  const clients = [
    { name: "TechCorp", icon: Building2, region: "USA" },
    { name: "GlobalNet", icon: Globe, region: "UK" },
    { name: "AppSolutions", icon: Smartphone, region: "Brazil" }
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-primary">
            Trusted Companies
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We've partnered with leading businesses to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 md:p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <client.icon className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform mb-3" />
              <span className="font-semibold text-sm md:text-base text-foreground">{client.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{client.region}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Active Clients</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
