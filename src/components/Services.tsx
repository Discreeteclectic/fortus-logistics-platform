import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Shield, Users } from "lucide-react";
import distributionImage from "@/assets/distribution-center.jpg";
import storageImage from "@/assets/storage-facility.jpg";

const Services = () => {
  const services = [
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Складское хранение",
      description: "Современные складские комплексы с контролем температуры и влажности. Безопасное хранение товаров любых категорий.",
      image: storageImage
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Дистрибуция товаров",
      description: "Полный цикл дистрибуции от приёмки до доставки конечному потребителю. Оптимизированная логистика.",
      image: distributionImage
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Управление запасами",
      description: "Профессиональное управление товарными запасами с использованием современных WMS-систем.",
      image: null
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Консультационные услуги",
      description: "Экспертные консультации по оптимизации цепочек поставок и логистических процессов.",
      image: null
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предоставляем комплексные решения для эффективной работы вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-accent mb-2">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {service.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;