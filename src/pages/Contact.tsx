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
                <p className="text-lg font-semibold">+998904040047</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">Общие вопросы</p>
                <p className="text-lg font-semibold">fortiustradesupplies@gmail.com</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-2">Главный офис</p>
                <p className="text-lg font-semibold">г. Ташкент, Чиланзарский район, ул. Катартал, 38</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Contact;