import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Warehouse, Shield, Eye, Thermometer, Camera, Clock, Package, FileCheck } from "lucide-react";

const Storage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "GDP Сертификация",
      description: "Соответствие международным стандартам",
      color: "bg-primary"
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Климат-контроль",
      description: "Автоматическое поддержание условий",
      color: "bg-accent"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Видеонаблюдение",
      description: "Круглосуточный мониторинг 24/7",
      color: "bg-primary-dark"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Контроль доступа",
      description: "Многоуровневая система безопасности",
      color: "bg-primary"
    }
  ];

  const storageTypes = [
    {
      icon: <Thermometer className="h-10 w-10" />,
      title: "Холодовое хранение",
      temperature: "+2°C до +8°C",
      description: "Валидированные холодильные камеры для биологических препаратов",
      features: [
        "Резервное питание",
        "Система аварийных уведомлений",
        "Картирование температуры",
        "Квалификация оборудования"
      ],
      color: "border-blue-500"
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Стандартное хранение",
      temperature: "+15°C до +25°C",
      description: "Основные складские площади для большинства препаратов",
      features: [
        "Контроль влажности",
        "Защита от света",
        "Организованное размещение",
        "Быстрый доступ к товару"
      ],
      color: "border-orange-500"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Специальные условия",
      temperature: "По требованию",
      description: "Особые условия для наркотических и психотропных веществ",
      features: [
        "Усиленная охрана",
        "Специальные сейфы",
        "Строгий учёт",
        "Документооборот по требованиям"
      ],
      color: "border-red-500"
    }
  ];

  const additionalServices = [
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Инвентаризация",
      description: "Регулярная проверка и учёт товарных остатков"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Комплектация заказов",
      description: "Подготовка и упаковка товара для отправки"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Контроль сроков",
      description: "Мониторинг сроков годности препаратов"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Работа с возвратами",
      description: "Приём и обработка возвращённого товара"
    }
  ];

  const equipmentList = [
    "Валидированные холодильные камеры Liebherr",
    "Система мониторинга температуры Testo",
    "Автоматические двери с контролем доступа",
    "Пожарная сигнализация и система пожаротушения",
    "Резервные генераторы электропитания",
    "Системы видеонаблюдения с записью"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-primary-dark to-primary relative overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-8">
              <Warehouse className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              ОТВЕТСТВЕННОЕ <span className="text-white bg-white/20 px-4 py-2 rounded-lg">ХРАНЕНИЕ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              GDP-сертифицированные склады с современным оборудованием и системами контроля
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">1,795м²</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Площадь складов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Мониторинг</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">GDP</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Сертификация</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ПРЕИМУЩЕСТВА НАШИХ СКЛАДОВ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Современная инфраструктура для безопасного хранения фармацевтических препаратов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-section-alt text-center p-8 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${feature.color} opacity-10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:opacity-20 transition-opacity`}></div>
                
                <CardContent className="p-0 relative z-10">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-32 h-32 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 border-4 border-accent/10 transform rotate-45"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ТИПЫ ХРАНЕНИЯ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Специализированные зоны для различных категорий препаратов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {storageTypes.map((type, index) => (
              <Card key={index} className={`border-2 ${type.color} bg-background p-8 group hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                {/* Geometric decoration */}
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full -translate-x-10 translate-y-10"></div>
                
                <CardHeader className="p-0 mb-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-accent mb-2">{type.title}</CardTitle>
                  <div className="text-lg font-bold text-primary mb-4">{type.temperature}</div>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-accent mb-8">СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Используем только валидированное оборудование ведущих мировых производителей 
                для обеспечения максимальной надёжности хранения.
              </p>
              
              <ul className="space-y-4">
                {equipmentList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Placeholder for warehouse image */}
              <div className="aspect-square bg-gradient-to-br from-section-alt to-primary/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Geometric decorations */}
                <div className="absolute top-4 left-4 w-12 h-12 border-4 border-primary/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-primary/20 transform rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Warehouse className="h-32 w-32 text-primary/30" />
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-black text-accent">99.9%</div>
                      <div className="text-xs text-muted-foreground">Точность</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-black text-accent">±0.5°C</div>
                      <div className="text-xs text-muted-foreground">Отклонение</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-20 w-24 h-24 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-20 w-32 h-32 border-4 border-accent/10 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр складских операций для фармацевтических компаний
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 bg-background p-6 text-center group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-primary/10 transform rotate-45 -translate-x-6 -translate-y-6 group-hover:bg-primary/20 transition-colors"></div>
                
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-accent mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white/10 transform rotate-45"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-6">
              НУЖНЫ СКЛАДСКИЕ УСЛУГИ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Обеспечим надёжное хранение ваших препаратов с соблюдением всех стандартов
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

export default Storage;