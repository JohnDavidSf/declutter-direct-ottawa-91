import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "@/components/AppLink";import { Users, Award, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            About Declutter Direct
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Helping Ottawa-Gatineau homeowners reclaim their garage space with 
            professional, reliable, and trustworthy service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2023, Declutter Direct was born from a simple observation: 
                most homeowners in Ottawa-Gatineau had garages that served as everything 
                except what they were designed for – parking cars.
              </p>
              <p>
                We realized that the problem wasn't just clutter, but the overwhelming 
                nature of tackling such a big project. That's why we developed our 
                signature one-day, flat-fee service that takes the stress out of 
                garage organization.
              </p>
              <p>
                Today, we've helped many families transform their garages from 
                storage nightmares into functional, organized spaces they actually 
                want to use. Our professional team combines efficiency with care, 
                ensuring your belongings are treated with respect while we work 
                our magic.
              </p>
            </div>
          </div>
          
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To provide homeowners with a stress-free, professional garage 
              organization service that transforms cluttered spaces into 
              functional areas that enhance their daily lives.
            </p>
            <Link to="/services">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Your Transformation
              </Button>
            </Link>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Trustworthy</h3>
                <p className="text-muted-foreground">
                  Fully reliable and dependable. Your property and belongings 
                  are in safe hands with our professional team.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Professional</h3>
                <p className="text-muted-foreground">
                  Our experienced team arrives on time, works efficiently, 
                  and treats your home with the respect it deserves.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Reliable</h3>
                <p className="text-muted-foreground">
                  We show up when we say we will and deliver exactly 
                  what we promise – every single time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Caring</h3>
                <p className="text-muted-foreground">
                  We understand that your belongings have value and 
                  memories. We handle everything with care and respect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center bg-secondary p-12 rounded-lg">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our professional organizers are trained, reliable, and passionate about 
            helping homeowners create functional spaces. Each team member brings 
            years of experience and a commitment to excellence.
          </p>
          <Link to="/testimonials">
            <Button variant="outline" size="lg">
              See What Our Customers Say
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;