import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24 text-center animate-fade-in">
      {/* Logo */}
      <div className="mb-12 md:mb-16">
        <img 
          src={logo} 
          alt="ЭПЛ КОЛЛЕКЦИЯ" 
          className="h-16 md:h-20 mx-auto rounded-2xl transition-all duration-300 hover:scale-105"
        />
      </div>
      
      {/* Main Heading */}
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 md:mb-8">
        <span className="block text-foreground/90 mb-3">
          Купить Айфон в Казани
        </span>
        <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent font-normal">
          по выгодной цене
        </span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl lg:text-2xl font-light text-foreground/60 max-w-2xl mx-auto">
        Подберите свой Айфон за 1 минуту
      </p>
    </div>
  );
};

export default Hero;
