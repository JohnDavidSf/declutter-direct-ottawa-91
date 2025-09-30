// src/pages/Pricing.tsx
import Link from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calculator, MessageSquare, Info, ExternalLink } from "lucide-react";
import React from "react";

// Simple Facebook "f" icon (same style as Contact page)
const FbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M22 12.06C22 6.5 17.52 2 11.94 2 6.37 2 2 6.5 2 12.06 2 17.08 5.66 21.21 10.44 22v-7.02H7.9v-2.92h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.84h2.79l-.45 2.92h-2.34V22C18.34 21.21 22 17.08 22 12.06Z"
    />
  </svg>
);

export default function Pricing() {
  const fbUrl = "https://www.facebook.com/people/Declutter-Direct/61581353731958/#";
  const phoneDigits = "16137124848";
  const smsHref = `sms:+${phoneDigits}?&body=${encodeURIComponent(
    "Hi, I'd like to text photos of my garage for the $499 flat-fee cleanout."
  )}`;

  const included = [
    "Complete cleanout and basic organization",
    "Sorting: keep / donate / recycle / dispose",
    "Donation and disposal handling",
    "Labeled storage boxes included",
    "Final sweep of the garage",
    "All labor, equipment, and disposal fees",
  ];

  return (
    <div className="min-h-screen">
      {/* HERO (match Contact aesthetic; tighter mobile spacing) */}
      <section className="bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4 py-8 text-center sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">Pricing</h1>
          <p className="mt-3 text-base text-muted-foreground">Ottawa–Gatineau</p>

          {/* Centered price pill */}
          <div className="mt-6 inline-flex items-baseline rounded-full border border-accent/40 bg-accent/10 px-6 py-2">
            <span className="text-4xl sm:text-5xl font-extrabold leading-none text-foreground">$499</span>
            <span className="ml-2 text-sm text-foreground/80">standard garage flat fee</span>
          </div>

          {/* Tiny helper chip */}
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
              <Info className="w-3.5 h-3.5" />
              Send photos by text or Facebook for quick confirmation
            </span>
          </div>

          {/* Primary CTAs (now includes Facebook) */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={smsHref} aria-label="Text photos" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full">
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
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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

            <Link to="/contact" aria-label="Contact us" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CARD: what's included (left) + how it works (right) */}
      <section className="container mx-auto px-4 pt-8 pb-14 sm:pt-14">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-hero border-2 border-accent">
            <CardHeader className="text-center sm:text-left bg-accent text-accent-foreground">
              <CardTitle className="text-2xl sm:text-3xl">Flat Fee Guarantee</CardTitle>
              <p className="text-sm sm:text-base opacity-90">
                Most standard garages completed for one clear price
              </p>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-2 gap-10">
                {/* LEFT: What's Included */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-primary">What’s Included</h2>
                  <ul className="space-y-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT: How It Works */}
                <div className="bg-secondary p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 text-primary">How It Works</h2>
                  <ol className="space-y-3 text-foreground">
                    <li><span className="font-semibold">1.</span> Take 2–4 clear photos of your garage.</li>
                    <li><span className="font-semibold">2.</span> Send them by text or Facebook message.</li>
                    <li><span className="font-semibold">3.</span> We confirm and reply with a date.</li>
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
                    <Link to="/contact" aria-label="Contact us" className="w-full sm:w-auto">
                      <Button className="w-full" variant="outline">
                        Contact Us
                      </Button>
                    </Link>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    We also quote <span className="text-foreground font-medium">micro spaces (sheds)</span> and
                    <span className="text-foreground font-medium"> large spaces (barns / RV or boat garages)</span> separately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* OPTIONAL: brief scope card to match Contact styling */}
      <section className="container mx-auto px-4 pb-14">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                <CardTitle className="text-xl">What Can Change Scope</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid sm:grid-cols-3 gap-4 text-sm">
                <li>
                  <p className="font-semibold text-foreground">Size</p>
                  <p className="text-muted-foreground">Single, double, or triple bays.</p>
                </li>
                <li>
                  <p className="font-semibold text-foreground">Volume</p>
                  <p className="text-muted-foreground">How much sorting and hauling is needed.</p>
                </li>
                <li>
                  <p className="font-semibold text-foreground">Handling</p>
                  <p className="text-muted-foreground">Heavy items or special materials.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-secondary py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
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
              Don’t see your community listed? Message or text us — we likely serve your area too.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
