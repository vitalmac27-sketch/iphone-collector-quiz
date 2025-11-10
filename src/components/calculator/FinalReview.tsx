import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalculatorData } from "@/pages/Index";
import { Smartphone, HardDrive, Package, Battery, Signal, CreditCard, CheckCircle2, Shield, Zap, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FinalReviewProps {
  data: CalculatorData;
  onConfirm: () => void;
  onBack: () => void;
}

const FinalReview = ({ data, onConfirm, onBack }: FinalReviewProps) => {
  const items = [
    { icon: Smartphone, label: "Модель", value: data.model },
    { icon: HardDrive, label: "Память", value: data.storage },
    { icon: Package, label: "Состояние", value: data.condition === "new" ? "Новый" : "Б/У" },
    ...(data.condition === "used" ? [{ icon: Battery, label: "Батарея", value: `${data.battery}%` }] : []),
    { icon: Signal, label: "SIM", value: data.simType },
    { icon: CreditCard, label: "Оплата", value: data.paymentMethod === "cash" ? "Наличными" : "В рассрочку 0%" },
  ];

  const benefits = [
    { icon: Shield, text: "Гарантия 1 год" },
    { icon: Zap, text: "Доставка в день заказа" },
    { icon: CheckCircle2, text: "Проверка при получении" },
    { icon: TrendingDown, text: "Скидка 2000₽ сегодня" },
  ];

  return (
    <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Проверьте ваш заказ</h2>
        <p className="text-muted-foreground">Убедитесь, что все данные указаны верно</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-foreground">Ваша конфигурация</h3>
        </div>
        
        <div className="grid gap-3 mb-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-muted-foreground mb-3">Что вы получаете:</p>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-3 py-2 justify-start gap-2 hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs">{benefit.text}</span>
                </Badge>
              );
            })}
          </div>
        </div>
      </Card>

      <div className="flex gap-4 sticky bottom-0 bg-background/95 backdrop-blur-sm py-4 -mx-2 px-2">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 hover:bg-muted"
        >
          Назад
        </Button>
        <Button
          onClick={onConfirm}
          className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all text-lg py-6"
        >
          Отправить в WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default FinalReview;
