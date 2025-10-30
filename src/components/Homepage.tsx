import { Button } from "./ui/button";
import { ServiceCard } from "./ServiceCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import {
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Shield,
  GraduationCap,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function Homepage() {
  const services = [
    {
      id: "bookkeeping",
      title: "Bookkeeping & Accounting",
      description:
        "We keep your financial records accurate and up-to-date, ensuring you have real-time visibility into your business performance.",
      icon: <Calculator className="h-6 w-6" />,
    },
    {
      id: "tax",
      title: "Tax Preparation",
      description:
        "We handle individual and corporate tax planning and filing, ensuring compliance while maximizing your deductions.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: "advisory",
      title: "Business Advisory",
      description:
        "We drive growth with strategic insights, financial planning, and data-driven recommendations for your business.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      id: "payroll",
      title: "Payroll Services",
      description:
        "We streamline payroll management, ensuring accurate and timely payments while maintaining full compliance.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: "audit",
      title: "Audit & Assurance",
      description:
        "Gain confidence in your financials with our comprehensive audit and assurance services for stakeholder trust.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      id: "training",
      title: "Training & Support",
      description:
        "Empowering your team with knowledge through practical training in accounting software and financial management.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bannerImages = [
    "/Finax/flat-lay-wallet.jpg",
    "/Finax/stock-market-graph.jpg",
    "/Finax/copyspace-business-elements.jpg",
    // "/Finax/touching-mobile-phone.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section
        className="py-20 lg:py-32 relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ height: "600px" }}
      >
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {bannerImages.map((src, i) => (
            <ImageWithFallback
              key={src}
              src={src}
              alt={`Banner ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: currentIndex === i ? 1 : 0,
                transition: "opacity 700ms ease",
                objectPosition: "50% 40%",
              }}
              loading={currentIndex === i ? "eager" : "lazy"}
              fetchPriority={currentIndex === i ? "high" : "auto"}
            />
          ))}
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-muted/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20 flex items-center justify-center h-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-black/45 backdrop-blur-sm rounded-xl px-6 py-8 shadow-2xl">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
                  Simplifying Finance, Empowering Growth.
                </h1>
              </div>

              <p className="text-lg text-white leading-relaxed">
                At Finax Consult, we make finance simple so you can focus on
                what matters most - growing your business. With expert
                accounting, tax, payroll, and advisory services tailored for
                individuals, SMEs and corporates, we help you unlock
                opportunities while staying compliant.
              </p>

              <h2 className="text-xl md:text-2xl text-white mb-8 mt-4">
                We Provide Financial Clarity for Sustainable Growth.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-4">
                <Button
                  size="lg"
                  onClick={() => window.location.assign("/contact")}
                  style={{ fontSize: "13px" }}
                >
                  Book an appointment
                </Button>
                <Button
                  className="hover:bg-primary-foreground hover:text-primary"
                  variant="outline"
                  size="lg"
                  style={{ fontSize: "13px" }}
                  onClick={() => scrollToSection("services-overview")}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {bannerImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="w-3 h-3 rounded-full transition-all duration-200"
                style={{
                  backgroundColor:
                    currentIndex === i
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.4)",
                  transform: currentIndex === i ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`Show banner ${i + 1}`}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a full range of accounting and advisory solutions
              tailored for individuals, startups, SMEs, NGOs and corporations in
              Kenya, ensuring your financial success at every stage of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 background-primary">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onMoreClick={() =>
                  window.location.assign(`/services#${service.id}`)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Callout */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-l-4 border-l-primary">
            <CardContent className="p-8 lg:p-12">
              <blockquote className="text-xl lg:text-2xl italic text-center text-primary leading-relaxed">
                "The most important thing startups need to learn is structure. The most important thing larger organizations need to learn is decentralization."
              </blockquote>
              <cite className="block text-center mt-6 text-muted-foreground font-medium">
                — Vusi Thembekwayo
              </cite>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="/Finax/About Us Main Page.jpg"
                  alt="Finax Consult - About"
                  className="w-full h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Who Are We?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finax Consult Limited is a trusted accounting and advisory firm
                dedicated to simplifying finance for businesses and individuals
                across Kenya. Founded and led by Eddie Omoyo, who brings over 15
                years of experience in accounting, taxation, and business
                advisory services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We pride ourselves on being more than accountants. We are
                partners in your success, providing personalized solutions that
                drive growth and ensure compliance.
              </p>
              <Button
                className="bg-primary text-white hover:bg-primary-foreground hover:text-primary"
                variant="outline"
                onClick={() => window.location.assign("/about")}
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section
        id="contact-teaser"
        className="py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get your free consultation today and discover how we can help
              streamline your finances and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="tel:+254729500700"
              className="flex items-center justify-center space-x-3 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+254 729 500 700</span>
            </a>
            <a
              href="mailto:connect@finax.co.ke"
              className="flex items-center justify-center space-x-3 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">connect@finax.co.ke</span>
            </a>
            <a
              href="https://wa.me/254729500700"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="https://maps.google.com/?q=WestPark+Towers,+Mpesi+Lane,+Off+Muthithi+Road,+Westlands,+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Get Directions</span>
            </a>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.assign("/contact")}
              className="hover:bg-primary-foreground hover:text-primary"
            >
              Get Your Free Consultation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}