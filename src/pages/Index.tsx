import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ModelSelector from "@/components/calculator/ModelSelector";
import StorageSelector from "@/components/calculator/StorageSelector";
import ConditionSelector from "@/components/calculator/ConditionSelector";
import SimTypeSelector from "@/components/calculator/SimTypeSelector";
import BatterySelector from "@/components/calculator/BatterySelector";
import PaymentMethodSelector from "@/components/calculator/PaymentMethodSelector";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";

export interface CalculatorData {
  model: string;
  storage: string;
  condition: "new" | "used" | "";
  simType: string;
  battery: string;
  paymentMethod: string;
}

const Index = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CalculatorData>({
    model: "",
    storage: "",
    condition: "",
    simType: "",
    battery: "",
    paymentMethod: "",
  });

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  // Auto-advance when selection is made
  useEffect(() => {
    const shouldAdvance = () => {
      switch (step) {
        case 1: return data.model !== "";
        case 2: return data.storage !== "";
        case 3: return data.condition !== "";
        case 4: return data.condition === "used" && data.battery !== "";
        case 5: return data.simType !== "";
        case 6: return false; // Last step, don't auto-advance
        default: return false;
      }
    };

    if (shouldAdvance()) {
      const timer = setTimeout(() => {
        if (step === 3 && data.condition === "new") {
          setStep(5);
        } else if (step < totalSteps) {
          setStep(step + 1);
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [data.model, data.storage, data.condition, data.battery, data.simType, step, totalSteps]);

  const handleBack = () => {
    if (step === 5 && data.condition === "new") {
      setStep(3);
    } else {
      setStep(step - 1);
    }
  };

  const handleWhatsApp = () => {
    const paymentText = data.paymentMethod === "cash" ? "Наличными" : "В рассрочку 0% (оформление онлайн)";
    const message = `Здравствуйте! Интересует iPhone со следующими параметрами:\n\n📱 Модель: ${data.model}\n💾 Память: ${data.storage}\n✨ Состояние: ${data.condition === "new" ? "Новый" : "Б/У"}${data.condition === "used" ? `\n🔋 Аккумулятор: ${data.battery}%` : ""}\n📡 SIM: ${data.simType}\n💳 Оплата: ${paymentText}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79179997773?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-3xl">
        <Hero />

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Шаг {step} из {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Calculator Card */}
        <Card className="p-8 shadow-xl bg-white/80 backdrop-blur-sm border-2 border-primary/10 card-glow animate-fade-in [animation-delay:300ms]">
          {step === 1 && (
            <ModelSelector
              value={data.model}
              onChange={(model) => setData({ ...data, model })}
            />
          )}

          {step === 2 && (
            <StorageSelector
              value={data.storage}
              onChange={(storage) => setData({ ...data, storage })}
            />
          )}

          {step === 3 && (
            <ConditionSelector
              value={data.condition}
              onChange={(condition) => setData({ ...data, condition })}
            />
          )}

          {step === 4 && data.condition === "used" && (
            <BatterySelector
              value={data.battery}
              onChange={(battery) => setData({ ...data, battery })}
            />
          )}

          {step === 5 && (
            <SimTypeSelector
              value={data.simType}
              onChange={(simType) => setData({ ...data, simType })}
            />
          )}

          {step === 6 && (
            <PaymentMethodSelector
              value={data.paymentMethod}
              onChange={(paymentMethod) => setData({ ...data, paymentMethod })}
            />
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1 hover:bg-muted"
              >
                Назад
              </Button>
            )}
            
            {step === totalSteps && data.paymentMethod && (
              <Button
                onClick={handleWhatsApp}
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all animate-glow-pulse"
              >
                Отправить в WhatsApp
              </Button>
            )}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground animate-fade-in">
          {step === totalSteps ? (
            "Нажимая кнопку, вы будете перенаправлены в WhatsApp"
          ) : (
            "Выберите подходящий вариант для автоматического перехода"
          )}
        </div>

        <Benefits />
      </div>
    </div>
  );
};

export default Index;
