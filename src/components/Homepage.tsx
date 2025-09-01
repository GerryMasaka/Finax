import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ServiceCard } from './ServiceCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
  ArrowRight
} from 'lucide-react';

export function Homepage() {
  const services = [
    {
      title: 'Bookkeeping & Accounting',
      description: 'We keep your financial records accurate and up-to-date, ensuring you have real-time visibility into your business performance.',
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: 'Tax Preparation',
      description: 'We handle individual and corporate tax planning and filing, ensuring compliance while maximizing your deductions.',
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: 'Business Advisory',
      description: 'We drive growth with strategic insights, financial planning, and data-driven recommendations for your business.',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Payroll Services',
      description: 'We streamline payroll management, ensuring accurate and timely payments while maintaining full compliance.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Audit & Assurance',
      description: 'Gain confidence in your financials with our comprehensive audit and assurance services for stakeholder trust.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Training & Support',
      description: 'Empowering your team with knowledge through practical training in accounting software and financial management.',
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Simplifying Finance, Empowering Growth.
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Providing Financial Clarity for Sustainable Growth.
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Finax Consult, we make finance simple so you can focus on what matters most - growing your business. With expert accounting, tax, payroll, and advisory services tailored for individuals, SME’s and corporates, we help you unlock opportunities while staying compliant.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact-form')}>
                  Book an appointment
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('services-overview')}>
                  Explore Our Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjQ2MDc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional business team meeting"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a full range of accounting and advisory solutions tailored for individuals, startups, 
              SMEs, and established corporations in Kenya, ensuring your financial success at every stage of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onMoreClick={() => window.location.assign('/services')}
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
                  src="https://images.unsplash.com/photo-1625225233840-695456021cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjYWxjdWxhdG9yJTIwYWNjb3VudGluZyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NTY0NjA4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Financial documents and calculator"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">About Finax Consult</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finax Consult Limited is a trusted accounting and advisory firm dedicated to simplifying finance 
                for businesses and individuals across Kenya. Founded and led by Eddie Omoyo, who brings over 15 years 
                of experience in accounting, taxation, and business advisory services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We pride ourselves on being more than accountants. We are partners in your success, providing 
                personalized solutions that drive growth and ensure compliance.
              </p>
              <Button variant="outline" onClick={() => window.location.assign('/about')}>
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section id="contact-teaser" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get your free consultation today and discover how we can help streamline your finances and grow your business.
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
              href="mailto:info@finax.co.ke"
              className="flex items-center justify-center space-x-3 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">info@finax.co.ke</span>
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
              onClick={() => window.location.assign('/contact')}
            >
              Get Your Free Consultation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}