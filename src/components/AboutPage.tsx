import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

export function AboutPage() {
  const whyChooseUsPoints = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expertise",
      description:
        "Over 15 years of combined experience in accounting, taxation, and business advisory services across diverse industries.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Service",
      description:
        "Tailored solutions that fit your unique business needs, from startups to established corporations.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Clarity & Empowerment",
      description:
        "We simplify complex financial concepts and empower you with the knowledge to make informed decisions.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Partner in Growth",
      description:
        "We are committed to your long-term success, providing ongoing support as your business evolves.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in everything we do.",
    },
    {
      title: "Excellence",
      description:
        "We deliver accurate, timely, and professional services you can rely on.",
    },
    {
      title: "Client-Centered",
      description:
        "We build long-term relationships and provide solutions that fit your unique needs.",
    },
    {
      title: "Innovation",
      description:
        "We embrace technology and modern practices to make accounting smarter and simpler.",
    },
    {
      title: "Accountability",
      description:
        "We take ownership of our work and deliver results with transparency.",
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden"
        style={{ height: "600px" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/Finax/AboutFinaxConsult.jpg"
            alt="Services Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 28%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-muted/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="text-center max-w-4xl mx-auto backdrop-blur-bg bg-black/40 rounded-xl px-6 py-8 shadow-2xl p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Your trusted partner in financial clarity and business growth
              across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To empower Kenyan businesses and individuals with reliable,
                  professional, and tailored accounting & advisory solutions
                  that simplify compliance, drive financial clarity, and support
                  growth.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To be the most trusted and innovative accounting partner in
                  Kenya, setting the standard for excellence in financial
                  management and advisory services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose Finax Consult?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine deep expertise with personalized service to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <Card
                key={index}
                className="text-center h-full"
                style={{ backgroundColor: "#0C5B69", color: "#FFFFFF" }}
              >
                <CardHeader>
                  <div
                    className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#73d6e3ff" }}
                  >
                    <div>{point.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                </CardHeader>
                <CardContent style={{ color: "#FFFFFF" }}>
                  <p className="text-sm leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape how
              we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>{value.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-1">
                  <div className="relative h-80 lg:h-auto">
                    <ImageWithFallback
                      src=""
                      alt="Eddie Omoyo - Founder & Lead Consultant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          Eddie Omoyo
                        </h3>
                        <Badge variant="secondary" className="mb-4">
                          Founder & Lead Consultant
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        With over 15 years of experience in accounting,
                        taxation, and business advisory services, Eddie brings a
                        wealth of knowledge and expertise to Finax Consult. He
                        has worked with diverse clients ranging from individual
                        entrepreneurs to large corporations and NGOs.
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        Eddie's passion lies in simplifying complex financial
                        concepts and empowering business owners with the
                        knowledge and tools they need to make informed decisions
                        and achieve sustainable growth.
                      </p>

                      <div className="flex space-x-4 pt-4">
                        <a
                          href="mailto:eddie@finax.co.ke"
                          className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity"
                        >
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">Contact Eddie</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience the difference of working with a team that truly cares
              about your success. Let's discuss how we can help your business
              thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.location.assign("/contact")}
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.assign("/services")}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
