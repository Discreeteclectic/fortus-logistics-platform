
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Globe, Clock } from "lucide-react";
import employee1 from "@/assets/employee-1.jpg";
import employee2 from "@/assets/employee-2.jpg";
import employee3 from "@/assets/employee-3.jpg";

const About = () => {
  const stats = [
    { value: "500+", label: "Довольных клиентов", icon: <CheckCircle className="h-8 w-8 text-primary" /> },
    { value: "50,000м²", label: "Складских площадей", icon: <Globe className="h-8 w-8 text-primary" /> },
    { value: "24/7", label: "Режим работы", icon: <Clock className="h-8 w-8 text-primary" /> },
    { value: "15+", label: "Лет на рынке", icon: <TrendingUp className="h-8 w-8 text-primary" /> }
  ];

  const employees = [
    {
      name: "Алексей Петров",
      position: "Руководитель склада",
      description: "Отвечает за организацию складских процессов и контроль качества. Обеспечивает эффективную работу команды и соблюдение стандартов безопасности.",
      image: employee1
    },
    {
      name: "Мария Иванова", 
      position: "Менеджер по логистике",
      description: "Координирует цепочки поставок и оптимизирует маршруты доставки. Работает с клиентами над индивидуальными логистическими решениями.",
      image: employee2
    },
    {
      name: "Дмитрий Козлов",
      position: "Водитель-экспедитор",
      description: "Обеспечивает своевременную и безопасную доставку грузов клиентам. Поддерживает высокие стандарты обслуживания на всех этапах транспортировки.",
      image: employee3
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-8 tracking-tight leading-tight">
            О КОМПАНИИ <span className="text-primary">FORTIUS</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground font-medium">
                Мы — ведущая компания в сфере дистрибуции и складского хранения, 
                предоставляющая комплексные логистические решения для бизнеса любого масштаба.
              </p>
              <p className="text-muted-foreground font-medium">
                Наша миссия — обеспечить надёжную и эффективную цепочку поставок для наших клиентов, 
                используя современные технологии и профессиональный подход к каждому проекту.
              </p>
            </div>
            
            <div className="space-y-6 mt-10">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-accent font-bold text-lg tracking-wide">СОВРЕМЕННЫЕ СКЛАДСКИЕ КОМПЛЕКСЫ</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-accent font-bold text-lg tracking-wide">ПРОФЕССИОНАЛЬНАЯ КОМАНДА</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-accent font-bold text-lg tracking-wide">ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="text-lg leading-relaxed">
              <p className="text-muted-foreground font-medium mb-6">
                Мы — ведущая компания в сфере дистрибуции и складского хранения, 
                предоставляющая комплексные логистические решения для бизнеса любого масштаба.
              </p>
              <p className="text-muted-foreground font-medium">
                Наша миссия — обеспечить надёжную и эффективную цепочку поставок для наших клиентов, 
                используя современные технологии и профессиональный подход к каждому проекту.
              </p>
            </div>
          </div>
        </div>

        {/* Команда */}
        <div className="mb-24">
          <h3 className="text-3xl font-black text-accent mb-12 text-center tracking-tight">
            НАША КОМАНДА
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employees.map((employee, index) => (
              <Card key={index} className="border-0 bg-section-alt overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-accent mb-2">{employee.name}</h4>
                  <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">
                    {employee.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {employee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 bg-section-alt text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-accent mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
