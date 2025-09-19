import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Bed, Bath, Square, Heart } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Sandton",
      price: "R 2,500,000",
      location: "Sandton, Johannesburg",
      bedrooms: 3,
      bathrooms: 2,
      size: "120 sqm",
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      price: "R 8,500,000",
      location: "Constantia, Cape Town",
      bedrooms: 5,
      bathrooms: 4,
      size: "450 sqm",
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Contemporary Office Space",
      price: "R 45,000 /month",
      location: "Rosebank, Johannesburg",
      bedrooms: 0,
      bathrooms: 2,
      size: "200 sqm",
      type: "To Let",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Family Home with Garden",
      price: "R 3,200,000",
      location: "Durbanville, Cape Town",
      bedrooms: 4,
      bathrooms: 3,
      size: "280 sqm",
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Penthouse with City Views",
      price: "R 15,000,000",
      location: "Sea Point, Cape Town",
      bedrooms: 4,
      bathrooms: 3,
      size: "320 sqm",
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Student Accommodation",
      price: "R 8,500 /month",
      location: "Braamfontein, Johannesburg",
      bedrooms: 1,
      bathrooms: 1,
      size: "45 sqm",
      type: "To Let",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Search Properties</h1>
          <p className="text-xl opacity-90">Find your perfect home or investment opportunity</p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="for-sale">For Sale</SelectItem>
                <SelectItem value="to-let">To Let</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="relative">
              <Input placeholder="Location" className="pl-10" />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Min Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="500000">R 500,000</SelectItem>
                <SelectItem value="1000000">R 1,000,000</SelectItem>
                <SelectItem value="2000000">R 2,000,000</SelectItem>
                <SelectItem value="5000000">R 5,000,000</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Max Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1000000">R 1,000,000</SelectItem>
                <SelectItem value="2000000">R 2,000,000</SelectItem>
                <SelectItem value="5000000">R 5,000,000</SelectItem>
                <SelectItem value="10000000">R 10,000,000+</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-gradient-accent">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary">Available Properties</h2>
            <p className="text-muted-foreground">{properties.length} properties found</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      property.type === 'For Sale' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {property.type}
                  </Badge>
                  <button className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-2xl font-bold text-accent mb-3">{property.price}</p>
                  <p className="text-muted-foreground mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </p>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.bedrooms} bed
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms} bath
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      {property.size}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full mt-4 group-hover:bg-primary transition-colors">
                    <Link to={`/property/${property.id}`}>View Details</Link>
                  </Button>
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

export default Properties;