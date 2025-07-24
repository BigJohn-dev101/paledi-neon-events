import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-foreground/90 backdrop-blur-lg border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg glow-primary"></div>
            <span className="text-2xl font-bold text-background text-glow-primary">
              Paledi Events
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-background hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#services" className="text-background hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="#portfolio" className="text-background hover:text-primary transition-colors duration-300">
              Portfolio
            </a>
            <a href="#pricing" className="text-background hover:text-primary transition-colors duration-300">
              Pricing
            </a>
            <a href="#contact" className="text-background hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>
          
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;