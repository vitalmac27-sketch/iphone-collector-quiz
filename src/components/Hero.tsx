import logo from "@/assets/logo.jpg";
import heroIphone from "@/assets/hero-iphones-collection.jpg";

const Hero = () => {
  return (
    <div className="animate-fade-in">
      {/* Mobile Hero */}
      <div className="md:hidden">
        {/* Top bar */}
        <div className="flex justify-between items-center px-4 py-3 text-sm">
          <span className="text-foreground/60 font-light">Казань</span>
          <a 
            href="tel:+79992673933" 
            className="text-foreground/60 font-light hover:text-primary transition-colors"
          >
            +7 (999) 267-39-33
          </a>
        </div>
        
        {/* Logo centered */}
        <div className="flex justify-center py-4">
          <img 
            src={logo} 
            alt="ЭПЛ КОЛЛЕКЦИЯ" 
            className="h-12 rounded-xl"
          />
        </div>
        
        {/* Main content */}
        <div className="px-4 pt-6 pb-8 text-center">
          <h1 className="font-display text-3xl font-light tracking-tight mb-3">
            <span className="block text-foreground/90 mb-1">Купить Айфон в Казани</span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
              по выгодной цене
            </span>
          </h1>
          
          <p className="text-base font-light text-foreground/60 mb-6">
            Подберите свой Айфон за 1 минуту
          </p>
          
          {/* iPhone Image */}
          <div className="flex justify-center">
            <img 
              src={heroIphone} 
              alt="iPhone" 
              className="w-80 h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:block">
        {/* Top bar */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-foreground/60 font-light">Казань</span>
          <img 
            src={logo} 
            alt="ЭПЛ КОЛЛЕКЦИЯ" 
            className="h-14 rounded-xl"
          />
          <a 
            href="tel:+79992673933" 
            className="text-foreground/60 font-light hover:text-primary transition-colors"
          >
            +7 (999) 267-39-33
          </a>
        </div>
        
        {/* Main content with iPhone */}
        <div className="max-w-6xl mx-auto px-6 py-16 flex items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight mb-6">
              <span className="block text-foreground/90 mb-2">Купить Айфон в Казани</span>
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
                по выгодной цене
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-light text-foreground/60">
              Подберите свой Айфон за 1 минуту
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <img 
              src={heroIphone} 
              alt="iPhone" 
              className="w-96 lg:w-[500px] h-auto object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
