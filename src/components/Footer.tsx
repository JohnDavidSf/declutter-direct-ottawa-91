import Link from "@/components/AppLink";import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Declutter Direct</h3>
            <p className="mb-4 opacity-90">
              Professional garage cleanout service in Ottawa-Gatineau. 
              One flat fee, one day, one clean garage.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:613-661-1888" className="hover:text-accent transition-colors">
                  (613) 661-1888
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@declutterdirect.ca" className="hover:text-accent transition-colors">
                  info@declutterdirect.ca
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-bold mb-4">Service Area</h4>
            <div className="flex items-start mb-2">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Ottawa-Gatineau Metropolitan Area</p>
              </div>
            </div>
            <ul className="text-sm opacity-90 space-y-1">
              <li>Ottawa & Gatineau</li>
              <li>Kanata & Orleans</li>
              <li>Barrhaven & Nepean</li>
              <li>Gloucester & Cumberland</li>
              <li>And surrounding communities</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75">
              © 2024 Declutter Direct. All rights reserved.
            </p>
            <p className="text-sm opacity-75 mt-2 md:mt-0">
              Professional garage cleanout services in Ottawa-Gatineau
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;