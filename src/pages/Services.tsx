// src/pages/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "@/components/AppLink";
import {
  CheckCircle,
  Package,
  Recycle,
  Sparkles,
  Archive,
  Trash2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import React from "react";

// Facebook "f" icon (blue, brand-safe)
const FbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="#1877F2"
      d="M22 12.06C22 6.5 17.52 2 11.94 2 6.37 2 2 6.5 2 12.06 2 17.08 5.66 21.21 10.44 22v-7.02H7.9v-2.92h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.84h2.79l-.45 2.92h-2.34V22C18.34 21.21 22 17.08 22 12.06Z"
    />
  </svg>
);

const Services = () => {
  const fbMessengerUrl = "https://m.me/61581353731958"; // opens Messenger to your page
  const phoneDigits = "16136611888";
  const smsHref = `sms:+${phoneDigits}?&body=${encodeURIComponent(
    "Hi, I'd like to text photos of my garage for the flat-fee cleanout."
  )}`;

  const services = [
    {
      icon: <Package className="w-8 h-8 text-accent" />,
      title: "Remove and Sort All Items",
      description:
        "We carefully remove everything from your garage and sort items into categories: keep, donate, recycle, and dispose.",
    },
    {
      icon: <Archive className="w-8 h-8 text-accent" />,
      title: "Organize What You Want to Keep",
      description:
        "Items you choose to keep are organized logically by frequency of use and category, making everything easy to find.",
    },
    {
      icon: <Recycle className="w-8 h-8 text-accent" />,
      title: "Safely Dispose of What You Don't",
      description:
        "We responsibly dispose of unwanted items through donation, recycling, and proper waste management.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Box and Tag with Optional Shelving Setup",
      description:
        "We provide labeled storage boxes and optional shelving installation ($) to help you maximize your garage space efficiently.",
    },
    {
      icon: <Trash2 className="w-8 h-8 text-accent" />,
      title: "Final Clean Sweep of the Garage",
      description:
        "We finish with a thorough cleaning of your entire garage, leaving it spotless and ready to park your vehicle.",
    },
  ];

  return (
    <div className="min-h-screen py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* Page title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary mb-3">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive garage cleanout follows a proven 5-step process to transform your space.
          </p>
        </div>

        {/* HOW IT WORKS (moved above the step cards) */}
        <Card className="shadow-card mb-10">
          <CardHeader className="py-4 px-4 sm:px-6">
            <CardTitle className="text-2xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 px-4 sm:px-6 pb-5">
            <ol className="space-y-3 text-foreground">
              <li>
                <span className="font-semibold">1.</span> Read the steps below.
              </li>
              <li>
                <span className="font-semibold">2.</span> Take 2–4 clear photos of your garage.
              </li>
              <li>
                <span className="font-semibold">3.</span> Send them by text or Facebook message.
              </li>
              <li>
                <span className="font-semibold">4.</span> We confirm a price and reply with a date.
              </li>
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
              <Link to="/pricing" aria-label="See pricing" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  See Pricing
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid (step cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-accent/10 p-2 rounded-lg">{service.icon}</div>
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Step {index + 1}
                  </span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Included + Service Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <CheckCircle className="w-6 h-6 text-accent mr-3" />
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                  Complete garage cleanout and organization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                  Sorting and categorizing all items
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                  Donation pickup coordination
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                  Responsible disposal of unwanted items
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                  Basic cleaning of the garage space
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                  Optional basic shelving installation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Service Area</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We proudly serve the entire Ottawa–Gatineau Metropolitan Area, including:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Ottawa and surrounding communities</li>
                <li>• Gatineau and surrounding areas</li>
                <li>• Kanata, Orleans, Barrhaven</li>
                <li>• Nepean, Gloucester, Cumberland</li>
                <li>• And many more communities</li>
              </ul>
              <p className="text-sm text-muted-foreground">Not sure if we serve your area? Contact us to confirm!</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-accent text-accent-foreground p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Transform your garage with our professional service. Park your vehicle indoors this winter!
          </p>
          <Link to="/Pricing" onClick={() => window.scrollTo(0, 0)}>
            <Button size="lg" variant="secondary" className="shadow-hero">
              Flat-fee guarantee
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
