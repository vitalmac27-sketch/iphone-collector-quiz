import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Banknote, CreditCard } from "lucide-react";

interface PaymentMethodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const PaymentMethodSelector = ({ value, onChange }: PaymentMethodSelectorProps) => {
  const methods = [
    {
      id: "cash",
      label: "Наличными",
      icon: Banknote,
    },
    {
      id: "installment",
      label: "В рассрочку 0%",
      description: "Оформление онлайн",
      icon: CreditCard,
    },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Форма оплаты
        </h2>
        <p className="text-muted-foreground">
          Выберите удобный способ оплаты
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {methods.map((method) => {
          const Icon = method.icon;
          return (
            <Button
              key={method.id}
              variant={value === method.id ? "default" : "outline"}
              onClick={() => onChange(method.id)}
              className={`h-auto py-6 px-6 flex flex-col items-center gap-3 transition-all ${
                value === method.id
                  ? "ring-2 ring-primary shadow-lg scale-105"
                  : "hover:border-primary/50"
              }`}
            >
              <Icon className="w-8 h-8" />
              <div className="text-center">
                <div className="font-semibold text-base">{method.label}</div>
                {method.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {method.description}
                  </div>
                )}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
