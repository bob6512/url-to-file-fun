import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mzzandln", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 2 hours.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Phone",
      details: ["+27 11 123 4567", "+27 11 123 4568"],
      description: "Call us Monday to Friday, 8am - 6pm"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email",
      details: ["info@momentumproperties.co.za", "sales@momentumproperties.co.za"],
      description: "We'll respond within 2 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Office",
      details: ["456 Waterfront Drive", "V&A Waterfront, Cape Town", "8001, South Africa"],
      description: "Visit us for a personal consultation"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Hours",
      details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 4pm", "Sunday: 10am - 2pm"],
      description: "We're here when you need us"
    }
  ];

  const offices = [
    {
      name: "Cape Town Head Office",
      address: "456 Waterfront Drive, V&A Waterfront",
      phone: "+27 21 456 7890",
      email: "capetown@momentumproperties.co.za"
    },
    {
      name: "Durban Branch",
      address: "789 Marine Parade, Durban Central",
      phone: "+27 31 789 0123",
      email: "durban@momentumproperties.co.za"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90">Ready to start your property journey? Let's talk about your goals and how we can help you achieve them.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input name="firstName" placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input name="lastName" placeholder="Your last name" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input name="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input name="phone" placeholder="+27 11 123 4567" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input name="subject" placeholder="How can we help you?" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your property needs, questions, or how we can assist you..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button size="lg" className="w-full bg-gradient-accent" type="submit" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-accent transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3">{office.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-accent mr-2" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-accent mr-2" />
                          <span className="text-muted-foreground">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-accent mr-2" />
                          <span className="text-muted-foreground">{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Map Placeholder */}
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're buying, selling, or investing, our expert team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent-light">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get Property Valuation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;