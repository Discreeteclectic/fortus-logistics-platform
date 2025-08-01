import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, MapPin, Shield, Clock } from "lucide-react";
import employee1 from "@/assets/employee-1.jpg";
import employee2 from "@/assets/employee-2.jpg";
import employee3 from "@/assets/employee-3.jpg";

const About = () => {
  const milestones = [
    { year: "2019", title: "Основание компании", description: "Создание FORTIUS Trade Supply Distribution" },
    { year: "2022", title: "Расширение складов", description: "Открытие нового логистического центра" },
    { year: "2024", title: "GDP Сертификация", description: "Получение сертификата GDP" }
  ];

  const values = [
    { icon: <Shield className="h-8 w-8" />, title: "Качество", description: "Строгое соблюдение стандартов GDP" },
    { icon: <Clock className="h-8 w-8" />, title: "Надёжность", description: "Бесперебойная холодовая цепь 24/7" },
    { icon: <Users className="h-8 w-8" />, title: "Партнёрство", description: "Долгосрочные отношения с клиентами" },
    { icon: <Award className="h-8 w-8" />, title: "Экспертиза", description: "Глубокие знания фармацевтического рынка" }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Генеральный директор",
      description: "15 лет опыта в фармацевтической логистике. Специалист по международным стандартам GDP.",
      image: employee1
    },
    {
      name: "Мария Иванова",
      position: "Директор по качеству",
      description: "Сертифицированный аудитор GDP. Отвечает за соблюдение всех требований к качеству.",
      image: employee2
    },
    {
      name: "Дмитрий Козлов",
      position: "Руководитель логистики",
      description: "Эксперт по холодовой цепи. Обеспечивает безопасную доставку температурно-чувствительных препаратов.",
      image: employee3
    }
  ];

  const stats = [
    { value: "6", label: "лет на рынке", icon: <CheckCircle className="h-6 w-6" /> },
    { value: "4000", label: "клиентов", icon: <Users className="h-6 w-6" /> },
    { value: "1795м²", label: "складских площадей", icon: <MapPin className="h-6 w-6" /> },
    { value: "99.9%", label: "соблюдение температурного режима", icon: <Shield className="h-6 w-6" /> }
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
              О КОМПАНИИ <span className="text-primary">FORTIUS</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Ведущий провайдер фармацевтической логистики в Узбекистане с сертификацией GDP
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">НАША ИСТОРИЯ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От небольшой логистической компании до ведущего игрока фармацевтического рынка Узбекистана
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-section-alt relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Geometric decoration */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 transform rotate-45 translate-x-6 -translate-y-6 group-hover:bg-primary/20 transition-colors"></div>
                
                <CardContent className="p-0">
                  <div className="text-3xl font-black text-primary mb-4">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-accent mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border-8 border-primary/10"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 border-4 border-accent/10 transform rotate-45"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-accent mb-8">МИССИЯ И ЦЕННОСТИ</h2>
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
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
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

      {/* Team Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent mb-6">КОМАНДА ЭКСПЕРТОВ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональная команда специалистов фармацевтической логистики
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-section-alt overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Geometric overlay */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/80 transform rotate-45 translate-x-8 translate-y-8"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-accent text-white text-center p-8 relative overflow-hidden group">
                {/* Geometric decoration */}
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

      <Footer />
    </div>
  );
};

export default About;