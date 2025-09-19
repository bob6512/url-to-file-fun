import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Heart, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Trust & Integrity",
      description: "We build lasting relationships through honest, transparent communication and ethical business practices."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Results-Driven",
      description: "We're committed to achieving the best outcomes for our clients, whether buying, selling, or investing."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Client-Centric",
      description: "Every decision we make puts our clients' needs and goals at the center of everything we do."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "We leverage the latest technology and market insights to stay ahead in the real estate industry."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Reliability",
      description: "You can count on us to be there every step of the way, providing consistent support and guidance."
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Excellence",
      description: "We strive for excellence in every transaction, ensuring quality service and superior results."
    }
  ];

  const achievements = [
    { number: "750+", label: "Properties Sold", description: "Successful transactions completed" },
    { number: "35+", label: "Expert Agents", description: "Dedicated professionals on our team" },
    { number: "5+", label: "Years Experience", description: "Building momentum in real estate" },
    { number: "98%", label: "Client Satisfaction", description: "Happy clients who trust us" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Momentum Property</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Building momentum in South Africa's real estate market through trust, expertise, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to transform the real estate experience in South Africa, Momentum Property has quickly established itself as one of the country's fastest-growing property firms. Our journey began with a simple belief: that every property transaction should be built on trust, expertise, and genuine care for our clients' needs.
                </p>
                <p>
                  From our humble beginnings, we've grown into a dynamic team of over 35 dedicated professionals, each bringing unique expertise and a shared commitment to excellence. Our success isn't measured just in properties sold, but in the lasting relationships we've built and the dreams we've helped realize.
                </p>
                <p>
                  Today, with over 750 active listings across residential, commercial, and rental markets, we continue to build momentum—not just in our growth, but in the positive impact we make in communities across South Africa.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" 
                alt="Modern office building" 
                className="rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-primary mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            To build momentum in South Africa's real estate market by providing exceptional service, expert guidance, and innovative solutions that help our clients achieve their property goals while building lasting relationships based on trust and integrity.
          </p>
          <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent-light">
            Get Started With Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;