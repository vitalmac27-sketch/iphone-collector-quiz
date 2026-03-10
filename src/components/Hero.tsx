import heroIphone from "@/assets/hero-iphones-collection.jpg";

const Hero = () => {
  return (
    <div className="animate-fade-in">
      {/* Mobile Hero */}
      <div className="md:hidden">
        {/* Main content */}
        <div className="px-4 pt-4 pb-8 text-center">
          <h1 className="font-display text-3xl font-light tracking-tight mb-3">
            <span className="block text-foreground/90 mb-1">Купить Айфон iPhone</span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
              Казань выгодно
            </span>
          </h1>
          
          <p className="text-base font-light text-foreground/60 mb-6">
            Подберите свой Айфон за 1 минуту
          </p>
          
          {/* iPhone Image */}
          <div className="flex justify-center">
            <img 
              src={heroIphone} 
              alt="Купить Айфон iPhone Казань выгодно — iPhone 13, 14, 15, 16, 17 Pro Max в магазине ЭПЛ-КОЛЛЕКЦИЯ" 
              className="w-80 h-auto object-contain rounded-2xl bg-white"
            />
          </div>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:block">
        {/* Main content with iPhone */}
        <div className="max-w-6xl mx-auto px-6 py-12 flex items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight mb-6">
              <span className="block text-foreground/90 mb-2">Купить Айфон iPhone</span>
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
                Казань выгодно
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-light text-foreground/60">
              Подберите свой Айфон за 1 минуту
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <img 
              src={heroIphone} 
              alt="Купить iPhone в Казани недорого - iPhone 13, 14, 15, 16, 17 Pro Max с гарантией 1 год и бесплатной доставкой" 
              className="w-96 lg:w-[500px] h-auto object-contain rounded-3xl bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;