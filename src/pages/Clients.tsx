import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "Pharma Global",
      logo: "/placeholder.svg",
      description: "Международная фармацевтическая корпорация",
      cooperation: "5 лет",
    },
    {
      name: "MedTech Solutions",
      logo: "/placeholder.svg", 
      description: "Производитель медицинского оборудования",
      cooperation: "3 года",
    },
    {
      name: "BioLife Industries",
      logo: "/placeholder.svg",
      description: "Биотехнологическая компания",
      cooperation: "7 лет",
    },
    {
      name: "HealthCare Plus",
      logo: "/placeholder.svg",
      description: "Сеть аптек и медицинских центров",
      cooperation: "4 года",
    },
  ];

  const stats = [
    {
      icon: Building2,
      value: "150+",
      label: "Активных клиентов",
      color: "text-blue-500",
    },
    {
      icon: Users,
      value: "95%",
      label: "Удовлетворенность клиентов",
      color: "text-green-500",
    },
    {
      icon: TrendingUp,
      value: "200%",
      label: "Рост за 3 года",
      color: "text-purple-500",
    },
    {
      icon: Award,
      value: "15+",
      label: "Наград отрасли",
      color: "text-orange-500",
    },
  ];

  const testimonials = [
    {
      text: "Fortius обеспечивает безупречную логистику наших фармацевтических продуктов. Их соблюдение GDP стандартов превосходно.",
      author: "Анна Петрова",
      position: "Директор по логистике",
      company: "Pharma Global",
    },
    {
      text: "Надежность и профессионализм команды Fortius позволяют нам сосредоточиться на основном бизнесе, не беспокоясь о доставке.",
      author: "Михаил Иванов",
      position: "Генеральный директор",
      company: "MedTech Solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              НАШИ КЛИЕНТЫ
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы гордимся доверием ведущих фармацевтических компаний и строим долгосрочные партнерские отношения
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">НАШИ ПАРТНЕРЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-16 w-auto mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-2">{client.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{client.description}</p>
                  <p className="text-xs text-primary">Сотрудничество: {client.cooperation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">ОТЗЫВЫ КЛИЕНТОВ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;