import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Award, HeadphonesIcon, MapPin, DollarSign, Timer } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Высокая скорость",
      description: "Быстрая обработка заказов и оперативная доставка благодаря оптимизированным процессам."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Качество услуг",
      description: "Сертифицированные стандарты качества и постоянный контроль всех этапов работы."
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Клиентский сервис",
      description: "Персональный менеджер и круглосуточная поддержка для решения любых вопросов."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Широкая география",
      description: "Развитая сеть складов и партнёров по всей территории страны."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Выгодные тарифы",
      description: "Конкурентные цены и гибкая система скидок для постоянных клиентов."
    },
    {
      icon: <Timer className="h-8 w-8 text-primary" />,
      title: "Надёжность",
      description: "Более 15 лет успешной работы на рынке логистических услуг."
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Наши преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему клиенты выбирают Fortius Trade Supplies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group border-0 bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-300">
                  <div className="text-primary transition-colors">
                    {advantage.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-accent">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;