import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <div className="text-center mb-12 animate-slide-up">
      <div className="relative inline-block mb-6">
        <img 
          src={logo} 
          alt="ЭПЛ КОЛЛЕКЦИЯ" 
          className="w-24 h-24 mx-auto rounded-2xl shadow-2xl animate-float"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
          Купить Айфон в Казани по выгодной цене
        </span>
      </h1>
      
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in [animation-delay:100ms]">
        Подберите свой Айфон за 1 минуту
      </h2>
      
      <p className="text-sm text-muted-foreground animate-fade-in [animation-delay:200ms]">
        Ответьте на несколько вопросов и получите персональное предложение
      </p>
    </div>
  );
};

export default Hero;
