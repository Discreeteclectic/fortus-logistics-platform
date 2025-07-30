
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-20 items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/075401bb-7f23-4a4b-ba19-6f3d7222cdc6.png" 
            alt="Fortius Trade Supplies"
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          <a href="#services" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            УСЛУГИ
          </a>
          <a href="#about" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            О КОМПАНИИ
          </a>
          <a href="#advantages" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            ПРЕИМУЩЕСТВА
          </a>
          <a href="#contact" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            КОНТАКТЫ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="lg" className="hidden sm:flex font-semibold tracking-wide">
            СВЯЗАТЬСЯ С НАМИ
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
