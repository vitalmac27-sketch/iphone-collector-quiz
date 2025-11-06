import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Smartphone, CreditCard } from "lucide-react";

interface SimTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const simOptions = [
  { value: "eSIM", label: "eSIM", icon: Smartphone },
  { value: "2 SIM", label: "2 SIM", icon: CreditCard },
  { value: "eSIM + SIM", label: "eSIM + SIM", icon: Smartphone },
];

const SimTypeSelector = ({ value, onChange }: SimTypeSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Тип SIM-карты
        </h2>
        <p className="text-muted-foreground">
          Какой тип SIM вас интересует?
        </p>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 gap-4">
        {simOptions.map((option) => {
          const Icon = option.icon;
          return (
            <div key={option.value} className="relative">
              <RadioGroupItem
                value={option.value}
                id={option.value}
                className="peer sr-only"
              />
              <Label
                htmlFor={option.value}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 border-border bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all hover:border-primary hover:shadow-md peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-lg"
              >
                <Icon className="w-8 h-8 text-primary" />
                <span className="font-bold text-lg text-foreground">{option.label}</span>
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default SimTypeSelector;
