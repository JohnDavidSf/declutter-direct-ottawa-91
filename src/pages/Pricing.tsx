import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, CheckCircle, Calculator, Phone } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong>Flat Fee Guarantee</strong> – Most garages completed for one low price. 
            No hourly rates, no surprise charges, no hidden fees.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-hero border-2 border-accent">
            <CardHeader className="text-center bg-accent text-accent-foreground">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-16 h-16" />
              </div>
              <CardTitle className="text-4xl font-bold">Flat Fee Guarantee</CardTitle>
              <p className="text-xl opacity-90">Most garages completed for one transparent price</p>
            </CardHeader>
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">What's Included:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>Complete garage cleanout and organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>Professional sorting of all items</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>Responsible disposal and donation coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>Optional basic shelving setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>Complete cleaning of garage space</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>All labor, equipment, and disposal fees</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">How It Works:</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>1. Free Consultation:</strong> We visit your garage and 
                      provide a detailed quote with no obligation.
                    </p>
                    <p>
                      <strong>2. Transparent Pricing:</strong> You'll know the exact 
                      cost upfront – no hourly rates or hidden fees.
                    </p>
                    <p>
                      <strong>3. One-Day Service:</strong> Most garages are completed 
                      in a single day for the quoted flat fee.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                  <Link 
  to="/contact" 
  onClick={() => window.scrollTo(0, 0)}
>
                    
                      <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Get Your Free Quote Today
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Factors That Affect Pricing */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="w-6 h-6 text-accent mr-3" />
                Factors We Consider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">Garage Size</h4>
                  <p>Single, double, or triple car garage dimensions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Amount of Items</h4>
                  <p>How much stuff needs to be sorted and organized</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Organization Level</h4>
                  <p>Current state and desired end result</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Special Requirements</h4>
                  <p>Heavy items, hazardous materials, or unique needs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Why Flat Fee?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 opacity-90">
                <p>
                  <strong>No Surprises:</strong> You know exactly what you'll pay 
                  before we start working.
                </p>
                <p>
                  <strong>No Rush:</strong> We take the time needed to do the job 
                  right without watching the clock.
                </p>
                <p>
                  <strong>Fair Pricing:</strong> Based on the scope of work, not 
                  arbitrary hourly rates.
                </p>
                <p>
                  <strong>Peace of Mind:</strong> Focus on the transformation, 
                  not the bill.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="bg-secondary p-12 rounded-lg mb-16">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Pricing Questions?
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                What if my garage is unusually large or complex?
              </h3>
              <p className="text-muted-foreground">
                We'll discuss any special circumstances during our free consultation 
                and adjust the quote accordingly. You'll always know the price upfront.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Are there any additional costs?
              </h3>
              <p className="text-muted-foreground">
                Our flat fee includes all standard services. The only additional costs 
                might be for premium storage solutions if requested.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                What if the job takes longer than expected?
              </h3>
              <p className="text-muted-foreground">
                That's on us! Our flat fee covers the complete job regardless of 
                how long it takes. We don't charge by the hour.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready for Your Quote?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. We'll visit your garage and 
            provide transparent, flat-fee pricing with no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Schedule Free Consultation
              </Button>
            </Link>
            <a href="tel:613-555-0199">
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: (613) 555-5555
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;