import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ResourcesPage } from './components/ResourcesPage';
import { ContactPage } from './components/ContactPage';
import { Toaster } from './components/ui/sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={
              <div>
                <section className="py-20">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
                      <div className="prose prose-lg max-w-none">
                        <p className="text-muted-foreground mb-6">
                          This privacy policy is currently being developed. Please contact us directly 
                          for any privacy-related questions or concerns.
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Contact us:</strong><br />
                          Email: info@finax.co.ke<br />
                          Phone: +254 729 500 700
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}