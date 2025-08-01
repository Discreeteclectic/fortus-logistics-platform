import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, FileCheck, Eye, Users, CheckCircle, AlertTriangle } from "lucide-react";

const GDP = () => {
  const gdpPrinciples = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Система качества",
      description: "Документированная система управления качеством",
      color: "bg-primary"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Персонал",
      description: "Квалифицированный персонал",
      color: "bg-accent"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Помещения",
      description: "Валидированные складские помещения",
      color: "bg-primary-dark"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Документооборот",
      description: "Полная прослеживаемость операций",
      color: "bg-primary"
    }
  ];

  const certificates = [
    {
      title: "GDP Сертификат",
      validity: "Действителен с 01.07.2024 по 30.06.2027",
      scope: "Надлежащая дистрибьюторская практика фармацевтических препаратов",
      number: "GDP-83:2024",
      issued_by: "Zarur amaliyotlar markazi davlat muassasasi",
      image: "/gdp-certificate-page1.png"
    },
    {
      title: "Лицензия на фармацевтическую деятельность",
      validity: "Действительна с 19.01.2021 по 30.12.2025",
      scope: "Оптовая торговля лекарственными препаратами",
      number: "031316",
      issued_by: "Министерство развития фармацевтической отрасли Республики Узбекистан",
      image: "/pharmaceutical-license.png"
    }
  ];

  const procedures = [
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Приёмка товара",
      description: "Проверка целостности, маркировки и условий транспортировки"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Контроль хранения",
      description: "Мониторинг температуры, влажности и других параметров"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Отгрузка",
      description: "Контроль качества перед отправкой клиенту"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Отклонения",
      description: "Расследование и документирование всех отклонений"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Аудиты",
      description: "Внутренние и внешние аудиты системы качества"
    }
  ];

  const qualityControls = [
    "Непрерывный мониторинг температуры с записью данных",
    "Калибровка и квалификация измерительного оборудования",
    "Валидация транспортных средств и контейнеров",
    "Система FIFO (первый пришёл - первый ушёл)",
    "Контроль сроков годности препаратов",
    "Процедуры работы с отозванной продукцией",
    "Система управления отклонениями и корректирующих действий",
    "Документирование всех операций"
  ];


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-accent to-primary-dark relative overflow-hidden">
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              GDP <span className="text-white bg-white/20 px-4 py-2 rounded-lg">СЕРТИФИКАЦИЯ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Строгое соблюдение международных стандартов Good Distribution Practice
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">100%</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Соответствие</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">2024</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Сертификат</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Контроль</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GDP */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-black text-accent mb-8">ЧТО ТАКОЕ GDP?</h2>
              <div className="space-y-6 text-lg">
                <p className="text-muted-foreground font-medium">
                  Good Distribution Practice (GDP) — это международный стандарт, устанавливающий 
                  требования к дистрибуции лекарственных препаратов для обеспечения их качества 
                  и безопасности на всех этапах цепи поставок.
                </p>
                <p className="text-muted-foreground font-medium">
                  GDP гарантирует, что лекарственные препараты хранятся, транспортируются и 
                  обрабатываются в соответствии с требованиями производителя и регулирующих органов.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* GDP Visualization */}
              <div className="aspect-square bg-gradient-to-br from-section-alt to-primary/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Geometric decorations */}
                <div className="absolute top-4 left-4 w-12 h-12 border-4 border-primary/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-primary/20 transform rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Shield className="h-32 w-32 text-primary/30" />
                </div>
                
                {/* Quality indicators */}
                <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-primary/20 rounded-xl">
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✓ Сертифицировано
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    GDP 2023
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GDP Principles */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-accent mb-6">ОСНОВНЫЕ ПРИНЦИПЫ GDP</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Четыре ключевых принципа, которые мы строго соблюдаем
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gdpPrinciples.map((principle, index) => (
              <Card key={index} className="border-0 bg-section-alt text-center p-8 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${principle.color} opacity-10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:opacity-20 transition-opacity`}></div>
                
                <CardContent className="p-0 relative z-10">
                  <div className={`w-16 h-16 ${principle.color} rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {principle.icon}
                  </div>
                  <h4 className="text-lg font-bold text-accent mb-3">{principle.title}</h4>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-32 h-32 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 border-4 border-accent/10 transform rotate-45"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">НАШИ СЕРТИФИКАТЫ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Действующие лицензии и сертификаты соответствия
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="border-0 bg-background p-8 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full -translate-x-10 translate-y-10"></div>
                
                <CardHeader className="p-0 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-accent mb-4">{cert.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-primary">Действителен:</span>
                      <p className="text-muted-foreground">{cert.validity}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">Область применения:</span>
                      <p className="text-muted-foreground">{cert.scope}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">Номер:</span>
                      <p className="text-muted-foreground font-mono text-sm">{cert.number}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">Выдан:</span>
                      <p className="text-muted-foreground text-sm">{cert.issued_by}</p>
                    </div>
                    {cert.image && (
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-48 object-contain border border-border rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                          onClick={() => window.open(cert.image, '_blank')}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Procedures */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">ПРОЦЕДУРЫ КОНТРОЛЯ КАЧЕСТВА</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Систематический подход к обеспечению качества на каждом этапе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {procedures.map((procedure, index) => (
              <Card key={index} className="border-0 bg-section-alt p-6 group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-primary/10 transform rotate-45 -translate-x-6 -translate-y-6 group-hover:bg-primary/20 transition-colors"></div>
                
                <CardContent className="p-0">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {procedure.icon}
                  </div>
                  <h3 className="font-bold text-accent mb-3">{procedure.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{procedure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quality Controls List */}
          <div className="bg-section-alt rounded-2xl p-8">
            <h3 className="text-2xl font-black text-accent mb-8 text-center">КОНТРОЛЬНЫЕ МЕРОПРИЯТИЯ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualityControls.map((control, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground font-medium">{control}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-dark to-primary relative overflow-hidden">
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
              ДОВЕРЬТЕ НАМ СВОИ ПРЕПАРАТЫ
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Гарантируем соблюдение всех требований GDP при работе с вашей продукцией
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default GDP;