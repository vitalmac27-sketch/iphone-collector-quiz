import { Clock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      return `${hours}ч ${minutes}м`;
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-4 md:mb-8 animate-fade-in [animation-delay:200ms]">
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10 p-3 md:p-6 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-primary/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-display font-medium text-base md:text-lg text-foreground mb-0.5 md:mb-1">
                Подарки на 3000₽ сегодня!
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-light">
                Успей оформить заказ и получи выгоду
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl bg-background/80 backdrop-blur-sm border border-primary/20 shadow-sm">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="font-mono font-semibold text-sm md:text-base text-primary tabular-nums">{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
