import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-neon rounded glow-primary"></div>
            <span className="text-xl font-bold text-primary text-glow-primary">
              Paledi Events
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Paledi Events. Creating unforgettable experiences with neon style.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
