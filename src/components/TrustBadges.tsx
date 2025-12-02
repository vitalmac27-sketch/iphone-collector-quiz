import { Shield, CheckCircle, Users } from "lucide-react";

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
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in [animation-delay:300ms]">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,113,227,0.2)]"
          >
            <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-light text-foreground/80 group-hover:text-foreground transition-colors">
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
