const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/075401bb-7f23-4a4b-ba19-6f3d7222cdc6.png" 
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
              <li>+7 (495) 123-45-67</li>
              <li>info@fortius-trade.ru</li>
              <li>Москва, ул. Логистическая, 15</li>
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