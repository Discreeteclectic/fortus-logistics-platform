import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Thermometer, Truck, MapPin, Shield, Database, Smartphone } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Thermometer,
      title: "Контроль температуры",
      description: "Системы мониторинга температуры в реальном времени с автоматическими уведомлениями",
      features: ["24/7 мониторинг", "SMS/Email уведомления", "Цифровые логгеры", "Аварийные протоколы"],
      color: "text-blue-500",
    },
    {
      icon: MapPin,
      title: "GPS отслеживание",
      description: "Полный контроль местоположения и маршрутов доставки фармацевтических препаратов",
      features: ["Отслеживание в реальном времени", "Оптимизация маршрутов", "Геозоны", "История перемещений"],
      color: "text-green-500",
    },
    {
      icon: Database,
      title: "Система управления",
      description: "Цифровая платформа для управления всеми аспектами логистических операций",
      features: ["Учет товаров", "Управление заказами", "Отчетность", "API интеграция"],
      color: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Защищенные системы обработки и хранения данных согласно требованиям GDP",
      features: ["Шифрование данных", "Контроль доступа", "Аудит операций", "Соответствие GDPR"],
      color: "text-red-500",
    },
  ];

  const features = [
    {
      title: "Мобильное приложение",
      description: "Управление поставками через мобильное приложение",
      icon: Smartphone,
    },
    {
      title: "Интеграция с ERP",
      description: "Подключение к корпоративным системам клиентов",
      icon: Database,
    },
    {
      title: "Автоматизация",
      description: "Автоматические процессы обработки заказов",
      icon: Truck,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ТЕХНОЛОГИИ
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Современные технологические решения для безопасной и эффективной доставки фармацевтических препаратов
            </p>
            <Button size="lg" className="font-semibold">
              ЗАПРОСИТЬ ДЕМО
            </Button>
          </div>
        </div>
      </section>

      {/* Main Technologies */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">КЛЮЧЕВЫЕ ТЕХНОЛОГИИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <tech.icon className={`h-12 w-12 ${tech.color}`} />
                    <CardTitle className="text-xl">{tech.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <feature.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">ИННОВАЦИИ В ЛОГИСТИКЕ</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы постоянно внедряем новые технологии для повышения качества и безопасности наших услуг. 
              Наша цель - быть лидером в области технологических решений для фармацевтической логистики.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Точность доставки</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Мониторинг</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Соответствие GDP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;