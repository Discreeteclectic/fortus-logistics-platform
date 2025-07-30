import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Calendar, User } from "lucide-react";

const Knowledge = () => {
  const articles = [
    {
      title: "GDP в фармацевтической логистике: полное руководство",
      description: "Подробное руководство по соблюдению стандартов Good Distribution Practice в фармацевтической отрасли.",
      date: "15 декабря 2023",
      author: "Анна Петрова",
      category: "Регулирование",
      readTime: "8 мин",
    },
    {
      title: "Холодовая цепь: критические точки контроля",
      description: "Как обеспечить целостность холодовой цепи при транспортировке термолабильных препаратов.",
      date: "10 декабря 2023",
      author: "Михаил Иванов",
      category: "Технологии",
      readTime: "6 мин",
    },
    {
      title: "Цифровизация в фармацевтической логистике",
      description: "Роль цифровых технологий в современной фармацевтической логистике и их влияние на эффективность.",
      date: "5 декабря 2023",
      author: "Елена Сидорова",
      category: "Инновации",
      readTime: "10 мин",
    },
  ];

  const whitepapers = [
    {
      title: "Стандарты хранения фармацевтических препаратов",
      description: "Полное руководство по требованиям к хранению различных категорий фармацевтических препаратов",
      pages: "24 страницы",
      format: "PDF",
    },
    {
      title: "Аудит качества в фармацевтической логистике",
      description: "Методология проведения аудитов качества и контрольные списки для различных этапов логистики",
      pages: "18 страниц",
      format: "PDF",
    },
    {
      title: "Управление рисками в цепи поставок",
      description: "Идентификация, оценка и управление рисками в фармацевтической цепи поставок",
      pages: "32 страницы",
      format: "PDF",
    },
  ];

  const webinars = [
    {
      title: "GDP 2024: Новые требования и изменения",
      date: "20 января 2024",
      time: "14:00 MSK",
      duration: "60 мин",
      speaker: "Анна Петрова, Эксперт по GDP",
    },
    {
      title: "Температурный мониторинг: лучшие практики",
      date: "25 января 2024", 
      time: "15:00 MSK",
      duration: "45 мин",
      speaker: "Михаил Иванов, Технический директор",
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
              БАЗА <span className="text-primary">ЗНАНИЙ</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Экспертные материалы, статьи и ресурсы по фармацевтической логистике и стандартам качества
            </p>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">ПОСЛЕДНИЕ СТАТЬИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">БЕЛЫЕ КНИГИ И РУКОВОДСТВА</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{paper.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{paper.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{paper.pages}</span>
                    <span>{paper.format}</span>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">ПРЕДСТОЯЩИЕ ВЕБИНАРЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{webinar.date} в {webinar.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="h-4 w-4 mr-2 text-primary" />
                      <span>Длительность: {webinar.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">ПОДПИСКА НА НОВОСТИ</h2>
            <p className="text-muted-foreground mb-8">
              Получайте последние новости, статьи и обновления в области фармацевтической логистики
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

export default Knowledge;