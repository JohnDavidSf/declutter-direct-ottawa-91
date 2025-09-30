import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: January 2024
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Declutter Direct Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-muted-foreground">
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">1. Service Agreement</h3>
              <p>
                By engaging Declutter Direct for garage cleanout services, you agree to these terms. 
                Our services include sorting, organizing, and disposing of items as mutually agreed 
                upon during the consultation process.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">2. Pricing and Payment</h3>
              <p>
                Our flat-fee pricing is provided after a consultation. Payment is due 
                upon completion of services unless other arrangements have been made in writing. 
                
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">3. Client Responsibilities</h3>
              <p>
                Clients must be present during the initial consultation and available for decisions 
                regarding items to keep, donate, or dispose of. Clients are responsible for 
                identifying valuable or sentimental items that require special handling.
              </p>
            </section>

           

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">4. Disposal and Donations</h3>
              <p>
                Items designated for disposal or donation become the property of Declutter Direct. 
                We make reasonable efforts to donate usable items to local charities and dispose 
                of remaining items in accordance with local regulations.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">5. Cancellation Policy</h3>
              <p>
                Services may be cancelled up to 24 hours before the scheduled appointment without 
                penalty. Cancellations with less than 24 hours notice may incur a $50 service fee.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">6. Hazardous Materials</h3>
              <p>
                We do not handle hazardous materials including paints, chemicals, asbestos, or 
                other dangerous substances. Clients must arrange separate disposal for such items.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">7. Satisfaction Guarantee</h3>
              <p>
                We stand behind our work. If you're not satisfied with our service, please contact 
                us within 48 hours of completion and we'll work to resolve any issues.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">8. Privacy</h3>
              <p>
                We respect your privacy and will not share your personal information with third 
                parties except as necessary to provide our services (such as donation pickups).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">9. Contact Information</h3>
              <p>
                For questions about these terms or our services, contact us at (613) 712-4848 
                or info@declutterdirect.ca.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;