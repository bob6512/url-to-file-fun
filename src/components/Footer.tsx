import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import momentumLogo from "@/assets/momentum-logo.png";
import proudlySALogo from "@/assets/proudly-south-african-official.png";
import tpnLogo from "@/assets/tpn-credit-bureau-official.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={momentumLogo} alt="Momentum Property" className="h-10 w-10" />
              <span className="text-xl font-bold">Momentum Property</span>
            </div>
            <p className="text-primary-foreground/80">
              Building momentum in real estate. Your trusted partner for buying, selling, and investing in South Africa.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/properties" className="block hover:text-accent transition-colors">Search Properties</Link>
              <Link to="/agents" className="block hover:text-accent transition-colors">Our Agents</Link>
              <Link to="/services" className="block hover:text-accent transition-colors">Services</Link>
              <Link to="/about" className="block hover:text-accent transition-colors">About Us</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="hover:text-accent transition-colors cursor-pointer">Property Sales</p>
              <p className="hover:text-accent transition-colors cursor-pointer">Property Rentals</p>
              <p className="hover:text-accent transition-colors cursor-pointer">Property Management</p>
              <p className="hover:text-accent transition-colors cursor-pointer">Market Valuations</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+27 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@momentumproperties.co.za</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>456 Waterfront Drive<br />V&A Waterfront, Cape Town<br />8001, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Branding Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center space-x-6">
                <img src={proudlySALogo} alt="Proudly South African" className="h-16 w-auto" />
                <img src={tpnLogo} alt="TPN Credit Bureau" className="h-16 w-auto" />
              </div>
            </div>
            <p className="text-xs text-primary-foreground/50 text-center">
              Proudly South African | TPN Credit Bureau Verified
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Momentum Property. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;