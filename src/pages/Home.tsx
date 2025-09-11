import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import garageBefore from "@/assets/garage-before.jpg";
import garageAfter from "@/assets/garage-after.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                One flat fee.<br />
                One day.<br />
                <span className="text-accent">One clean garage.</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Professional garage cleanout service in Ottawa-Gatineau. 
                We'll transform your cluttered garage into an organized space you'll love.
              </p>
              <Link 
  to="/contact" 
  onClick={() => window.scrollTo(0, 0)}
>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hero">
                  Get Your Free Quote – Flat Fee Guarantee
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional garage organization team at work"
                className="rounded-lg shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              See the Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From chaos to organized perfection. Here's what we can accomplish in just one day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={garageBefore}
                  alt="Cluttered garage before organization"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-destructive/10">
                  <h3 className="text-2xl font-bold text-destructive mb-2">Before</h3>
                  <p className="text-muted-foreground">
                    Cluttered, disorganized, and impossible to use effectively.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={garageAfter}
                  alt="Clean organized garage after service"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-success/10">
                  <h3 className="text-2xl font-bold text-success mb-2">After</h3>
                  <p className="text-muted-foreground">
                    Clean, organized, and ready to be enjoyed by your family.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose Declutter Direct?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Flat Fee Pricing</h3>
                <p className="text-muted-foreground">
                  No surprises. One transparent price for most garages.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                <p className="text-muted-foreground">
                  Complete transformation in just one day.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Professional Team</h3>
                <p className="text-muted-foreground">
                  Trusted, reliable, and fully dependable professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <Recycle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Disposal</h3>
                <p className="text-muted-foreground">
                  Responsible disposal and donation of unwanted items.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Reclaim Your Garage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied homeowners in Ottawa-Gatineau who've transformed 
            their garages with our professional service.
          </p>
          <Link 
  to="/contact" 
  onClick={() => window.scrollTo(0, 0)}
>
            <Button size="lg" variant="secondary" className="shadow-hero">
              Get Your Free Quote Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;