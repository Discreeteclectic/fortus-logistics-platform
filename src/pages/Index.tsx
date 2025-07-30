import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Warehouse, Shield, Users, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  const keyServices = [
    {
      icon: <Truck className="h-12 w-12" />,
      title: "ДИСТРИБУЦИЯ",
      description: "Полный цикл дистрибуции фармацевтических препаратов",
      link: "/services/distribution",
      color: "bg-primary"
    },
    {
      icon: <Warehouse className="h-12 w-12" />,
      title: "ХРАНЕНИЕ",
      description: "GDP-сертифицированные склады с контролем температуры",
      link: "/services/storage",
      color: "bg-accent"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "GDP СЕРТИФИКАЦИЯ",
      description: "Соблюдение международных стандартов качества",
      link: "/services/gdp",
      color: "bg-primary-dark"
    }
  ];

  const stats = [
    { value: "16", label: "лет на рынке", icon: <CheckCircle className="h-6 w-6" /> },
    { value: "500+", label: "клиентов", icon: <Users className="h-6 w-6" /> },
    { value: "15,000м²", label: "складских площадей", icon: <MapPin className="h-6 w-6" /> },
    { value: "99.9%", label: "соблюдение температурного режима", icon: <Shield className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Key Services Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">КЛЮЧЕВЫЕ УСЛУГИ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Комплексные решения для фармацевтической логистики с соблюдением стандартов GDP
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {keyServices.map((service, index) => (
              <Card key={index} className="border-0 bg-section-alt group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 ${service.color} opacity-10 transform rotate-45 translate-x-12 -translate-y-12 group-hover:opacity-20 transition-opacity`}></div>
                
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-accent mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Link to={service.link}>
                    <Button className={`w-full ${service.color} hover:opacity-90 text-white font-bold tracking-wide group/btn`}>
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-accent text-white text-center p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-8 h-8 bg-primary transform rotate-45 -translate-x-4 -translate-y-4"></div>
                
                <CardContent className="p-0 relative z-10">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide opacity-90">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <Advantages />
      
      {/* About Preview Section */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border-8 border-primary/10"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 border-4 border-accent/10 transform rotate-45"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-accent mb-8">О КОМПАНИИ FORTIUS</h2>
              <div className="space-y-6 text-lg">
                <p className="text-muted-foreground font-medium">
                  Наша миссия — обеспечить безопасную и эффективную доставку лекарственных препаратов 
                  по всему Узбекистану, соблюдая самые высокие стандарты качества GDP.
                </p>
                <p className="text-muted-foreground font-medium">
                  Мы стремимся быть надёжным партнёром для фармацевтических компаний, 
                  обеспечивая целостность холодовой цепи и качество обслуживания.
                </p>
              </div>
              <Link to="/about">
                <Button size="lg" className="mt-8 bg-primary hover:bg-primary-dark text-white font-bold tracking-wide px-8 py-4">
                  Узнать больше о компании
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-8 w-8" />, title: "Качество", description: "Соблюдение стандартов GDP" },
                { icon: <Users className="h-8 w-8" />, title: "Партнёрство", description: "Долгосрочные отношения" },
                { icon: <CheckCircle className="h-8 w-8" />, title: "Надёжность", description: "Холодовая цепь 24/7" },
                { icon: <MapPin className="h-8 w-8" />, title: "Экспертиза", description: "Знания фармрынка" }
              ].map((value, index) => (
                <Card key={index} className="p-6 border-0 bg-background text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-accent mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
