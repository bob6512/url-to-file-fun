import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Building, 
  Key, 
  TrendingUp, 
  Calculator, 
  Users, 
  Shield, 
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-accent" />,
      title: "Residential Sales",
      description: "Comprehensive buying and selling services for homes, apartments, and residential properties.",
      features: ["Property valuations", "Marketing campaigns", "Negotiation support", "Legal assistance"],
      badge: "Most Popular"
    },
    {
      icon: <Building className="w-8 h-8 text-accent" />,
      title: "Commercial Properties",
      description: "Expert guidance for office buildings, retail spaces, warehouses, and industrial properties.",
      features: ["Market analysis", "Investment advice", "Tenant sourcing", "Lease negotiations"],
      badge: "Business"
    },
    {
      icon: <Key className="w-8 h-8 text-accent" />,
      title: "Property Rentals",
      description: "Full-service rental solutions for landlords and tenants across all property types.",
      features: ["Tenant screening", "Rental agreements", "Property inspections", "Maintenance coordination"],
      badge: "Rental"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Property Management",
      description: "Professional management services to maximize your property investment returns.",
      features: ["Rent collection", "Property maintenance", "Tenant relations", "Financial reporting"],
      badge: "Investment"
    },
    {
      icon: <Calculator className="w-8 h-8 text-accent" />,
      title: "Property Valuations",
      description: "Accurate property valuations for sales, purchases, insurance, and legal purposes.",
      features: ["Market assessments", "Comparative analysis", "Detailed reports", "Expert opinions"],
      badge: "Professional"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Investment Advisory",
      description: "Strategic investment guidance to help you build and grow your property portfolio.",
      features: ["Market research", "ROI analysis", "Portfolio planning", "Risk assessment"],
      badge: "Growth"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We meet with you to understand your property goals, timeline, and budget requirements."
    },
    {
      step: "2", 
      title: "Market Analysis",
      description: "Our experts conduct thorough market research to provide you with accurate insights and pricing."
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "We create a customized strategy tailored to your specific needs and market conditions."
    },
    {
      step: "4",
      title: "Implementation",
      description: "Our team executes the plan with regular updates and adjustments as needed."
    },
    {
      step: "5",
      title: "Completion & Support",
      description: "We ensure successful completion and provide ongoing support for your property needs."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Expert Team",
      description: "35+ experienced professionals across all property sectors"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Trusted Service",
      description: "98% client satisfaction rate and growing referral network"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: "Market Leaders",
      description: "One of South Africa's fastest-growing real estate agencies"
    },
    {
      icon: <FileText className="w-6 h-6 text-accent" />,
      title: "Full Service",
      description: "Complete property solutions from search to settlement"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Comprehensive real estate solutions designed to meet all your property needs, from residential sales to commercial investments and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From first-time buyers to seasoned investors, we provide expert guidance across all aspects of real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    {service.icon}
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-primary transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures every client receives personalized attention and exceptional results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Momentum Property</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine local expertise with innovative approaches to deliver exceptional results for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and discover how we can help you achieve your property goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent-light">
              Get Free Consultation
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/properties">View Our Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;