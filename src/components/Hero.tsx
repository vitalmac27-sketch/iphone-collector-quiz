import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      {/* Logo */}
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl animate-pulse" />
        <img 
          src={logo} 
          alt="ЭПЛ КОЛЛЕКЦИЯ" 
          className="relative w-20 h-20 mx-auto rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,113,227,0.25)] transition-all duration-500 hover:scale-105 hover:shadow-[0_12px_48px_-12px_rgba(0,113,227,0.35)]"
        />
      </div>
      
      {/* Main Heading */}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 animate-fade-in">
        <span className="block text-foreground/90 mb-2">
          Купить Айфон в Казани
        </span>
        <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent font-normal">
          по выгодной цене
        </span>
      </h1>
      
      {/* Subtitle */}
      <div className="max-w-xl mx-auto space-y-2 animate-fade-in [animation-delay:100ms]">
        <h2 className="text-xl md:text-2xl font-light text-foreground/70">
          Подберите свой Айфон за 1 минуту
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-light">
          Ответьте на несколько вопросов и получите персональное предложение
        </p>
      </div>
    </div>
  );
};

export default Hero;
