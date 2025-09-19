import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Star, Award } from "lucide-react";
import sarahImage from "@/assets/agent-sarah.jpg";
import michaelImage from "@/assets/agent-michael.jpg";
import amaraImage from "@/assets/agent-amara.jpg";
import davidImage from "@/assets/agent-david.jpg";
import lisaImage from "@/assets/agent-lisa.jpg";
import jamesImage from "@/assets/agent-james.jpg";
import nalediImage from "@/assets/agent-naledi.jpg";

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Property Consultant",
      specialization: "Residential Sales",
      experience: "8 years",
      email: "sarah@momentumproperty.co.za",
      rating: 4.9,
      sales: 156,
      image: sarahImage
    },
    {
      id: 2,
      name: "Thabo Mthembu",
      title: "Commercial Property Specialist",
      specialization: "Commercial Sales",
      experience: "12 years",
      email: "thabo@momentumproperty.co.za",
      rating: 4.8,
      sales: 89,
      image: michaelImage
    },
    {
      id: 3,
      name: "Nomsa Khumalo",
      title: "Luxury Property Advisor",
      specialization: "Luxury Residential",
      experience: "6 years",
      email: "nomsa@momentumproperty.co.za",
      rating: 5.0,
      sales: 67,
      image: amaraImage
    },
    {
      id: 4,
      name: "Sipho Ndlovu",
      title: "Investment Property Consultant",
      specialization: "Investment Properties",
      experience: "10 years",
      email: "sipho@momentumproperty.co.za",
      rating: 4.7,
      sales: 134,
      image: davidImage
    },
    {
      id: 5,
      name: "Arjun Patel",
      title: "Property Manager",
      specialization: "Rental Management",
      experience: "7 years",
      email: "arjun@momentumproperty.co.za",
      rating: 4.9,
      sales: 98,
      image: lisaImage
    },
    {
      id: 6,
      name: "Mandla Dlamini",
      title: "First-time Buyer Specialist",
      specialization: "First-time Buyers",
      experience: "5 years",
      email: "mandla@momentumproperty.co.za",
      rating: 4.8,
      sales: 112,
      image: jamesImage
    },
    {
      id: 7,
      name: "Naledi Mokoena",
      title: "Property Development Specialist",
      specialization: "New Developments",
      experience: "9 years",
      email: "naledi@momentumproperty.co.za",
      rating: 4.9,
      sales: 87,
      image: nalediImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Agents</h1>
          <p className="text-xl opacity-90">Meet the professionals who will help you achieve your property goals</p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">25+ Trusted Professionals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experienced agents specializes in different property sectors, ensuring you get expert guidance tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className={`w-full h-64 object-cover rounded-t-lg ${agent.id === 7 ? 'object-[center_20%]' : 'object-top'}`}
                    />
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      {agent.experience}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-1">{agent.name}</h3>
                    <p className="text-accent font-medium mb-2">{agent.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">{agent.specialization}</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                        <span className="font-semibold">{agent.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{agent.sales} properties sold</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-accent mr-2" />
                        {agent.email}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(`https://wa.me/27604521354?text=Hi, I'm interested in your property services`, '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        WhatsApp
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-accent"
                        onClick={() => window.location.href = `mailto:${agent.email}`}
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agents;