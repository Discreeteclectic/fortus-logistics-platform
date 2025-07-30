import { Button } from "@/components/ui/button";
import heroImage from "@/assets/warehouse-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Современный складской комплекс"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Профессиональные услуги{" "}
            <span className="text-primary bg-background/10 px-2 rounded">
              дистрибуции
            </span>{" "}
            и хранения
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Fortius Trade Supplies предоставляет комплексные решения для вашего бизнеса: 
            от складского хранения до полного цикла дистрибуции товаров.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-6">
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-accent">
              Наши услуги
            </Button>
          </div>
        </div>
      </div>
      
      {/* Geometric Elements */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-32 h-32 border-2 border-primary/30 rotate-45"></div>
      </div>
    </section>
  );
};

export default Hero;