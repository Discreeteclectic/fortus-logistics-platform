import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, GraduationCap, Heart, TrendingUp } from "lucide-react";

const Career = () => {
  const vacancies = [
    {
      title: "Менеджер по логистике (GDP)",
      department: "Логистика",
      location: "Москва",
      type: "Полная занятость",
      experience: "3-5 лет",
      salary: "от 120,000 руб.",
      description: "Управление логистическими операциями в соответствии с требованиями GDP, координация поставок фармацевтических препаратов.",
    },
    {
      title: "Специалист по контролю качества",
      department: "Качество",
      location: "Санкт-Петербург",
      type: "Полная занятость",
      experience: "2-4 года",
      salary: "от 100,000 руб.",
      description: "Контроль соблюдения стандартов качества, проведение аудитов, ведение документации.",
    },
    {
      title: "Водитель-экспедитор",
      department: "Доставка",
      location: "Москва, Московская область",
      type: "Полная занятость",
      experience: "от 1 года",
      salary: "от 80,000 руб.",
      description: "Доставка фармацевтических препаратов с соблюдением температурного режима и требований безопасности.",
    },
    {
      title: "IT-специалист (логистические системы)",
      department: "IT",
      location: "Москва (удаленно)",
      type: "Полная занятость",
      experience: "2-3 года",
      salary: "от 150,000 руб.",
      description: "Поддержка и развитие IT-систем для управления логистическими процессами.",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Медицинское страхование",
      description: "Полное медицинское страхование для сотрудника и семьи",
    },
    {
      icon: GraduationCap,
      title: "Обучение и развитие",
      description: "Программы профессионального развития и повышения квалификации",
    },
    {
      icon: TrendingUp,
      title: "Карьерный рост",
      description: "Четкие перспективы карьерного роста и повышения",
    },
    {
      icon: Briefcase,
      title: "Корпоративные льготы",
      description: "Дополнительные дни отпуска, гибкий график, корпоративные мероприятия",
    },
  ];

  const values = [
    {
      title: "Профессионализм",
      description: "Мы ценим экспертность и стремление к совершенству в каждом проекте",
    },
    {
      title: "Командная работа",
      description: "Успех достигается только через эффективное взаимодействие команды",
    },
    {
      title: "Инновации",
      description: "Мы постоянно ищем новые решения и технологии для улучшения сервиса",
    },
    {
      title: "Ответственность",
      description: "Каждый сотрудник несет ответственность за качество и безопасность",
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
              КАРЬЕРА В <span className="text-primary">FORTIUS</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Присоединяйтесь к команде профессионалов в области фармацевтической логистики. Строите карьеру в динамично развивающейся компании
            </p>
            <Button 
              size="lg" 
              className="mt-8 bg-white text-accent hover:bg-white/90 font-bold tracking-wide px-8 py-4"
            >
              ПОСМОТРЕТЬ ВАКАНСИИ
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">ПОЧЕМУ СТОИТ РАБОТАТЬ В FORTIUS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">ОТКРЫТЫЕ ВАКАНСИИ</h2>
          <div className="space-y-6">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {vacancy.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {vacancy.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {vacancy.type}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-lg font-semibold text-primary">{vacancy.salary}</div>
                      <div className="text-sm text-muted-foreground">Опыт: {vacancy.experience}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{vacancy.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">Откликнуться</Button>
                    <Button variant="outline" className="flex-1">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">НАШИ ЦЕННОСТИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">ПРОЦЕСС ТРУДОУСТРОЙСТВА</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Подача заявки</h3>
              <p className="text-muted-foreground">Отправьте резюме и сопроводительное письмо</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Первичный отбор</h3>
              <p className="text-muted-foreground">HR-специалист рассмотрит вашу кандидатуру</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Собеседование</h3>
              <p className="text-muted-foreground">Интервью с руководителем и командой</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Оформление</h3>
              <p className="text-muted-foreground">Подписание договора и адаптация</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">НЕ НАШЛИ ПОДХОДЯЩУЮ ВАКАНСИЮ?</h2>
            <p className="text-muted-foreground mb-8">
              Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих возможностей
            </p>
            <div className="space-y-4">
              <Button size="lg" className="font-semibold">
                ОТПРАВИТЬ РЕЗЮМЕ
              </Button>
              <div className="text-sm text-muted-foreground">
                Или напишите нам на hr@fortius-trade.ru
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;