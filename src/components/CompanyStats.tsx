import { Button } from "@/components/ui/button";

const CompanyStats = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "750+", label: "Listings" },
    { number: "300+", label: "Testimonials" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            One of South Africa's Fastest-Growing Real Estate Agencies
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Momentum Properties is proud to be one of the fastest-growing real estate firms in South Africa — and we're just getting started.
            <br /><br />
            With nearly 35 dedicated agents and over 750 active listings across residential, commercial, and rental markets, we offer unmatched reach and personalized service. Beyond sales and rentals, we also provide professional property management services for landlords — giving you peace of mind and reliable results.
            <br /><br />
            Whether you're buying, selling, investing, or letting — Momentum is where your property goals turn into long-term success.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-primary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-gradient-accent text-lg px-8 py-3">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;