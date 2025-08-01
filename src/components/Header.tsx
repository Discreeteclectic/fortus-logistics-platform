
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-20 items-center">
        <div className="flex items-center space-x-4">
          <a href="/">
            <img 
              src="/lovable-uploads/bc706c8c-b48f-49ff-a3b4-0aab10eb0c3f.png" 
              alt="Fortius Trade Supplies"
              className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          <a href="/services" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            УСЛУГИ
          </a>
          <a href="/about" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            О КОМПАНИИ  
          </a>
          <a href="/clients" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            КЛИЕНТЫ
          </a>
          <a href="/technology" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            ТЕХНОЛОГИИ
          </a>
          <a href="/contact" className="text-base font-semibold hover:text-primary transition-colors tracking-wide">
            КОНТАКТЫ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-4 text-sm">
            <span className="text-primary font-semibold">+998904040047</span>
            <span className="text-muted-foreground">fortiustradesupplies@gmail.com</span>
          </div>
          <Button variant="outline" size="lg" className="hidden sm:flex font-semibold tracking-wide">
            СВЯЗАТЬСЯ С НАМИ
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
