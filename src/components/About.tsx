
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Globe, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { value: "500+", label: "Довольных клиентов", icon: <CheckCircle className="h-8 w-8 text-primary" /> },
    { value: "50,000м²", label: "Складских площадей", icon: <Globe className="h-8 w-8 text-primary" /> },
    { value: "24/7", label: "Режим работы", icon: <Clock className="h-8 w-8 text-primary" /> },
    { value: "15+", label: "Лет на рынке", icon: <TrendingUp className="h-8 w-8 text-primary" /> }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-accent mb-8 tracking-tight leading-tight">
              О КОМПАНИИ <span className="text-primary">FORTIUS</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground font-medium">
                Мы — ведущая компания в сфере дистрибуции и складского хранения, 
                предоставляющая комплексные логистические решения для бизнеса любого масштаба.
              </p>
              <p className="text-muted-foreground font-medium">
                Наша миссия — обеспечить надёжную и эффективную цепочку поставок для наших клиентов, 
                используя современные технологии и профессиональный подход к каждому проекту.
              </p>
            </div>
            
            <div className="space-y-6 mt-10">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-accent font-bold text-lg tracking-wide">СОВРЕМЕННЫЕ СКЛАДСКИЕ КОМПЛЕКСЫ</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-accent font-bold text-lg tracking-wide">ПРОФЕССИОНАЛЬНАЯ КОМАНДА</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-accent font-bold text-lg tracking-wide">ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-section-alt text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-accent mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
