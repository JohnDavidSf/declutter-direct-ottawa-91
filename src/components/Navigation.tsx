import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Pricing" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-background shadow-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Declutter Direct
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-accent transition-colors ${
                  location.pathname === item.path ? "text-accent font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="tel:613-555-0199">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Phone className="w-4 h-4 mr-2" />
                (613) 555-0199
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Free Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm text-foreground hover:text-accent transition-colors ${
                location.pathname === item.path ? "text-accent font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;