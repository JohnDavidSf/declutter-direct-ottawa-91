// src/pages/Contact.tsx
import Link from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ExternalLink, Phone, ArrowRight, Info } from "lucide-react";
import React from "react";

// Simple Facebook "f" icon (brand-safe)
const FbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M22 12.06C22 6.5 17.52 2 11.94 2 6.37 2 2 6.5 2 12.06 2 17.08 5.66 21.21 10.44 22v-7.02H7.9v-2.92h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.84h2.79l-.45 2.92h-2.34V22C18.34 21.21 22 17.08 22 12.06Z"
    />
  </svg>
);

export default function Contact() {
  const fbUrl = "https://www.facebook.com/people/Declutter-Direct/61581353731958/#";
  const phoneDigits = "16136611888";
  const telHref = `tel:+${phoneDigits}`;
  const smsHref = `sms:+${phoneDigits}?&body=${encodeURIComponent(
    "Hi, I'd like to text photos of my garage for a flat-fee cleanout."
  )}`;

  return (
    <div className="min-h-screen">
      {/* HERO STRIP */}
      <section className="bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4 py-10 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">Contact</h1>

            {/* Price teaser chip */}
            <div className="mt-4">
              <Link to="/pricing" aria-label="See $499 pricing">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm">
                  <Info className="w-4 h-4" />
                  Most standard garages are <strong>$499</strong> — see details
                </span>
              </Link>
            </div>

            {/* Make this line more visible + add fast-response note */}
            <p className="mt-5 text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Fastest ways to reach us:</span> send photos on Facebook or by text.{" "}
              <span className="text-foreground">We usually reply within minutes during business hours.</span>
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on Facebook"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {/* “Message on” + Facebook icon + label */}
                  <span className="inline-flex items-center">
                    Message on&nbsp;
                    <span className="inline-flex items-center font-semibold">
                      <FbIcon className="w-4 h-4 mr-1" />
                      Facebook
                    </span>
                  </span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                </Button>
              </a>

              <a href={smsHref} aria-label="Text photos" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Text Photos
                </Button>
              </a>
            </div>

            {/* Secondary tiny action */}
            <div className="mt-3">
              <a href={telHref} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Prefer a quick call? <span className="underline">+1 (613) 661-1888</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* How it works */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl">How it works</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ol className="space-y-3 text-foreground">
                <li>
                  <span className="font-semibold">1.</span> Take 2–4 clear photos of your garage.
                </li>
                <li>
                  <span className="font-semibold">2.</span> Send them on Facebook or by text.
                </li>
                <li>
                  <span className="font-semibold">3.</span> We confirm and reply with a date.
                </li>
              </ol>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={smsHref} aria-label="Text photos" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Text Photos
                  </Button>
                </a>
                <a
                  href={fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message on Facebook"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <span className="inline-flex items-center">
                      Message on&nbsp;
                      <span className="inline-flex items-center font-semibold">
                        <FbIcon className="w-4 h-4 mr-1" />
                        Facebook
                      </span>
                    </span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                  </Button>
                </a>
              </div>

              <div className="mt-5 text-sm text-muted-foreground">
                We also quote <span className="text-foreground font-medium">micro spaces (sheds)</span> and{" "}
                <span className="text-foreground font-medium">large spaces (barns / RV or boat garages)</span>.
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Link
                  to="/services"
                  className="inline-flex items-center underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Wondering how it works? See the 5-step process
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link
                  to="/pricing"
                  className="inline-flex items-center underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Then check pricing
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick info */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Quick info</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-muted-foreground space-y-3">
              <p>Service area: Ottawa–Gatineau and surrounding communities.</p>
              <p>Hours: 8:00 AM – 8:00 PM.</p>
              <p>
                Most standard garages are <Link to="/pricing" className="text-foreground underline">$499</Link>. Sheds and
                larger spaces like barns get a simple custom quote.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-secondary py-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Proudly Serving Ottawa–Gatineau</h2>
            <p className="mt-3 text-xl text-muted-foreground">
              We cover the National Capital Region and nearby communities.
            </p>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-muted-foreground">
              <div>Ottawa</div>
              <div>Gatineau</div>
              <div>Kanata</div>
              <div>Orleans</div>
              <div>Barrhaven</div>
              <div>Nepean</div>
              <div>Gloucester</div>
              <div>Cumberland</div>
              <div>Rockland</div>
              <div>Stittsville</div>
              <div>Manotick</div>
              <div>Osgoode</div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Don’t see your community listed? Message us — we likely serve your area too.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
