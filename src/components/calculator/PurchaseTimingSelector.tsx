import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Clock, CalendarDays } from "lucide-react";

interface PurchaseTimingSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const timingOptions = [
  { value: "today-tomorrow", label: "Сегодня-завтра", icon: Clock, description: "Готов купить прямо сейчас" },
  { value: "this-week", label: "На неделе", icon: Calendar, description: "В ближайшие 7 дней" },
  { value: "this-month", label: "В течение месяца", icon: CalendarDays, description: "Планирую в этом месяце" },
];

const PurchaseTimingSelector = ({ value, onChange }: PurchaseTimingSelectorProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Когда планируете покупку?</h2>
        <p className="text-muted-foreground">Выберите удобные сроки</p>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="grid gap-4">
        {timingOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Label
              key={option.value}
              htmlFor={option.value}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 hover:bg-primary/5 ${
                value === option.value
                  ? "border-primary bg-primary/10 shadow-lg"
                  : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
              <div className={`p-3 rounded-full ${value === option.value ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-lg">{option.label}</span>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
              {value === option.value && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </Label>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default PurchaseTimingSelector;
