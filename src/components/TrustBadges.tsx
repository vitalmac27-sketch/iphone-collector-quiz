import { Shield, CheckCircle, Users, CreditCard } from "lucide-react";

const badges = [
  {
    icon: Shield,
    text: "Официальная гарантия",
  },
  {
    icon: CheckCircle,
    text: "Проверка при получении",
  },
  {
    icon: Users,
    text: "2000+ довольных клиентов",
  },
  {
    icon: CreditCard,
    text: "Оплата частями, без переплат*",
  },
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-8 animate-fade-in [animation-delay:300ms]">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="group flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,113,227,0.2)]"
          >
            <div className="p-1 md:p-1.5 rounded-md md:rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
              <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            </div>
            <span className="text-xs md:text-sm font-light text-foreground/80 group-hover:text-foreground transition-colors">
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
