import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните в любое время"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "info@fortius-trade.ru",
      description: "Ответим в течение часа"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Адрес",
      value: "Москва, ул. Логистическая, 15",
      description: "Главный офис"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Режим работы",
      value: "24/7",
      description: "Без выходных"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект и предложить оптимальное решение
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent mb-6">
              Контактная информация
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-section-alt p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-1">
                          {info.title}
                        </h4>
                        <p className="text-accent font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 bg-section-alt">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-accent">
                Отправить сообщение
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
              </div>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Компания" />
              <Textarea 
                placeholder="Опишите ваши потребности..." 
                className="min-h-32"
              />
              <Button className="w-full bg-primary hover:bg-primary-dark">
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;