import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  Home, 
  PiggyBank, 
  FileText, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Calculators = () => {
  const calculators = [
    {
      title: "Bond Calculator",
      description: "Calculate your monthly home loan payments based on loan amount, interest rate, and term.",
      icon: <PiggyBank className="w-8 h-8 text-accent" />,
      link: "/calculators/bond",
      features: ["Monthly payment calculation", "Total interest breakdown", "Payment schedule analysis"]
    },
    {
      title: "Affordability Calculator", 
      description: "Determine how much property you can afford based on your income and expenses.",
      icon: <Home className="w-8 h-8 text-accent" />,
      link: "/calculators/affordability",
      features: ["Income-based analysis", "Debt consideration", "Conservative estimates"]
    },
    {
      title: "Transfer Duty Calculator",
      description: "Calculate the transfer duty (tax) payable when purchasing property in South Africa.",
      icon: <FileText className="w-8 h-8 text-accent" />,
      link: "/calculators/transfer-duty",
      features: ["SA transfer duty rates", "Cost breakdown", "Budget planning"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Calculator className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Property Calculators</h1>
              <p className="text-xl opacity-90">Smart financial tools to help you make informed property decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Choose Your Calculator</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our comprehensive financial calculators to plan your property journey with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {calculators.map((calc, index) => (
              <Card key={index} className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {calc.icon}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{calc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {calc.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {calc.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full group-hover:bg-primary transition-colors">
                    <Link to={calc.link}>
                      Start Calculating
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Our Calculators */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Use Our Calculators?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make informed decisions with accurate, up-to-date South African property calculations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Accurate Results</h3>
              <p className="text-sm text-muted-foreground">Based on current South African banking regulations and rates</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Real-time Updates</h3>
              <p className="text-sm text-muted-foreground">Calculations reflect current market conditions and interest rates</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Detailed Breakdown</h3>
              <p className="text-sm text-muted-foreground">Comprehensive analysis with helpful tips and explanations</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Property Focused</h3>
              <p className="text-sm text-muted-foreground">Specifically designed for South African property market</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Buy Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Use our calculators to plan your budget, then let our expert agents help you find the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent-light">
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculators;