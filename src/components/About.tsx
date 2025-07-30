import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Globe, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { value: "500+", label: "Довольных клиентов", icon: <CheckCircle className="h-6 w-6 text-primary" /> },
    { value: "50,000м²", label: "Складских площадей", icon: <Globe className="h-6 w-6 text-primary" /> },
    { value: "24/7", label: "Режим работы", icon: <Clock className="h-6 w-6 text-primary" /> },
    { value: "15+", label: "Лет на рынке", icon: <TrendingUp className="h-6 w-6 text-primary" /> }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              О компании Fortius Trade Supplies
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Мы — ведущая компания в сфере дистрибуции и складского хранения, 
              предоставляющая комплексные логистические решения для бизнеса любого масштаба.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Наша миссия — обеспечить надёжную и эффективную цепочку поставок для наших клиентов, 
              используя современные технологии и профессиональный подход к каждому проекту.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-accent font-medium">Современные складские комплексы</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-accent font-medium">Профессиональная команда специалистов</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-accent font-medium">Индивидуальный подход к каждому клиенту</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-section-alt text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
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