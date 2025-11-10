import { Smartphone, HardDrive, Package, Battery, Signal, CreditCard, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedProgressBarProps {
  currentStep: number;
  totalSteps: number;
  condition: string;
}

const stepIcons = [
  { icon: Smartphone, label: "Модель" },
  { icon: HardDrive, label: "Память" },
  { icon: Package, label: "Состояние" },
  { icon: Battery, label: "Батарея" },
  { icon: Signal, label: "SIM" },
  { icon: CreditCard, label: "Оплата" },
  { icon: CheckCircle, label: "Готово" },
];

const EnhancedProgressBar = ({ currentStep, totalSteps, condition }: EnhancedProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  // Skip battery step for new phones
  const visibleSteps = stepIcons.filter((_, index) => {
    if (index === 3 && condition === "new") return false; // Skip battery step
    if (index === 6) return false; // Skip final "ready" step from display
    return true;
  });

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-muted-foreground mb-4">
        <span className="font-medium">Шаг {currentStep} из {totalSteps}</span>
        <span className="font-medium">{Math.round(progress)}%</span>
      </div>
      
      {/* Progress bar with gradient */}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary/50">
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary/90 to-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step icons */}
      <div className="flex justify-between mt-4">
        {visibleSteps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const Icon = step.icon;
          
          return (
            <div 
              key={index}
              className="flex flex-col items-center gap-2"
            >
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  isCompleted && "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
                  isCurrent && "bg-accent text-accent-foreground ring-4 ring-accent/20",
                  !isCompleted && !isCurrent && "bg-secondary text-muted-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span 
                className={cn(
                  "text-xs font-medium transition-colors hidden sm:block",
                  (isCompleted || isCurrent) ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnhancedProgressBar;
