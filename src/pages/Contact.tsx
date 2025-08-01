import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      city: "Москва",
      address: "ул. Производственная, 12, стр. 1",
      phone: "+7 (495) 123-45-67",
      email: "moscow@fortius-trade.ru",
      hours: "Пн-Пт: 8:00-18:00",
      isMain: true,
    },
    {
      city: "Санкт-Петербург",
      address: "пр. Обуховской Обороны, 76",
      phone: "+7 (812) 987-65-43",
      email: "spb@fortius-trade.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false,
    },
    {
      city: "Екатеринбург",
      address: "ул. Машиностроителей, 45",
      phone: "+7 (343) 555-12-34",
      email: "ekb@fortius-trade.ru",
      hours: "Пн-Пт: 9:00-17:00",
      isMain: false,
    },
  ];

  const departments = [
    {
      name: "Отдел продаж",
      phone: "+7 (495) 123-45-67",
      email: "sales@fortius-trade.ru",
      description: "Вопросы по услугам, расчет стоимости, заключение договоров",
    },
    {
      name: "Отдел продаж",
      phone: "+998904040047",
      email: "fortiustradesupplies@gmail.com",
      description: "Информация о услугах, расчет стоимости, заключение договоров",
    },
    {
      name: "Отдел качества",
      phone: "+7 (495) 123-45-69",
      email: "quality@fortius-trade.ru",
      description: "Вопросы по GDP, сертификации, качеству услуг",
    },
    {
      name: "HR-отдел",
      phone: "+7 (495) 123-45-70",
      email: "hr@fortius-trade.ru",
      description: "Вакансии, трудоустройство, корпоративные вопросы",
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
              <span className="text-primary">КОНТАКТЫ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и предоставить профессиональную консультацию
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-2">Главный офис</p>
                <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">Общие вопросы</p>
                <p className="text-lg font-semibold">info@fortius-trade.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">ОТПРАВИТЬ СООБЩЕНИЕ</h2>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя *</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Компания</label>
                        <Input placeholder="Название компании" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон *</label>
                        <Input placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input type="email" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Тема обращения</label>
                      <select className="w-full px-3 py-2 border border-input rounded-md">
                        <option>Выберите тему</option>
                        <option>Запрос коммерческого предложения</option>
                        <option>Вопросы по услугам</option>
                        <option>Консультации по услугам</option>
                        <option>Партнерство</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение *</label>
                      <Textarea 
                        placeholder="Опишите ваш вопрос или запрос..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      ОТПРАВИТЬ СООБЩЕНИЕ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Offices */}
            <div>
              <h2 className="text-3xl font-bold mb-8">НАШИ ОФИСЫ</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className={office.isMain ? "border-primary" : ""}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        {office.city}
                        {office.isMain && (
                          <span className="ml-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                            Главный офис
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-1" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{office.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{office.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">СПЕЦИАЛИЗИРОВАННЫЕ ОТДЕЛЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">{dept.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">ЭКСТРЕННАЯ СВЯЗЬ</h2>
            <p className="text-muted-foreground mb-8">
              Для срочных вопросов и аварийных ситуаций используйте круглосуточную линию поддержки
            </p>
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <div className="text-2xl font-bold text-primary mb-2">+7 (495) 911-24-7</div>
              <div className="text-muted-foreground">Работает 24/7</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;