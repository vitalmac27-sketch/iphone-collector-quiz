import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import iPhone16Pro from "@/assets/iphone-16-pro.jpg";
import iPhone15Pro from "@/assets/iphone-15-pro.jpg";
import iPhone14Pro from "@/assets/iphone-14-pro.jpg";
import iPhone13Pro from "@/assets/iphone-13-pro.jpg";

interface ModelSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const models = [
  "iPhone 17 Pro Max",
  "iPhone 17 Pro",
  "iPhone 17 Plus",
  "iPhone 17",
  "iPhone 16 Pro Max",
  "iPhone 16 Pro",
  "iPhone 16 Plus",
  "iPhone 16",
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15 Plus",
  "iPhone 15",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 14 Plus",
  "iPhone 14",
  "iPhone 13 Pro Max",
  "iPhone 13 Pro",
  "iPhone 13 mini",
  "iPhone 13",
];

const getModelImage = (model: string) => {
  if (model.includes("16") || model.includes("17")) return iPhone16Pro;
  if (model.includes("15")) return iPhone15Pro;
  if (model.includes("14")) return iPhone14Pro;
  if (model.includes("13")) return iPhone13Pro;
  return iPhone16Pro;
};

const ModelSelector = ({ value, onChange }: ModelSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Выберите модель iPhone
        </h2>
        <p className="text-muted-foreground">
          Какая модель вас интересует?
        </p>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2">
        {models.map((model) => (
          <div key={model} className="relative overflow-hidden rounded-lg">
            <RadioGroupItem
              value={model}
              id={model}
              className="peer sr-only"
            />
            <Label
              htmlFor={model}
              className="flex items-center gap-4 p-4 rounded-lg border-2 border-border bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all hover:border-primary hover:shadow-lg peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-background/50">
                <img 
                  src={getModelImage(model)} 
                  alt={model}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-medium text-foreground flex-1">{model}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ModelSelector;
