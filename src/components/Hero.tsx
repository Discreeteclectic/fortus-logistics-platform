
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/warehouse-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Современный складской комплекс"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/80 to-accent/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
              <span className="block">FORTIUS</span>
              <span className="block text-primary">TRADE</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-wider">
                SUPPLIES
              </span>
            </h1>
            
            <div className="max-w-2xl space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white/90 tracking-wide uppercase">
                Профессиональные услуги дистрибуции и хранения
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Комплексные решения для вашего бизнеса: от складского хранения 
                до полного цикла дистрибуции товаров
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-12 py-6 font-bold tracking-wide uppercase">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-accent font-bold tracking-wide uppercase">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Geometric Elements */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-40 h-40 border-4 border-primary/40 rotate-45"></div>
        <div className="w-24 h-24 border-2 border-white/30 rotate-12 mt-8 ml-8"></div>
      </div>
    </section>
  );
};

export default Hero;
