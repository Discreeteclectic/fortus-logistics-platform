import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Thermometer, Clock, MapPin, Shield, Package, FileText, Zap } from "lucide-react";

const Distribution = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Быстрая доставка",
      description: "24-72 часа по всему Узбекистану",
      color: "bg-primary"
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Контроль температуры",
      description: "От +2°C до +25°C",
      color: "bg-accent"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "GDP соответствие",
      description: "Сертифицированные процессы",
      color: "bg-primary-dark"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "География покрытия",
      description: "Все регионы Узбекистана",
      color: "bg-primary"
    }
  ];

  const productTypes = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Рецептурные препараты",
      description: "Строгий контроль и специальные условия хранения"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Безрецептурные медикаменты",
      description: "Стандартные условия хранения и доставки"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Медицинские изделия",
      description: "Специализированная упаковка и транспортировка"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Диагностические системы",
      description: "Особые требования к условиям транспортировки"
    }
  ];

  const processSteps = [
    { step: "01", title: "Приём заказа", description: "Оформление через систему Lima или менеджера" },
    { step: "02", title: "Комплектация", description: "Подготовка товара на GDP-сертифицированном складе" },
    { step: "03", title: "Упаковка", description: "Специальная упаковка с контролем температуры" },
    { step: "04", title: "Транспортировка", description: "Доставка с мониторингом холодовой цепи" },
    { step: "05", title: "Получение", description: "Контроль качества при передаче клиенту" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-24 h-24 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border-4 border-white/20 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-white/20"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/10 transform rotate-12"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-8">
              <Truck className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              ДИСТРИБУЦИЯ <span className="text-white bg-white/20 px-4 py-2 rounded-lg">ЛЕКАРСТВ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Профессиональная дистрибуция фармацевтических препаратов с соблюдением холодовой цепи
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Что делает нашу дистрибуцию надёжной и эффективной
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

      {/* Temperature Zones */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-32 h-32 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 border-4 border-accent/10 transform rotate-45"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ТЕМПЕРАТУРНЫЕ РЕЖИМЫ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Специализированные условия для различных типов препаратов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 bg-background p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-x-10 -translate-y-10"></div>
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Thermometer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">Холодовая цепь</h3>
                    <p className="text-blue-500 font-bold">+2°C до +8°C</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Для температурно-чувствительных препаратов: вакцины, инсулин, биологические препараты
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Валидированные рефрижераторы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Термосумки с контролем</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Непрерывный мониторинг</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full translate-x-10 -translate-y-10"></div>
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Thermometer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">Стандартные условия</h3>
                    <p className="text-orange-500 font-bold">+15°C до +25°C</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Для большинства лекарственных препаратов и медицинских изделий
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Климат-контроль в транспорте</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Защита от влажности</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Контроль освещения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ТИПЫ ТОВАРОВ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Специализируемся на различных категориях фармацевтических товаров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productTypes.map((type, index) => (
              <Card key={index} className="border-0 bg-section-alt p-6 group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-primary/10 transform rotate-45 -translate-x-6 translate-y-6 group-hover:bg-primary/20 transition-colors"></div>
                
                <CardContent className="p-0">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="font-bold text-accent mb-3">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-20 w-24 h-24 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-20 w-32 h-32 border-4 border-accent/10 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ПРОЦЕСС РАБОТЫ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От получения заказа до доставки — каждый этап под контролем
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-primary/20 transform translate-x-1/2"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-4 relative">
                    {step.step}
                    {/* Geometric decoration */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-accent mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
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
              НУЖНА НАДЁЖНАЯ ДИСТРИБУЦИЯ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Рассчитайте стоимость дистрибуции ваших препаратов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold tracking-wide px-8 py-4">
                Калькулятор стоимости
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold tracking-wide px-8 py-4">
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

export default Distribution;