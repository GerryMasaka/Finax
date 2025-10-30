import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Youtube, X } from 'lucide-react';

import { Link } from 'react-router-dom';

export function Footer() {
  const serviceLinks = [
    'Tax Preparation',
    'Bookkeeping & Accounting', 
    'Business Advisory',
    'Payroll Services',
    'Audit & Assurance',
    'Training & Support'
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Resources', path: '/resources' },
    { label: 'Privacy Policy', path: '/privacy' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: X, href: '#', label: 'X' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a 
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {/* <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+254729500700"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+254 729 500 700</span>
              </a>
              <a 
                href="mailto:connect@finax.co.ke"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>connect@finax.co.ke</span>
              </a>
              <a 
                href="https://wa.me/254729500700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              {/* Office location (clickable) */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=WestPark+Towers,+Mpesi+Lane,+Off+Muthithi+Road,+Westlands,+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Open Finax Consult Limited location in Google Maps"
                >
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Finax Consult Limited — Nairobi, Kenya</span>
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground italic">
              "At Finax, we turn financial complexity into clarity — so you can grow with confidence."
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © 2025 Finax Consult Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}