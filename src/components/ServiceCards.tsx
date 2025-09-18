import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, TrendingUp, ArrowRight } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-accent" />,
      title: "For buyers",
      description: "Let our expert team guide you through every step of the buying process. We help you find more than a home — we find your future.",
      buttonText: "Search properties",
      href: "/properties"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "For sellers", 
      description: "Sell smarter with Momentum — expert marketing and personalized service to get your home sold fast. We handle everything for you.",
      buttonText: "Contact us",
      href: "/contact"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Find an expert",
      description: "The right agent makes all the difference. Browse through our 25+ trusted professionals to find the perfect match for your needs.",
      buttonText: "Search agents",
      href: "/agents"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;