import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'bookkeeping',
      title: 'Bookkeeping & Accounting',
      subtitle: 'Accurate financial records for informed decision-making',
      description: 'Professional bookkeeping and accounting services that keep your financial records accurate, up-to-date, and compliant with Kenyan standards.',
      includes: [
        'General ledger and journal entries',
        'Accounts receivable and payable management',
        'Bank reconciliations',
        'Monthly and quarterly financial reports',
        'Financial statement preparation',
        'Cash flow management'
      ],
      benefits: [
        'Real-time financial clarity',
        'Accurate reporting for decision-making',
        'Audit-ready financial records',
        'Improved cash flow management'
      ],
      cta: 'Request Bookkeeping Support'
    },
    {
      id: 'tax',
      title: 'Tax Preparation & Planning',
      subtitle: 'Comprehensive tax solutions for individuals and businesses',
      description: 'Expert tax preparation and strategic planning services to ensure compliance while maximizing your deductions and minimizing tax liability.',
      includes: [
        'Individual and corporate tax returns',
        'VAT filing and compliance',
        'PAYE, withholding, and excise tax management',
        'Strategic tax planning',
        'Tax audit representation',
        'Quarterly tax projections'
      ],
      benefits: [
        'Avoid penalties and interest charges',
        'Maximize legitimate tax deductions',
        'Save time with professional preparation',
        'Strategic planning for tax efficiency'
      ],
      cta: 'Book a Tax Consultation'
    },
    {
      id: 'advisory',
      title: 'Business Advisory',
      subtitle: 'Strategic insights for sustainable business growth',
      description: 'Comprehensive business advisory services that provide strategic insights, financial analysis, and growth consulting tailored to your business needs.',
      includes: [
        'Financial planning and analysis',
        'Cash flow management strategies',
        'Growth and expansion consulting',
        'Budgeting and forecasting',
        'Performance metrics and KPIs',
        'Business process optimization'
      ],
      benefits: [
        'Data-driven business decisions',
        'Improved cash flow and profitability',
        'Long-term business sustainability',
        'Strategic growth planning'
      ],
      cta: 'Schedule a Strategy Session'
    },
    {
      id: 'payroll',
      title: 'Payroll Management',
      subtitle: 'Streamlined payroll processing and compliance',
      description: 'Complete payroll management services ensuring accurate, timely payments while maintaining full compliance with Kenyan employment and tax regulations.',
      includes: [
        'Monthly salary and wage processing',
        'PAYE, NSSF, and SHIF compliance',
        'Benefits and allowances calculation',
        'Payroll reports and payslips',
        'Annual P9A and P10 forms',
        'Employee record management'
      ],
      benefits: [
        'On-time, accurate payroll processing',
        'Full regulatory compliance',
        'Happier, more confident staff',
        'Reduced administrative burden'
      ],
      cta: 'Get Payroll Assistance'
    },
    {
      id: 'audit',
      title: 'Audit & Assurance',
      subtitle: 'Independent verification for stakeholder confidence',
      description: 'Professional audit and assurance services that provide independent verification of your financial statements and internal controls.',
      includes: [
        'External financial statement audits',
        'Financial statement reviews',
        'Compliance audits',
        'Internal control assessments',
        'Management letter recommendations',
        'Due diligence services'
      ],
      benefits: [
        'Enhanced stakeholder trust and confidence',
        'Early identification of financial risks',
        'Regulatory compliance assurance',
        'Improved internal controls'
      ],
      cta: 'Book an Audit Service'
    },
    {
      id: 'training',
      title: 'Training & Support',
      subtitle: 'Empowering your team with financial knowledge',
      description: 'Comprehensive training programs and ongoing support to empower your team with practical financial management skills and software proficiency.',
      includes: [
        'QuickBooks and accounting software training',
        'Financial literacy workshops',
        'Payroll compliance training',
        'One-on-one support sessions',
        'Custom training programs',
        'Ongoing technical support'
      ],
      benefits: [
        'Practical, applicable skills',
        'Reduced errors and improved efficiency',
        'Greater financial confidence',
        'Long-term capacity building'
      ],
      cta: 'Enroll for Training'
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
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive accounting and advisory solutions tailored for individuals, startups, SMEs, 
              and established corporations in Kenya. We provide the expertise you need to grow with confidence.
            </p>
            <Button size="lg" onClick={() => scrollToSection('contact-form')}>
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl lg:text-3xl text-primary mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-lg text-muted-foreground">
                          {service.subtitle}
                        </p>
                      </div>
                      <Button onClick={() => window.location.assign('/contact')}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-primary mb-4">Services Include:</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-primary mb-4">Key Benefits:</h4>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let our expert team help you streamline your finances, ensure compliance, and unlock new growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.assign('/contact')}
              >
                Get Your Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.assign('/about')}
              >
                Learn About Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}