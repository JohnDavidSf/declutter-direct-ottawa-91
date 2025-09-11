import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: ""
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fileCount = selectedFiles.length;
    const fileText = fileCount > 0 ? ` with ${fileCount} photo${fileCount > 1 ? 's' : ''}` : '';
    toast({
      title: "Quote Request Received!",
      description: `We'll contact you within 24 hours to schedule your free consultation${fileText}.`,
    });
    setFormData({ name: "", phone: "", email: "", address: "", message: "" });
    setSelectedFiles([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return isValidType && isValidSize;
    });
    
    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid Files",
        description: "Please select only image files under 10MB each.",
        variant: "destructive"
      });
    }
    
    setSelectedFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your garage? Contact us today for a free consultation 
            and transparent, flat-fee quote with no obligation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Request Your Free Quote</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll contact you within 24 hours to schedule 
                your free consultation.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(613) 555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                    Address *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your address in Ottawa-Gatineau area"
                  />
                </div>

                <div>
                  <label htmlFor="photos" className="block text-sm font-medium text-foreground mb-2">
                    Photos of Your Garage (Optional)
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <Input
                        id="photos"
                        name="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="photos"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-muted-foreground/50 transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload photos or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PNG, JPG up to 10MB each (max 5 photos)
                          </p>
                        </div>
                      </label>
                    </div>
                    
                    {selectedFiles.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Garage photo ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                            <p className="text-xs text-muted-foreground mt-1 truncate">
                              {file.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your garage
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your garage size, current condition, and any specific needs or questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Get My Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Call */}
            <Card className="shadow-card bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now for Immediate Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4 opacity-90">
                  Speak directly with our team for fastest response:
                </p>
                <a href="tel:613-555-0199" className="block">
                  <Button size="lg" variant="secondary" className="w-full text-xl font-bold">
                    (613) 555-5555
                  </Button>
                </a>
                <p className="text-sm mt-3 opacity-75">
                 Available Anytime
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(613) 555-5555</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@declutterdirect.ca</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-muted-foreground">
                      Ottawa-Gatineau Metropolitan Area<br />
                      Including Kanata, Orleans, Barrhaven, Nepean, and surrounding communities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">
                    8:00 AM - 8:00 PM
                      
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">24-Hour Response</p>
                      <p className="text-sm text-muted-foreground">We'll contact you within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Free Consultation</p>
                      <p className="text-sm text-muted-foreground">No-obligation garage assessment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Transparent Quote</p>
                      <p className="text-sm text-muted-foreground">Clear, flat-fee pricing with no hidden costs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Area Map Description */}
        <div className="bg-secondary p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Proudly Serving Ottawa-Gatineau
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We provide professional garage cleanout services throughout the National Capital Region, 
            including Ottawa, Gatineau, and all surrounding communities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-muted-foreground">
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
          <p className="text-sm text-muted-foreground mt-6">
            Don't see your community listed? Contact us – we likely serve your area too!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;