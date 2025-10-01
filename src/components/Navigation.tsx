import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import AppLink from "@/components/AppLink";
import AppNavLink from "@/components/AppNavLink";

// Facebook "f" icon
const FbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="#1877F2"
      d="M22 12.06C22 6.5 17.52 2 11.94 2 6.37 2 2 6.5 2 12.06 2 17.08 5.66 21.21 10.44 22v-7.02H7.9v-2.92h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.84h2.79l-.45 2.92h-2.34V22C18.34 21.21 22 17.08 22 12.06Z"
    />
  </svg>
);

const navItems = [
  { path: "/", label: "Home", end: true },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/pricing", label: "Pricing" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location.pathname]);

  const linkBase =
    "text-foreground hover:text-accent transition-colors text-sm font-medium";
  const active = "text-accent font-medium";

  const phoneDigits = "16136611888"; // +1 (613) 661-1888
  const smsHref = `sms:+${phoneDigits}?&body=${encodeURIComponent(
    "Hi, I'd like to text photos of my garage for the flat-fee cleanout."
  )}`;

  // Messenger deep link (works for Facebook Pages)
  const fbMessengerUrl = "https://m.me/61581353731958";

  return (
    <nav className="bg-background shadow-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <AppLink to="/" className="text-2xl font-bold text-primary">
            Declutter Direct
          </AppLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <AppNavLink
                key={item.path}
                to={item.path}
                end={(item as any).end}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : ""}`
                }
              >
                {item.label}
              </AppNavLink>
            ))}

            {/* Desktop actions: SMS + Messenger + Quote */}
            <div className="ml-2 flex items-center gap-2">
              {/* SMS (icon button) */}
              <Button asChild variant="outline" size="icon" className="h-10 w-10">
                <a href={smsHref} aria-label="Text photos" target="_self">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </Button>

              {/* Messenger (icon-only, bigger logo) */}
              <Button asChild variant="outline" size="icon" className="h-10 w-10">
                <a href={fbMessengerUrl} aria-label="Facebook message" target="_self" rel="noopener">
                  <FbIcon className="w-7 h-7" />
                </a>
              </Button>

              <AppLink to="/contact">
                <Button size="sm" variant="outline">Free Quote</Button>
              </AppLink>
            </div>
          </div>

          {/* Mobile: SMS + Messenger + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <Button asChild variant="outline" size="icon" aria-label="Text photos" className="h-10 w-10">
              <a href={smsHref} target="_self">
                <MessageSquare className="w-5 h-5" />
              </a>
            </Button>

            <Button asChild variant="outline" size="icon" aria-label="Facebook message" className="h-10 w-10">
              <a href={fbMessengerUrl} target="_self" rel="noopener">
                <FbIcon className="w-7 h-7" />
              </a>
            </Button>

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

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <AppNavLink
                  key={item.path}
                  to={item.path}
                  end={(item as any).end}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 ${linkBase} ${
                      isActive ? "bg-accent/10 " + active : ""
                    }`
                  }
                >
                  {item.label}
                </AppNavLink>
              ))}

              <AppLink to="/contact">
                <Button className="mt-2 w-full" variant="outline">
                  Free Quote
                </Button>
              </AppLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
