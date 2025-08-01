import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "Meros Pharm",
      logo: "/lovable-uploads/b3aa8d09-db81-43a6-a398-9fee4e33659c.png",
      description: "MChJ",
      cooperation: "2021г.",
    },
    {
      name: "Grand Pharm Trade",
      logo: "/lovable-uploads/b3aa8d09-db81-43a6-a398-9fee4e33659c.png", 
      description: "MChJ",
      cooperation: "2021г.",
    },
    {
      name: "Farm Lyuks Invest",
      logo: "/lovable-uploads/b3aa8d09-db81-43a6-a398-9fee4e33659c.png",
      description: "ООО",
      cooperation: "2021г.",
    },
    {
      name: "Young Pharm",
      logo: "/lovable-uploads/b3aa8d09-db81-43a6-a398-9fee4e33659c.png",
      description: "MChJ",
      cooperation: "2022г.",
    },
    {
      name: "Zam-Zam Med Pharm",
      logo: "/lovable-uploads/b3aa8d09-db81-43a6-a398-9fee4e33659c.png",
      description: "",
      cooperation: "2022г.",
    },
  ];

  const stats = [
    {
      icon: Building2,
      value: "4000",
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
              НАШИ <span className="text-primary">КЛИЕНТЫ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Мы гордимся доверием ведущих фармацевтических компаний и строим долгосрочные партнерские отношения
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-16 w-auto mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-2">{client.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{client.description}</p>
                  <div className="mt-auto">
                    <p className="text-xs text-primary">Сотрудничество: {client.cooperation}</p>
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