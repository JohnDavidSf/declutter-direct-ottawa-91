// src/pages/Pricing.tsx
import Link from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calculator, MessageSquare, Info, ExternalLink } from "lucide-react";
import React from "react";

// Facebook "f" icon (blue)
const FbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="#1877F2"
      d="M22 12.06C22 6.5 17.52 2 11.94 2 6.37 2 2 6.5 2 12.06 2 17.08 5.66 21.21 10.44 22v-7.02H7.9v-2.92h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.84h2.79l-.45 2.92h-2.34V22C18.34 21.21 22 17.08 22 12.06Z"
    />
  </svg>
);

export default function Pricing() {
  const fbMessengerUrl = "https://m.me/61581353731958";
  const phoneDigits = "16136611888";
  const smsHref = `sms:+${phoneDigits}?&body=${encodeURIComponent(
    "Hi, I'd like to text photos of my garage for the flat-fee cleanout."
  )}`;

  const included = [
    "Complete cleanout and basic organization",
    "Sorting: keep / donate / recycle / dispose",
    "Donation and disposal handling",
    <strong>Donation and disposal handling</strong>,
    "Final sweep of the garage",
    "All labor, equipment, and disposal fees",
  ];

  return (
    <div className="min-h-screen">
      {/* Compact page title */}
      <section className="bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4 py-5 md:py-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">Pricing</h1>
        </div>
      </section>

      {/* Flat Fee Guarantee (tight paddings for mobile) */}
      <section className="container mx-auto px-4 pt-2 pb-8 sm:pt-4">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-hero border-2 border-accent">
            <CardHeader className="bg-accent text-accent-foreground py-3 px-4 sm:px-6">
              <CardTitle className="text-2xl sm:text-3xl">Flat Fee Guarantee</CardTitle>
              <p className="text-sm opacity-90">Garages completed for one clear price</p>
            </CardHeader>

            <CardContent className="p-4 sm:p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* LEFT: What’s Included + Price badge right after */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-3 text-primary">What’s Included</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5" />
                      <span className="text-foreground"><strong>Labeled storage boxes included</strong></span>
                    </li>
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price badge moved here */}
                 {/* <div className="mt-5 inline-flex items-baseline rounded-full border border-green-400/40 bg-green-100/40 px-6 py-2">
                    <span className="text-3xl sm:text-4xl font-extrabold leading-none text-foreground">Lowest Price Guarantee</span>
                     <span className="ml-2 text-sm text-foreground/80">standard garage flat fee</span>
                  </div> */}
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                    Our “save-your-back” special — we lift, you enjoy a cold drink.
                  </p>
                </div>

                {/* RIGHT: How It Works */}
                <div className="bg-secondary p-4 sm:p-5 rounded-lg">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 text-primary">How It Works</h2>
                  <ol className="space-y-3 text-foreground text-sm sm:text-base">
                    <li><span className="font-semibold">1.</span> Take 2–4 clear photos of your garage.</li>
                    <li><span className="font-semibold">2.</span> Send them by text or Facebook message.</li>
                    <li><span className="font-semibold">3.</span> We confirm a price and reply with a date.</li>
                  </ol>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a href={smsHref} aria-label="Text photos" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Text Photos
                      </Button>
                    </a>
                    <a
                      href={fbMessengerUrl}
                      target="_self"
                      rel="noopener"
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
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Can Change Scope (unchanged content, tighter spacing) 
      <section className="container mx-auto px-4 pb-10">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="py-3 px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                <CardTitle className="text-lg sm:text-xl">What Can Change Scope</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 px-4 sm:px-6 pb-4">
              <ul className="grid sm:grid-cols-3 gap-4 text-sm">
                <li>
                  <p className="font-semibold text-foreground">Size</p>
                  <p className="text-muted-foreground">Triple bay, barns.</p>
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
      </section> */}
    </div>
  );
}
