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
      title: "Система управления & CRM Lima",
      description: "Цифровая платформа для управления всеми аспектами логистических операций с интеграцией CRM Lima",
      features: ["Учет товаров", "Управление заказами", "Отчетность", "Интеграция с CRM Lima"],
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-accent to-primary relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 border-4 border-white/20 rotate-45"></div>
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full border-4 border-primary/30"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 transform rotate-12"></div>
          <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-white/20"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              ТЕХНОЛОГИИ <span className="text-primary">ЛОГИСТИКИ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Современные технологические решения для безопасной и эффективной доставки фармацевтических препаратов
            </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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


      <Footer />
    </div>
  );
};

export default Technology;