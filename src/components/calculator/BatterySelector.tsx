import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import BatteryIcon from "@/components/icons/BatteryIcon";

interface BatterySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const batteryOptions = [
  { value: "100", label: "100%", bars: 4 as const, color: "text-green-500" },
  { value: "95-99", label: "95-99%", bars: 3 as const, color: "text-green-500" },
  { value: "90-94", label: "90-94%", bars: 2 as const, color: "text-green-500" },
  { value: "87-89", label: "87-89%", bars: 2 as const, color: "text-blue-500" },
];

const BatterySelector = ({ value, onChange }: BatterySelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Емкость аккумулятора
        </h2>
        <p className="text-muted-foreground">
          Какой процент батареи вас интересует?
        </p>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 gap-4">
        {batteryOptions.map((option) => {
          return (
            <div key={option.value} className="relative">
              <RadioGroupItem
                value={option.value}
                id={option.value}
                className="peer sr-only"
              />
              <Label
                htmlFor={option.value}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 border-border bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-lg"
              >
                <BatteryIcon bars={option.bars} className={`w-8 h-8 ${option.color}`} />
                <span className="font-bold text-lg text-foreground">{option.label}</span>
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default BatterySelector;
