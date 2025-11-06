import { Shield, Zap, CheckCircle, TrendingUp, BadgePercent } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Гарантия 1 год",
    description: "На все устройства"
  },
  {
    icon: Zap,
    title: "Быстрая доставка",
    description: "В день заказа"
  },
  {
    icon: CheckCircle,
    title: "Проверка при получении",
    description: "Убедитесь в качестве"
  },
  {
    icon: TrendingUp,
    title: "Trade-in",
    description: "Обмен старого на новый"
  },
  {
    icon: BadgePercent,
    title: "Выгода до 50%",
    description: "По сравнению с новыми"
  }
];

const Benefits = () => {
  return (
    <div className="mt-16 animate-fade-in [animation-delay:400ms]">
      <h2 className="text-2xl font-bold text-center mb-8">Почему выбирают нас?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Card 
              key={benefit.title}
              className="p-6 text-center card-glow hover:border-primary/30 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
