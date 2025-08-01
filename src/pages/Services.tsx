import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Warehouse, Shield, Thermometer, Clock, Award, ArrowRight } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Truck className="h-12 w-12" />,
      title: "ДИСТРИБУЦИЯ",
      description: "Полный цикл дистрибуции фармацевтических препаратов по всему Узбекистану",
      features: [
        "Доставка 24-72 часа",
        "Контроль температуры +2°C до +25°C",
        "Работа с рецептурными препаратами",
        "Интеграция с системой Lima"
      ],
      link: "/services/distribution",
      color: "bg-primary"
    },
    {
      icon: <Warehouse className="h-12 w-12" />,
      title: "ОТВЕТСТВЕННОЕ ХРАНЕНИЕ",
      description: "Современные GDP-сертифицированные склады для безопасного хранения",
      features: [
        "Валидированные холодильные камеры",
        "Система мониторинга 24/7",
        "Контроль сроков годности",
        "Специальные условия хранения"
      ],
      link: "/services/storage",
      color: "bg-accent"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "GDP СЕРТИФИКАЦИЯ",
      description: "Строгое соблюдение международных стандартов качества",
      features: [
        "Сертифицированные процессы",
        "Валидация оборудования",
        "Контроль качества",
        "Документооборот по стандартам"
      ],
      link: "/services/gdp",
      color: "bg-primary-dark"
    }
  ];

  const additionalServices = [
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Холодовая цепь",
      description: "Непрерывный контроль температуры для чувствительных препаратов"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Экстренная доставка",
      description: "Срочная доставка критически важных медикаментов"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Валидация процессов",
      description: "Квалификация и валидация всех логистических процессов"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-10 w-24 h-24 border-4 border-white/20 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[50px] border-b-white/20"></div>
          <div className="absolute bottom-40 right-20 w-20 h-20 bg-white/10 transform rotate-12"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              НАШИ <span className="text-white bg-primary/30 px-4 py-2 rounded-lg">УСЛУГИ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Комплексные решения для фармацевтической логистики с соблюдением стандартов GDP
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">24-72ч</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Доставка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">99.9%</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Качество</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Мониторинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ОСНОВНЫЕ НАПРАВЛЕНИЯ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Три ключевых сервиса, которые обеспечивают полный цикл фармацевтической логистики
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 bg-section-alt group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden flex flex-col">
                {/* Geometric decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${service.color} opacity-10 transform rotate-45 translate-x-12 -translate-y-12 group-hover:opacity-20 transition-opacity`}></div>
                
                <CardHeader className="pb-6">
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-black text-accent mb-4 tracking-wide">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Link to={service.link}>
                      <Button className={`w-full ${service.color} hover:opacity-90 text-white font-bold tracking-wide group/btn`}>
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-32 h-32 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 border-4 border-accent/10 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/5 rounded-full"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Специализированные сервисы для решения особых задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 bg-background p-8 text-center group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-primary/10 transform rotate-45 -translate-x-6 -translate-y-6 group-hover:bg-primary/20 transition-colors"></div>
                
                <CardContent className="p-0">
                  <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent to-primary relative overflow-hidden">
        {/* Geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-4 border-white/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-6">
              ГОТОВЫ НАЧАТЬ СОТРУДНИЧЕСТВО?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Получите индивидуальный расчёт стоимости наших услуг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent font-bold tracking-wide px-8 py-4">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;