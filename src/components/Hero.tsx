import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <div className="animate-fade-in">
      {/* Top Bar - City and Phone */}
      <div className="flex justify-between items-center px-4 py-3 text-sm text-foreground/70 border-b border-border/30">
        <span className="font-light">Казань</span>
        <a 
          href="tel:+79992673933" 
          className="font-light hover:text-primary transition-colors"
        >
          +7 (999) 267-39-33
        </a>
      </div>

      {/* Logo */}
      <div className="flex justify-center py-4 border-b border-border/30">
        <img 
          src={logo} 
          alt="ЭПЛ КОЛЛЕКЦИЯ" 
          className="h-10 rounded-xl transition-all duration-300 hover:scale-105"
        />
      </div>
      
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
        {/* Main Heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
          <span className="block text-foreground/90 mb-2">
            Купить Айфон в Казани
          </span>
          <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent font-normal">
            по выгодной цене
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-foreground/60 mb-8 max-w-2xl mx-auto">
          Подберите свой Айфон за 1 минуту и получите персональное предложение
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => {
            const calculator = document.getElementById('calculator-section');
            calculator?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-light hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_-8px_rgba(0,113,227,0.4)]"
        >
          <span>Узнать больше</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Benefits Bar */}
      <div className="bg-primary text-primary-foreground py-3 text-center">
        <p className="text-sm md:text-base font-light">
          Гарантия 1 год • Скидка до 30% • Оригинальный блок питания в подарок
        </p>
      </div>
    </div>
  );
};

export default Hero;
