import { Clock, TrendingDown } from "lucide-react";
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
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6 animate-fade-in">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-destructive/10 via-accent/10 to-primary/10 border-2 border-primary/20 p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse" />
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingDown className="w-5 h-5 text-primary animate-bounce" />
            </div>
            <div>
              <p className="font-bold text-foreground">Скидка 2000₽ действует сегодня!</p>
              <p className="text-sm text-muted-foreground">Успей оформить заказ и получи выгоду</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-mono font-bold text-primary">{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
