import { useParams, useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Heart, 
  Share2, 
  Phone, 
  Mail,
  ArrowLeft,
  Calendar,
  Shield,
  Wifi,
  Trees,
  Dumbbell,
  Coffee,
  CheckCircle
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample property data - in a real app this would come from an API
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Sandton",
      price: "R 2,500,000",
      location: "Sandton, Johannesburg",
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      size: "120 sqm",
      type: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
      ],
      description: "This stunning modern apartment offers the perfect blend of luxury and convenience in the heart of Sandton. With panoramic city views and premium finishes throughout, this property represents exceptional value in one of Johannesburg's most prestigious locations.",
      features: ["Air Conditioning", "Balcony", "Security", "Fiber Internet", "Gym Access", "Pool", "24/7 Security"],
      agent: {
        name: "Naledi Mokoena",
        phone: "+27 11 123 4567",
        email: "naledi@momentumproperties.co.za"
      }
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      price: "R 8,500,000",
      location: "Constantia, Cape Town",
      bedrooms: 5,
      bathrooms: 4,
      parking: 3,
      size: "450 sqm",
      type: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
      ],
      description: "An exceptional luxury villa nestled in the prestigious Constantia wine region. This architectural masterpiece boasts stunning mountain views, a sparkling pool, and meticulously landscaped gardens. Perfect for entertaining and family living.",
      features: ["Swimming Pool", "Wine Cellar", "Garden", "Mountain Views", "Fireplace", "Study", "Guest Cottage"],
      agent: {
        name: "Sarah Johnson",
        phone: "+27 21 456 7890",
        email: "sarah@momentumproperties.co.za"
      }
    },
    {
      id: 3,
      title: "Contemporary Office Space",
      price: "R 45,000 /month",
      location: "Rosebank, Johannesburg",
      bedrooms: 0,
      bathrooms: 2,
      parking: 5,
      size: "200 sqm",
      type: "To Let",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
      ],
      description: "Prime commercial office space in the heart of Rosebank's business district. This modern workspace features floor-to-ceiling windows, state-of-the-art facilities, and excellent public transport links. Ideal for growing businesses.",
      features: ["Fiber Internet", "Air Conditioning", "24/7 Security", "Reception Area", "Meeting Rooms", "Kitchenette"],
      agent: {
        name: "Thabo Mthembu",
        phone: "+27 11 789 0123",
        email: "thabo@momentumproperties.co.za"
      }
    },
    {
      id: 4,
      title: "Family Home with Garden",
      price: "R 3,200,000",
      location: "Durbanville, Cape Town",
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      size: "280 sqm",
      type: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
      ],
      description: "Perfect family home in a sought-after Durbanville neighborhood. This spacious property features a large garden, open-plan living areas, and excellent schools nearby. A wonderful opportunity for growing families.",
      features: ["Large Garden", "Open Plan Living", "Study", "Double Garage", "Alarm System", "Solar Geyser"],
      agent: {
        name: "Amara Ndaba",
        phone: "+27 21 234 5678",
        email: "amara@momentumproperties.co.za"
      }
    },
    {
      id: 5,
      title: "Penthouse with City Views",
      price: "R 15,000,000",
      location: "Sea Point, Cape Town",
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      size: "320 sqm",
      type: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
      ],
      description: "Spectacular penthouse offering 360-degree views of the Atlantic Ocean and Table Mountain. This luxury residence features premium finishes, a private rooftop terrace, and unparalleled coastal living.",
      features: ["Ocean Views", "Rooftop Terrace", "Concierge Service", "Gym", "Pool", "Wine Storage", "Home Automation"],
      agent: {
        name: "David Williams",
        phone: "+27 21 345 6789",
        email: "david@momentumproperties.co.za"
      }
    },
    {
      id: 6,
      title: "Student Accommodation",
      price: "R 8,500 /month",
      location: "Braamfontein, Johannesburg",
      bedrooms: 1,
      bathrooms: 1,
      parking: 0,
      size: "45 sqm",
      type: "To Let",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
      ],
      description: "Modern student accommodation perfectly located near the University of the Witwatersrand. This secure building offers all the amenities students need for comfortable and convenient living.",
      features: ["Study Area", "High-Speed WiFi", "Security", "Communal Kitchen", "Laundry Facilities", "Transport Links"],
      agent: {
        name: "Lisa Moyo",
        phone: "+27 11 456 7890",
        email: "lisa@momentumproperties.co.za"
      }
    }
  ];

  const property = properties.find(p => p.id === parseInt(id || '0'));

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/properties')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getFeatureIcon = (feature: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      "Air Conditioning": <Coffee className="w-4 h-4" />,
      "Security": <Shield className="w-4 h-4" />,
      "Fiber Internet": <Wifi className="w-4 h-4" />,
      "High-Speed WiFi": <Wifi className="w-4 h-4" />,
      "Gym Access": <Dumbbell className="w-4 h-4" />,
      "Gym": <Dumbbell className="w-4 h-4" />,
      "Garden": <Trees className="w-4 h-4" />,
      "Large Garden": <Trees className="w-4 h-4" />
    };
    return icons[feature] || <CheckCircle className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" onClick={() => navigate('/properties')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Button>
      </div>

      {/* Property Images */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge 
                  className={`${
                    property.type === 'For Sale' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {property.type}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 3).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${property.title} - ${index + 2}`}
                  className="w-full h-44 lg:h-60 object-cover rounded-lg"
                />
              ))}
              <div className="col-span-2">
                <img 
                  src={property.images[0]} 
                  alt={`${property.title} - Interior`}
                  className="w-full h-44 lg:h-60 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-4">{property.title}</h1>
                <div className="flex items-center text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  {property.location}
                </div>
                <div className="text-4xl font-bold text-accent mb-6">{property.price}</div>
                
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 mr-2 text-accent" />
                      {property.bedrooms} Bedrooms
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-2 text-accent" />
                    {property.bathrooms} Bathrooms
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 mr-2 text-accent" />
                    {property.size}
                  </div>
                  {property.parking > 0 && (
                    <div className="flex items-center">
                      <Car className="w-5 h-5 mr-2 text-accent" />
                      {property.parking} Parking
                    </div>
                  )}
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        {getFeatureIcon(feature)}
                        <span className="ml-2 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Contact Agent</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">{property.agent.name}</p>
                      <p className="text-sm text-muted-foreground">Property Specialist</p>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call {property.agent.phone}
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Agent
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Viewing
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/calculators/bond">Calculate Bond</Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full">
                      Share Property
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetails;