import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesPage() {
  const [openAccordion, setOpenAccordion] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      setOpenAccordion(hash);
    }
  }, []);
  const services = [
    {
      id: "bookkeeping",
      title: "Bookkeeping & Accounting",
      subtitle: "Accurate financial records for informed decision-making",
      description:
        "Professional bookkeeping and accounting services that keep your financial records accurate, up-to-date, and compliant with Kenyan standards.",
      includes: [
        "General ledger and journal entries",
        "Accounts receivable and payable management",
        "Bank reconciliations",
        "Monthly and quarterly financial reports",
        "Financial statement preparation",
        "Cash flow management",
      ],
      benefits: [
        "Real-time financial clarity",
        "Accurate reporting for decision-making",
        "Audit-ready financial records",
        "Improved cash flow management",
      ],
      cta: "Request Bookkeeping Support",
    },
    {
      id: "tax",
      title: "Tax Preparation & Planning",
      subtitle: "Comprehensive tax solutions for individuals and businesses",
      description:
        "Expert tax preparation and strategic planning services to ensure compliance while maximizing your deductions and minimizing tax liability.",
      includes: [
        "Individual and corporate tax returns",
        "VAT filing and compliance",
        "PAYE, withholding, and excise tax management",
        "Strategic tax planning",
        "Tax audit representation",
        "Quarterly tax projections",
      ],
      benefits: [
        "Avoid penalties and interest charges",
        "Maximize legitimate tax deductions",
        "Save time with professional preparation",
        "Strategic planning for tax efficiency",
      ],
      cta: "Book a Tax Consultation",
    },
    {
      id: "advisory",
      title: "Business Advisory",
      subtitle: "Strategic insights for sustainable business growth",
      description:
        "Comprehensive business advisory services that provide strategic insights, financial analysis, and growth consulting tailored to your business needs.",
      includes: [
        "Financial planning and analysis",
        "Cash flow management strategies",
        "Growth and expansion consulting",
        "Budgeting and forecasting",
        "Performance metrics and KPIs",
        "Business process optimization",
      ],
      benefits: [
        "Data-driven business decisions",
        "Improved cash flow and profitability",
        "Long-term business sustainability",
        "Strategic growth planning",
      ],
      cta: "Schedule a Strategy Session",
    },
    {
      id: "payroll",
      title: "Payroll Management",
      subtitle: "Streamlined payroll processing and compliance",
      description:
        "Complete payroll management services ensuring accurate, timely payments while maintaining full compliance with Kenyan employment and tax regulations.",
      includes: [
        "Monthly salary and wage processing",
        "PAYE, NSSF, and SHIF compliance",
        "Benefits and allowances calculation",
        "Payroll reports and payslips",
        "Annual P9A and P10 forms",
        "Employee record management",
      ],
      benefits: [
        "On-time, accurate payroll processing",
        "Full regulatory compliance",
        "Happier, more confident staff",
        "Reduced administrative burden",
      ],
      cta: "Get Payroll Assistance",
    },
    {
      id: "audit",
      title: "Audit & Assurance",
      subtitle: "Independent verification for stakeholder confidence",
      description:
        "Professional audit and assurance services that provide independent verification of your financial statements and internal controls.",
      includes: [
        "External financial statement audits",
        "Financial statement reviews",
        "Compliance audits",
        "Internal control assessments",
        "Management letter recommendations",
        "Due diligence services",
      ],
      benefits: [
        "Enhanced stakeholder trust and confidence",
        "Early identification of financial risks",
        "Regulatory compliance assurance",
        "Improved internal controls",
      ],
      cta: "Book an Audit Service",
    },
    {
      id: "training",
      title: "Training & Support",
      subtitle: "Empowering your team with financial knowledge",
      description:
        "Comprehensive training programs and ongoing support to empower your team with practical financial management skills and software proficiency.",
      includes: [
        "QuickBooks and accounting software training",
        "Financial literacy workshops",
        "Payroll compliance training",
        "One-on-one support sessions",
        "Custom training programs",
        "Ongoing technical support",
      ],
      benefits: [
        "Practical, applicable skills",
        "Reduced errors and improved efficiency",
        "Greater financial confidence",
        "Long-term capacity building",
      ],
      cta: "Enroll for Training",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden" style={{height: '600px'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/Finax/Our Professional Services.jpg"
            alt="Services Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{objectPosition: '50% 50%', zoom: '-830%'}}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-muted/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20 ">
          <div className="text-center max-w-4xl mx-auto backdrop-blur-sm bg-black/40 rounded-xl px-6 py-8 shadow-2xl mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              What We Offer
            </h1>
            <p className="text-xl text-white leading-relaxed mb-8">
              Comprehensive accounting and advisory solutions tailored for
              individuals, startups, SMEs, NGOs and corporations in
              Kenya. We provide the expertise you need to grow with confidence.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.assign("/contact")}
              className="p-4 mb-4"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            <Accordion
              type="single"
              collapsible
              value={openAccordion}
              onValueChange={setOpenAccordion}
            >
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id}>
                  <Card
                    className="overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      // Prevent toggling when clicking the AccordionTrigger button
                      if (
                        (e.target as HTMLElement).closest(
                          '[data-slot="accordion-trigger"]'
                        )
                      )
                        return;
                      setOpenAccordion(
                        openAccordion === service.id ? undefined : service.id
                      );
                    }}
                  >
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
                        <AccordionTrigger>
                          <Button variant="outline">
                            {service.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </AccordionTrigger>
                      </div>
                    </CardHeader>
                    <AccordionContent>
                      <CardContent className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-1">
                            <p className="text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          <div className="lg:col-span-1">
                            <h4 className="font-semibold text-primary mb-4">
                              Services Include:
                            </h4>
                            <ul className="space-y-2">
                              {service.includes.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start space-x-2"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="lg:col-span-1">
                            <h4 className="font-semibold text-primary mb-4">
                              Key Benefits:
                            </h4>
                            <div className="space-y-2">
                              {service.benefits.map((benefit, i) => (
                                <div
                                  key={i}
                                  className="flex items-start space-x-2"
                                >
                                  <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let our expert team help you streamline your finances, ensure
              compliance, and unlock new growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.location.assign("/contact")}
              >
                Get Your Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.assign("/about")}
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
