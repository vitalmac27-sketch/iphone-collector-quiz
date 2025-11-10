import { Shield, CheckCircle, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const badges = [
  {
    icon: Shield,
    text: "Официальная гарантия",
    variant: "default" as const,
  },
  {
    icon: CheckCircle,
    text: "Проверка при получении",
    variant: "secondary" as const,
  },
  {
    icon: Users,
    text: "2000+ довольных клиентов",
    variant: "outline" as const,
  },
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in [animation-delay:200ms]">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <Badge
            key={index}
            variant={badge.variant}
            className="px-4 py-2 text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Icon className="w-4 h-4" />
            {badge.text}
          </Badge>
        );
      })}
    </div>
  );
};

export default TrustBadges;
