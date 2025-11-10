import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Sparkles, Package } from "lucide-react";

interface ConditionSelectorProps {
  value: "new" | "used" | "";
  onChange: (value: "new" | "used") => void;
}

const ConditionSelector = ({ value, onChange }: ConditionSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Состояние устройства
        </h2>
        <p className="text-muted-foreground">
          Новый или б/у?
        </p>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 gap-4">
        <div className="relative">
          <RadioGroupItem
            value="new"
            id="new"
            className="peer sr-only"
          />
          <Label
            htmlFor="new"
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border-2 border-border bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-lg"
          >
            <Sparkles className="w-12 h-12 text-primary" />
            <div className="text-center">
              <span className="font-bold text-xl text-foreground block">Новый</span>
              <span className="text-sm text-muted-foreground">С запечатанной коробкой</span>
            </div>
          </Label>
        </div>

        <div className="relative">
          <RadioGroupItem
            value="used"
            id="used"
            className="peer sr-only"
          />
          <Label
            htmlFor="used"
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border-2 border-border bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-lg"
          >
            <Package className="w-12 h-12 text-primary" />
            <div className="text-center">
              <span className="font-bold text-xl text-foreground block">Б/У</span>
              <span className="text-sm text-muted-foreground">Бывший в употреблении</span>
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ConditionSelector;
