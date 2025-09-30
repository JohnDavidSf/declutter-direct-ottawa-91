import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "@/components/AppLink";import { CheckCircle, Package, Recycle, Sparkles, Archive, Trash2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Package className="w-8 h-8 text-accent" />,
      title: "Remove and Sort All Items",
      description: "We carefully remove everything from your garage and sort items into categories: keep, donate, recycle, and dispose."
    },
    {
      icon: <Archive className="w-8 h-8 text-accent" />,
      title: "Organize What You Want to Keep",
      description: "Items you choose to keep are organized logically by frequency of use and category, making everything easy to find."
    },
    {
      icon: <Recycle className="w-8 h-8 text-accent" />,
      title: "Safely Dispose of What You Don't",
      description: "We responsibly dispose of unwanted items through donation, recycling, and proper waste management."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Optional Shelving/Box Setup",
      description: "We can install basic shelving systems and provide labeled storage boxes to maximize your space."
    },
    {
      icon: <Trash2 className="w-8 h-8 text-accent" />,
      title: "Final Clean Sweep of the Garage",
      description: "We finish with a thorough cleaning of your entire garage, leaving it spotless and ready to park your vehicle."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive garage cleanout service follows a proven 5-step process 
            to transform your cluttered space into an organized area you'll love.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    {service.icon}
                  </div>
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

        {/* Process Timeline */}
        

        {/* Additional Services */}
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
                We proudly serve the entire Ottawa-Gatineau Metropolitan Area, including:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Ottawa and surrounding communities</li>
                <li>• Gatineau and surrounding areas</li>
                <li>• Kanata, Orleans, Barrhaven</li>
                <li>• Nepean, Gloucester, Cumberland</li>
                <li>• And many more communities</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Not sure if we serve your area? Contact us to confirm!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-accent text-accent-foreground p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Transform your garage with our professional service. Park your vehicle indoors this winter!
            
          </p>
          <Link 
  to="/Pricing" 
  onClick={() => window.scrollTo(0, 0)}
>
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