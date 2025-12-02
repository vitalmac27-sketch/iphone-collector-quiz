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
    <div className="mb-8 animate-fade-in [animation-delay:200ms]">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10 p-6 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-display font-medium text-lg text-foreground mb-1">
                Скидка 2000₽ действует сегодня!
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Успей оформить заказ и получи выгоду
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/20 shadow-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-mono font-semibold text-primary tabular-nums">{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
