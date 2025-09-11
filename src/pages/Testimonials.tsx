import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Kanata, ON",
      rating: 5,
      text: "I can't believe the transformation! My garage went from a disaster zone to perfectly organized in just one day. The team was professional, respectful, and worked so efficiently. The flat fee pricing was exactly as quoted – no surprises. I can finally park my car in the garage again!",
      image: "https://plus.unsplash.com/premium_photo-1682437826626-044d1234806d?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Orleans, ON",
      rating: 5,
      text: "Outstanding service from start to finish. The consultation was thorough and the quote was fair. On service day, they arrived exactly on time and got right to work. They even helped me set up a shelving system that makes everything so easy to find. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Jennifer Thompson",
      location: "Barrhaven, ON",
      rating: 5,
      text: "After years of putting off organizing our garage, Declutter Direct made it so easy. They handled everything – sorting, organizing, donations, disposal. The team was incredibly careful with our belongings and the final result exceeded our expectations. Worth every penny!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      location: "Gatineau, QC",
      rating: 5,
      text: "Professional, reliable, and trustworthy. They treated our home with respect and our belongings with care. The flat fee pricing was transparent and fair. Our garage is now a functional space instead of a storage nightmare. We couldn't be happier with the results!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "Flat Fee", label: "No Hidden Costs" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "5★", label: "Average Rating" },
    { number: "1 Day", label: "Average Completion" }
    
    
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what homeowners across Ottawa-Gatineau 
            are saying about their garage transformation experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {stats.map((stat, index) => (
    <Card key={index} className="text-center shadow-card">
      <CardContent className="pt-8 pb-6">
        <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
        <div className="text-muted-foreground">{stat.label}</div>
      </CardContent>
    </Card>
  ))}
</div>


        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-primary">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-secondary p-12 rounded-lg mb-16">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Why Customers Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consistently Excellent</h3>
              <p className="text-muted-foreground">
                98% customer satisfaction rate with hundreds of completed projects.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted & Reliable</h3>
              <p className="text-muted-foreground">
                Fully reliable, dependable, and committed to treating your home with respect.
              </p>
            </div>

           

            <div className="text-center">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Flat fee guarantee means no surprises – you know exactly what you'll pay.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Recent Reviews
          </h2>
          <div className="bg-card p-8 rounded-lg shadow-card max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground italic mb-4">
              "The best decision we made this year! Our garage is now a functional 
              space that we actually enjoy using. The team was amazing and the 
              process was stress-free from start to finish."
            </p>
            <p className="text-primary font-semibold">- Lisa & Mark, Nepean, ON</p>
            <p className="text-sm text-muted-foreground">Completed last week</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-accent text-accent-foreground p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the same professional service and amazing transformation 
            that our customers rave about. Get your free quote today!
          </p>
          <Link 
  to="/contact" 
  onClick={() => window.scrollTo(0, 0)}
>
  <Button size="lg" variant="secondary" className="shadow-hero">
    Get Your Free Quote
  </Button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;