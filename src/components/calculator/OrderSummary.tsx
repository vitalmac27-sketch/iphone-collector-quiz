import { Card } from "@/components/ui/card";
import { Smartphone, HardDrive, Package, Battery, Signal, CreditCard, CheckCircle2 } from "lucide-react";
import { CalculatorData } from "@/pages/Index";
import { cn } from "@/lib/utils";

interface OrderSummaryProps {
  data: CalculatorData;
  currentStep: number;
}

const OrderSummary = ({ data, currentStep }: OrderSummaryProps) => {
  const items = [
    { 
      icon: Smartphone, 
      label: "Модель", 
      value: data.model, 
      step: 1,
      color: "text-blue-500"
    },
    { 
      icon: HardDrive, 
      label: "Память", 
      value: data.storage, 
      step: 2,
      color: "text-purple-500"
    },
    { 
      icon: Package, 
      label: "Состояние", 
      value: data.condition === "new" ? "Новый" : data.condition === "used" ? "Б/У" : "", 
      step: 3,
      color: "text-green-500"
    },
    { 
      icon: Battery, 
      label: "Батарея", 
      value: data.condition === "used" ? `${data.battery}%` : "—", 
      step: 4,
      color: "text-orange-500",
      hidden: data.condition === "new"
    },
    { 
      icon: Signal, 
      label: "SIM", 
      value: data.simType, 
      step: 5,
      color: "text-cyan-500"
    },
    { 
      icon: CreditCard, 
      label: "Оплата", 
      value: data.paymentMethod === "cash" ? "Наличными" : data.paymentMethod === "installment" ? "В рассрочку 0%" : "", 
      step: 6,
      color: "text-pink-500"
    },
  ].filter(item => !item.hidden);

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/10 sticky top-4">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg text-foreground">Ваш выбор</h3>
      </div>
      
      <div className="space-y-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isCompleted = currentStep > item.step;
          const isCurrent = currentStep === item.step;
          
          return (
            <div 
              key={index}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
                isCompleted && "bg-background/50 border border-primary/20",
                isCurrent && "bg-accent/10 border border-accent",
                !isCompleted && !isCurrent && "opacity-40"
              )}
            >
              <div className={cn(
                "p-2 rounded-lg",
                isCompleted ? "bg-primary/10" : "bg-muted"
              )}>
                <Icon className={cn("w-4 h-4", isCompleted ? item.color : "text-muted-foreground")} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className={cn(
                  "font-medium truncate",
                  item.value ? "text-foreground" : "text-muted-foreground"
                )}>
                  {item.value || "Не выбрано"}
                </p>
              </div>
              {isCompleted && (
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {currentStep === 6 && data.paymentMethod && (
        <div className="mt-4 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
          <p className="text-sm text-center font-medium text-foreground">
            Все параметры выбраны! 🎉
          </p>
        </div>
      )}
    </Card>
  );
};

export default OrderSummary;
