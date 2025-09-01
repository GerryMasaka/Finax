import { ContactForm } from "./ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

export function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+254 729 500 700",
      href: "tel:+254729500700",
      description: "Call us during business hours",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@finax.co.ke",
      href: "mailto:info@finax.co.ke",
      description: "Send us a detailed message",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+254 729 500 700",
      href: "https://wa.me/254729500700",
      description: "Quick questions and support",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Location",
      value: "WestPark Towers, Westlands",
      href: "https://maps.google.com/?q=WestPark+Towers,+Mpesi+Lane,+Off+Muthithi+Road,+Westlands,+Nairobi",
      description: "Visit us by appointment",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get Your Free Consultation Today
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to streamline your business and finances? Contact our team
              for professional services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center h-full group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <div className="text-primary group-hover:text-primary-foreground transition-colors">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    {method.value}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Hours */}
          <Card className="max-w-md mx-auto mb-16">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm font-medium">{schedule.day}</span>
                    <span className="text-sm text-muted-foreground">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Office visits by appointment only
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Westlands, Nairobi, our office is easily
              accessible by public transport and private vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Location Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Office Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-primary">
                      Finax Consult Limited
                    </p>
                    <p className="text-muted-foreground">
                      WestPark Towers
                      <br />
                      Mpesi Lane, Off Muthithi Road
                      <br />
                      Westlands, Nairobi
                      <br />
                      Kenya
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=WestPark+Towers,+Mpesi+Lane,+Off+Muthithi+Road,+Westlands,+Nairobi",
                        "_blank"
                      )
                    }
                    className="w-full"
                  >
                    Get Directions
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Getting Here</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium text-primary mb-2">
                      By Public Transport
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Take a matatu to Westlands and alight at the Westlands
                      roundabout. WestPark Towers is a short walk from the main
                      road.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">
                      By Private Vehicle
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Parking is available within the building. Enter through
                      the main gate and follow signs to visitor parking.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="h-full">
              <Card className="h-full min-h-[400px]">
                <CardContent className="p-0 h-full">
                  <div
                    style={{ width: "100%", height: "450px", margin: "2rem 0" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.846504073192!2d36.804485974965665!3d-1.2646255987233344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1756633545039!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps Preview"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Let's Start Your Financial Journey
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Every successful business starts with a conversation. Reach out
              today and let's discuss how we can help you achieve your financial
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+254729500700">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Call Now: +254 729 500 700
                </Button>
              </a>
              <a
                href="https://wa.me/254729500700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}