import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { 
  MessageCircle, 
  FileText, 
  HelpCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export function ResourcesPage() {
  const faqItems = [
    {
      question: "What accounting software do you recommend for small businesses?",
      answer: "We recommend QuickBooks Online for most small businesses due to its user-friendly interface, comprehensive features, and seamless integration with Kenyan banking systems. For larger businesses, we may suggest more robust solutions like Sage or custom ERP systems based on specific needs."
    },
    {
      question: "How often should I update my financial records?",
      answer: "We recommend updating your financial records at least monthly, though weekly updates are ideal for active businesses. Regular updates ensure accurate cash flow monitoring, timely decision-making, and easier year-end processes. Our bookkeeping services can handle this for you automatically."
    },
    {
      question: "What documents do I need for tax filing in Kenya?",
      answer: "For individual tax filing, you'll need your P9 form, bank statements, investment certificates, and receipts for allowable deductions. For businesses, you'll need financial statements, VAT returns, PAYE certificates, and supporting documentation. We provide a comprehensive checklist to all our tax clients."
    },
    {
      question: "How can I improve my business cash flow?",
      answer: "Key strategies include: implementing faster invoicing and collection processes, negotiating better payment terms with suppliers, managing inventory levels efficiently, and creating detailed cash flow projections. Our business advisory services can help you develop a customized cash flow improvement plan."
    },
    {
      question: "When do I need to register for VAT in Kenya?",
      answer: "You must register for VAT if your taxable turnover exceeds KES 5 million in any 12-month period. You can also voluntarily register if your turnover is below this threshold. Registration must be done within 30 days of crossing the threshold. We can assist with the registration process and ongoing VAT compliance."
    },
    {
      question: "What are the benefits of having an annual audit?",
      answer: "Annual audits provide independent verification of your financial statements, enhance credibility with stakeholders, help identify operational inefficiencies, ensure regulatory compliance, and can improve access to funding. They also provide valuable insights for business improvement through our management letter recommendations."
    },
    {
      question: "How do I choose the right business structure in Kenya?",
      answer: "The choice depends on factors like business size, liability concerns, tax implications, and growth plans. Options include sole proprietorship, partnership, limited liability company, or public limited company. We provide consultation to help you choose the most suitable structure and assist with registration processes."
    }
  ];

  const upcomingResources = [
    {
      title: "Monthly Financial Health Checklist",
      description: "A comprehensive guide to monitoring your business financial health",
      type: "Guide",
      status: "Coming Soon"
    },
    {
      title: "Kenyan Tax Calendar 2024",
      description: "Important tax dates and deadlines for businesses and individuals",
      type: "Calendar",
      status: "Coming Soon"
    },
    {
      title: "Small Business Financial Planning Template",
      description: "Excel template for budgeting and financial projections",
      type: "Template",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Resources & Support
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Access helpful guides, tools, and answers to common financial questions. 
              We're committed to empowering you with knowledge for better business decisions.
            </p>
            <Button size="lg" onClick={() => window.location.assign('/contact')}>
              Get Personalized Support
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Resources</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're developing comprehensive resources to help you manage your finances more effectively. 
              These tools and guides will be available soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingResources.map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{resource.type}</Badge>
                    <Badge variant="secondary">{resource.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="h-4 w-4 mr-2" />
                    Available soon
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about accounting, taxation, and business financial management in Kenya.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your question answered here?
            </p>
            <Button variant="outline" onClick={() => window.location.assign('/contact')}>
              Ask Our Experts
              <HelpCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Community */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Join Our WhatsApp Community
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    Connect with other business owners, get quick tips, and stay updated with the latest 
                    financial insights and regulatory changes in Kenya.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      <span>Weekly financial tips</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      <span>Tax deadline reminders</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      <span>Business networking</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      <span>Expert Q&A sessions</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/254729500700', '_blank')}
                  >
                    Join WhatsApp Community
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Support?</h2>
            <p className="text-xl opacity-90 mb-8">
              While our resources provide general guidance, every business is unique. 
              Get personalized advice tailored to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.assign('/contact')}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.assign('/services')}
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