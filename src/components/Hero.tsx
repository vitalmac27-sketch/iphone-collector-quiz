import { Smartphone, Apple } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center mb-12 animate-slide-up">
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-glow-pulse"></div>
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl animate-float">
          <Apple className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
          ЭПЛ-КОЛЛЕКЦИЯ
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in [animation-delay:100ms]">
        Найдите свой идеальный iPhone
      </p>
      
      <p className="text-sm text-muted-foreground animate-fade-in [animation-delay:200ms]">
        Ответьте на несколько вопросов и получите персональное предложение
      </p>
    </div>
  );
};

export default Hero;
