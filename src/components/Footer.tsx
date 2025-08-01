const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/bc706c8c-b48f-49ff-a3b4-0aab10eb0c3f.png" 
              alt="Fortius Trade Supplies"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Ведущая компания в сфере дистрибуции и складского хранения. 
              Надёжный партнёр для вашего бизнеса.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Fortius Trade Supplies. Все права защищены.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Складское хранение</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Дистрибуция</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Управление запасами</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Консультации</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+998904040047</li>
              <li>fortiustradesupplies@gmail.com</li>
              <li>г. Ташкент, Чиланзарский район, ул. Катартал, 38</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Fortius Trade Supplies - профессиональные решения для вашего бизнеса</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;