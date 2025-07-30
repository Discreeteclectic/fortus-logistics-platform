import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/075401bb-7f23-4a4b-ba19-6f3d7222cdc6.png" 
            alt="Fortius Trade Supplies"
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            О компании
          </a>
          <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">
            Преимущества
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Связаться с нами
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;