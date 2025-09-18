import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="bg-primary-dark/90 backdrop-blur-sm p-8 rounded-lg shadow-elegant">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Built on Trust.
              <br />
              <span className="text-accent">Focused on Your Momentum.</span>
            </h1>
            
            {/* Property Search Form */}
            <div className="bg-background p-6 rounded-lg shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="To Let" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="to-let">To Let</SelectItem>
                    <SelectItem value="for-sale">For Sale</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Residential" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="relative">
                  <Input placeholder="Search by Area, Suburb or Web Ref" className="pl-10" />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
                
                <Button className="bg-gradient-accent font-semibold">
                  <Search className="w-4 h-4 mr-2" />
                  SEARCH
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;