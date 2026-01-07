import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import iPhone17ProMax from "@/assets/iphone-17-pro-max.avif";
import iPhone17Pro from "@/assets/iphone-17-pro.avif";
import iPhone17Air from "@/assets/iphone-17-air.avif";
import iPhone17 from "@/assets/iphone-17.webp";
import iPhone16ProMax from "@/assets/iphone-16-pro-max.avif";
import iPhone16Pro from "@/assets/iphone-16-pro-new.avif";
import iPhone16Plus from "@/assets/iphone-16-plus.avif";
import iPhone16 from "@/assets/iphone-16.avif";
import iPhone15ProMax from "@/assets/iphone-15-pro-max.avif";
import iPhone15Pro from "@/assets/iphone-15-pro.avif";
import iPhone15Plus from "@/assets/iphone-15-plus.avif";
import iPhone15 from "@/assets/iphone-15.avif";
import iPhone14ProMax from "@/assets/iphone-14-pro-max.avif";
import iPhone14Pro from "@/assets/iphone-14-pro.avif";
import iPhone14 from "@/assets/iphone-14.avif";
import iPhone13ProMax from "@/assets/iphone-13-pro-max.avif";
import iPhone13Pro from "@/assets/iphone-13-pro.avif";
import iPhone13Mini from "@/assets/iphone-13-mini.avif";
import iPhone13 from "@/assets/iphone-13.avif";

interface ModelSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const models = [
  "iPhone 17 Pro Max",
  "iPhone 17 Pro",
  "iPhone 17 Air",
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

// Цены Apple USA × курс ~95₽/$ минус 15%
const modelPrices: Record<string, number> = {
  "iPhone 17 Pro Max": 101000,
  "iPhone 17 Pro": 88700,
  "iPhone 17 Air": 80700,
  "iPhone 17": 64500,
  "iPhone 16 Pro Max": 96800,
  "iPhone 16 Pro": 80700,
  "iPhone 16 Plus": 72600,
  "iPhone 16": 56400,
  "iPhone 15 Pro Max": 0,      // снят с продажи
  "iPhone 15 Pro": 0,          // снят с продажи
  "iPhone 15 Plus": 0,         // снят с продажи
  "iPhone 15": 0,              // снят с продажи
  "iPhone 14 Pro Max": 0,      // б/у
  "iPhone 14 Pro": 0,          // б/у
  "iPhone 14 Plus": 0,         // б/у
  "iPhone 14": 0,              // б/у
  "iPhone 13 Pro Max": 0,      // б/у
  "iPhone 13 Pro": 0,          // б/у
  "iPhone 13 mini": 0,         // б/у
  "iPhone 13": 0,              // б/у
};

const formatPrice = (price: number) => {
  return price.toLocaleString('ru-RU');
};

const getMonthlyPayment = (price: number) => {
  return Math.round(price / 10);
};

const modelImages: Record<string, string> = {
  "iPhone 17 Pro Max": iPhone17ProMax,
  "iPhone 17 Pro": iPhone17Pro,
  "iPhone 17 Air": iPhone17Air,
  "iPhone 17": iPhone17,
  "iPhone 16 Pro Max": iPhone16ProMax,
  "iPhone 16 Pro": iPhone16Pro,
  "iPhone 16 Plus": iPhone16Plus,
  "iPhone 16": iPhone16,
  "iPhone 15 Pro Max": iPhone15ProMax,
  "iPhone 15 Pro": iPhone15Pro,
  "iPhone 15 Plus": iPhone15Plus,
  "iPhone 15": iPhone15,
  "iPhone 14 Pro Max": iPhone14ProMax,
  "iPhone 14 Pro": iPhone14Pro,
  "iPhone 14 Plus": iPhone14,
  "iPhone 14": iPhone14,
  "iPhone 13 Pro Max": iPhone13ProMax,
  "iPhone 13 Pro": iPhone13Pro,
  "iPhone 13 mini": iPhone13Mini,
  "iPhone 13": iPhone13,
};

const modelAltTexts: Record<string, string> = {
  "iPhone 17 Pro Max": "Купить iPhone 17 Pro Max в Казани - ЭПЛ-КОЛЛЕКЦИЯ",
  "iPhone 17 Pro": "Купить iPhone 17 Pro в Казани недорого",
  "iPhone 17 Air": "Купить iPhone 17 Air в Казани с доставкой",
  "iPhone 17": "Купить iPhone 17 в Казани - магазин Apple",
  "iPhone 16 Pro Max": "Купить iPhone 16 Pro Max в Казани - ЭПЛ-КОЛЛЕКЦИЯ",
  "iPhone 16 Pro": "Купить iPhone 16 Pro в Казани недорого",
  "iPhone 16 Plus": "Купить iPhone 16 Plus в Казани с доставкой",
  "iPhone 16": "Купить iPhone 16 в Казани - магазин Apple",
  "iPhone 15 Pro Max": "Купить iPhone 15 Pro Max в Казани недорого",
  "iPhone 15 Pro": "Купить iPhone 15 Pro в Казани - ЭПЛ-КОЛЛЕКЦИЯ",
  "iPhone 15 Plus": "Купить iPhone 15 Plus в Казани с доставкой",
  "iPhone 15": "Купить iPhone 15 в Казани - магазин Apple",
  "iPhone 14 Pro Max": "Купить iPhone 14 Pro Max в Казани б/у",
  "iPhone 14 Pro": "Купить iPhone 14 Pro в Казани недорого",
  "iPhone 14 Plus": "Купить iPhone 14 Plus в Казани с доставкой",
  "iPhone 14": "Купить iPhone 14 в Казани - магазин Apple",
  "iPhone 13 Pro Max": "Купить iPhone 13 Pro Max в Казани б/у",
  "iPhone 13 Pro": "Купить iPhone 13 Pro в Казани недорого",
  "iPhone 13 mini": "Купить iPhone 13 mini в Казани с доставкой",
  "iPhone 13": "Купить iPhone 13 в Казани - магазин Apple",
};

const getModelImage = (model: string) => {
  return modelImages[model] || iPhone16Pro;
};

const getModelAlt = (model: string) => {
  return modelAltTexts[model] || `Купить ${model} в Казани - ЭПЛ-КОЛЛЕКЦИЯ`;
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

      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-2">
        {models.map((model) => (
          <div key={model} className="relative overflow-hidden rounded-lg">
            <RadioGroupItem
              value={model}
              id={model}
              className="peer sr-only"
            />
            <Label
              htmlFor={model}
              className="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-border bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all hover:border-primary hover:shadow-lg peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aspect-square"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-background/50">
                <img 
                  src={getModelImage(model)} 
                  alt={getModelAlt(model)}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-center flex-1">
                <span className="font-medium text-foreground text-sm">{model}</span>
                {modelPrices[model] > 0 && (
                  <div className="flex flex-col gap-0.5 w-full">
                    <span className="text-xs text-primary font-semibold">
                      от {formatPrice(modelPrices[model])} ₽
                    </span>
                    <span className="text-[10px] leading-tight font-medium text-primary/90 border border-primary/30 rounded px-1.5 py-0.5 bg-primary/5">
                      {formatPrice(getMonthlyPayment(modelPrices[model]))} ₽/мес
                    </span>
                  </div>
                )}
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ModelSelector;
