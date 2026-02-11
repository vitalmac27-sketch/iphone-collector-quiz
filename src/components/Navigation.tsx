import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";

const iphoneModels = [
  { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", badge: "NEW" },
  { name: "iPhone 17 Pro", path: "/iphone-17-pro", badge: "NEW" },
  { name: "iPhone 17 Air", path: "/iphone-17-air", badge: "NEW" },
  { name: "iPhone 17", path: "/iphone-17", badge: "NEW" },
  { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max" },
  { name: "iPhone 16 Pro", path: "/iphone-16-pro" },
  { name: "iPhone 16", path: "/iphone-16" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="ЭПЛ-КОЛЛЕКЦИЯ - магазин iPhone в Казани" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-bold text-lg">ЭПЛ-КОЛЛЕКЦИЯ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}
            >
              Главная
            </Link>
            
            {/* iPhone Models Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                  Модели iPhone
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  iPhone 17 серия
                </div>
                {iphoneModels.slice(0, 4).map((model) => (
                  <DropdownMenuItem key={model.path} asChild>
                    <Link to={model.path} className="flex items-center justify-between cursor-pointer">
                      {model.name}
                      {model.badge && (
                        <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">
                          {model.badge}
                        </span>
                      )}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  iPhone 16 серия
                </div>
                {iphoneModels.slice(4).map((model) => (
                  <DropdownMenuItem key={model.path} asChild>
                    <Link to={model.path} className="cursor-pointer">
                      {model.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}
            >
              О магазине
            </Link>
            
            <Link 
              to="/contacts" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contacts") ? "text-primary" : "text-foreground"}`}
            >
              Контакты
            </Link>
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a 
              href="tel:+79992673933" 
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+7 (999) 267-39-33</span>
            </a>
            <Button 
              size="sm" 
              className="bg-[#0088cc] hover:bg-[#006699] text-white"
              asChild
            >
              <a href="https://t.me/apple_collecty" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Канал
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Открыть меню"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md font-medium transition-colors ${isActive("/") ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
              
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Модели iPhone</p>
                <div className="grid grid-cols-2 gap-2">
                  {iphoneModels.map((model) => (
                    <Link 
                      key={model.path}
                      to={model.path}
                      className={`text-sm px-3 py-2 rounded-md transition-colors flex items-center justify-between ${isActive(model.path) ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {model.name.replace("iPhone ", "")}
                      {model.badge && (
                        <span className="bg-primary text-primary-foreground text-[10px] px-1 rounded">
                          {model.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-md font-medium transition-colors ${isActive("/about") ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                onClick={() => setIsOpen(false)}
              >
                О магазине
              </Link>
              
              <Link 
                to="/contacts" 
                className={`px-4 py-2 rounded-md font-medium transition-colors ${isActive("/contacts") ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>

              <div className="flex flex-col gap-2 mt-4 px-4">
                <a 
                  href="tel:+79992673933" 
                  className="flex items-center justify-center gap-2 py-3 rounded-md bg-muted font-medium"
                >
                  <Phone className="h-4 w-4" />
                  +7 (999) 267-39-33
                </a>
                <Button 
                  className="w-full bg-[#0088cc] hover:bg-[#006699] text-white"
                  asChild
                >
                  <a href="https://t.me/apple_collecty" target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                    Telegram канал
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;