import { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", end: true },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/pricing", label: "Pricing" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // close mobile panel when route changes
  useEffect(() => setOpen(false), [location.pathname]);

  const linkBase =
    "text-foreground hover:text-accent transition-colors text-sm font-medium";
  const active = "text-accent font-medium";

  return (
    <nav className="bg-background shadow-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Declutter Direct
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 5).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
            >
              Contact
            </NavLink>

            {/* Desktop actions */}
            <a href="tel:613-555-0199" className="hidden lg:block">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                (613) 712-4848
              </Button>
            </a>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile: phone CTA + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:613-555-0199">
              <Button variant="outline" size="sm" aria-label="Call">
                <Phone className="w-4 h-4" />
              </Button>
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent/5"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel (replaces the old flex-wrap menu) */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 ${linkBase} ${
                      isActive ? "bg-accent/10 " + active : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button className="mt-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Free Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
