import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const News = () => {
  const featuredNews = {
    title: "Fortius получила сертификат GDP+ от Европейского агентства по лекарственным средствам",
    description: "Наша компания стала первой в России, получившей расширенную сертификацию GDP+, подтверждающую соответствие самым высоким европейским стандартам качества.",
    date: "18 декабря 2023",
    author: "Пресс-служба Fortius",
    image: "/placeholder.svg",
    category: "Сертификация",
  };

  const news = [
    {
      title: "Открытие нового логистического центра в Санкт-Петербурге",
      description: "Современный комплекс площадью 15,000 кв.м с автоматизированными системами хранения и контроля температуры.",
      date: "15 декабря 2023",
      author: "Команда Fortius",
      category: "Развитие",
      image: "/placeholder.svg",
    },
    {
      title: "Партнерство с ведущими европейскими фармкомпаниями",
      description: "Заключены договоры на логистическое обслуживание с тремя крупнейшими производителями биопрепаратов.",
      date: "12 декабря 2023",
      author: "Отдел развития",
      category: "Партнерство",
      image: "/placeholder.svg",
    },
    {
      title: "Внедрение блокчейн-технологий для отслеживания препаратов",
      description: "Новая система обеспечивает полную прозрачность цепи поставок и защиту от подделок.",
      date: "8 декабря 2023",
      author: "IT-департамент",
      category: "Технологии",
      image: "/placeholder.svg",
    },
    {
      title: "Расширение сети холодового хранения",
      description: "Введены в эксплуатацию новые холодильные камеры с температурными режимами от -80°C до +25°C.",
      date: "5 декабря 2023",
      author: "Операционный директор",
      category: "Инфраструктура",
      image: "/placeholder.svg",
    },
    {
      title: "Награда 'Лучший логистический провайдер года'",
      description: "Fortius признана лучшей компанией в области фармацевтической логистики по версии отраслевой ассоциации.",
      date: "1 декабря 2023",
      author: "Пресс-служба",
      category: "Награды",
      image: "/placeholder.svg",
    },
    {
      title: "Запуск программы обучения GDP для клиентов",
      description: "Бесплатная образовательная программа для сотрудников фармацевтических компаний.",
      date: "28 ноября 2023",
      author: "Учебный центр",
      category: "Образование",
      image: "/placeholder.svg",
    },
  ];

  const categories = ["Все", "Сертификация", "Развитие", "Партнерство", "Технологии", "Инфраструктура", "Награды", "Образование"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              НОВОСТИ
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Последние новости компании, отраслевые события и достижения в области фармацевтической логистики
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">ГЛАВНАЯ НОВОСТЬ</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredNews.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredNews.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredNews.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {featuredNews.author}
                  </div>
                  <Button>
                    Читать полностью
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">ВСЕ НОВОСТИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      {item.author}
                    </div>
                    <Button variant="ghost" size="sm">
                      Читать
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Загрузить еще
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">НЕ ПРОПУСТИТЕ НОВОСТИ</h2>
            <p className="text-muted-foreground mb-8">
              Подпишитесь на нашу рассылку и получайте последние новости компании и отрасли
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;