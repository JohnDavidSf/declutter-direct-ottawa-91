import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: January 2024
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Declutter Direct Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-muted-foreground">
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Information We Collect</h3>
              <p>
                We collect information you provide when requesting services, including your name, 
                contact information, address, and details about your garage cleanout needs. We may 
                also collect photos of your space during consultation for planning purposes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">How We Use Your Information</h3>
              <p>
                We use your information to provide our services, schedule appointments, send service 
                updates, process payments, and communicate about your project. We may also use 
                before/after photos (with your permission) for marketing purposes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Information Sharing</h3>
              <p>
                We do not sell or rent your personal information to third parties. We may share 
                information with trusted service providers (such as donation centers) only as 
                necessary to provide our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Data Retention</h3>
              <p>
                We retain your information for as long as necessary to provide our services and 
                comply with legal obligations. Customer information is typically retained for 
                3 years after service completion.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information. You may 
                also opt out of marketing communications at any time. Contact us to exercise these rights.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Cookies and Website Data</h3>
              <p>
                Our website may use cookies to improve user experience and analyze site usage. 
                You can disable cookies through your browser settings, though this may affect 
                site functionality.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Third-Party Services</h3>
              <p>
                We may use third-party services for payment processing, scheduling, and analytics. 
                These providers have their own privacy policies and we are not responsible for 
                their practices.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Changes to This Policy</h3>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on our website with an updated date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Contact Us</h3>
              <p>
                If you have questions about this privacy policy or our data practices, please 
                contact us at (613) 661-1888 or info@declutterdirect.ca.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;