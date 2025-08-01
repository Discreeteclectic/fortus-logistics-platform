
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Shield, Users } from "lucide-react";
import distributionImage from "@/assets/distribution-center.jpg";
import storageImage from "@/assets/storage-facility.jpg";
import warehouseEquipment from "@/assets/warehouse-equipment.jpg";

const Services = () => {
  const services = [
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: "СКЛАДСКОЕ ХРАНЕНИЕ",
      description: "Современные складские комплексы с контролем температуры и влажности. Безопасное хранение товаров любых категорий.",
      image: storageImage
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "ДИСТРИБУЦИЯ ТОВАРОВ",
      description: "Полный цикл дистрибуции от приёмки до доставки конечному потребителю. Оптимизированная логистика.",
      image: distributionImage
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "УПРАВЛЕНИЕ ЗАПАСАМИ",
      description: "Профессиональное управление товарными запасами с использованием современных WMS-систем. Современное оборудование для эффективного хранения.",
      image: warehouseEquipment
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "КОНСУЛЬТАЦИОННЫЕ УСЛУГИ",
      description: "Экспертные консультации по оптимизации цепочек поставок и логистических процессов.",
      image: null
    }
  ];

  return (
    <section id="services" className="py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-accent mb-6 tracking-tight">
            НАШИ <span className="text-primary">УСЛУГИ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Предоставляем комплексные решения для эффективной работы вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-background hover:scale-105">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-black text-accent mb-3 tracking-wide">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {service.image && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <p className="text-muted-foreground leading-relaxed text-lg">
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
