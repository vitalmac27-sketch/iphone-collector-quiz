import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ModelSelector from "@/components/calculator/ModelSelector";
import StorageSelector from "@/components/calculator/StorageSelector";
import ConditionSelector from "@/components/calculator/ConditionSelector";
import SimTypeSelector from "@/components/calculator/SimTypeSelector";
import BatterySelector from "@/components/calculator/BatterySelector";
import PaymentMethodSelector from "@/components/calculator/PaymentMethodSelector";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import EnhancedProgressBar from "@/components/calculator/EnhancedProgressBar";
import UrgencyBanner from "@/components/UrgencyBanner";
import TrustBadges from "@/components/TrustBadges";
import OrderSummary from "@/components/calculator/OrderSummary";
import FinalReview from "@/components/calculator/FinalReview";

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

  const totalSteps = 7; // Added final review step
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step === 3 && data.condition === "new") {
      setStep(5);
    } else if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    // Clear current step data when going back
    switch (step) {
      case 2:
        setData({ ...data, model: "" });
        break;
      case 3:
        setData({ ...data, storage: "" });
        break;
      case 4:
        setData({ ...data, condition: "" });
        break;
      case 5:
        if (data.condition === "new") {
          setData({ ...data, condition: "" });
          setStep(3);
          return;
        }
        setData({ ...data, battery: "" });
        break;
      case 6:
        setData({ ...data, simType: "" });
        break;
      case 7:
        setData({ ...data, paymentMethod: "" });
        break;
    }
    
    // Navigate back
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
    window.open(`https://wa.me/79172999773?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen p-4 py-12">
      <div className="max-w-7xl mx-auto">
        <Hero />

        <UrgencyBanner />
        <TrustBadges />

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Main Calculator */}
          <div className="lg:col-span-2">
            {/* Enhanced Progress Bar */}
            <EnhancedProgressBar 
              currentStep={step} 
              totalSteps={totalSteps - 1} // Exclude final review from visible steps
              condition={data.condition}
            />

            {/* Calculator Card */}
            <Card className="p-8 shadow-xl bg-white/80 backdrop-blur-sm border-2 border-primary/10 card-glow animate-fade-in [animation-delay:300ms]">
              {step === 1 && (
                <div className="space-y-6">
                  <ModelSelector
                    value={data.model}
                    onChange={(model) => setData({ ...data, model })}
                  />
                  <Button
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all"
                    disabled={!data.model}
                  >
                    Продолжить
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <StorageSelector
                    value={data.storage}
                    onChange={(storage) => setData({ ...data, storage })}
                  />
                  <Button
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all"
                    disabled={!data.storage}
                  >
                    Продолжить
                  </Button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <ConditionSelector
                    value={data.condition}
                    onChange={(condition) => setData({ ...data, condition })}
                  />
                  <Button
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all"
                    disabled={!data.condition}
                  >
                    Продолжить
                  </Button>
                </div>
              )}

              {step === 4 && data.condition === "used" && (
                <div className="space-y-6">
                  <BatterySelector
                    value={data.battery}
                    onChange={(battery) => setData({ ...data, battery })}
                  />
                  <Button
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all"
                    disabled={!data.battery}
                  >
                    Продолжить
                  </Button>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <SimTypeSelector
                    value={data.simType}
                    onChange={(simType) => setData({ ...data, simType })}
                  />
                  <Button
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all"
                    disabled={!data.simType}
                  >
                    Продолжить
                  </Button>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-6">
                  <PaymentMethodSelector
                    value={data.paymentMethod}
                    onChange={(paymentMethod) => setData({ ...data, paymentMethod })}
                  />
                  <Button
                    onClick={() => setStep(7)}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all"
                    disabled={!data.paymentMethod}
                  >
                    Продолжить
                  </Button>
                </div>
              )}

              {step === 7 && (
                <FinalReview
                  data={data}
                  onConfirm={handleWhatsApp}
                  onBack={handleBack}
                />
              )}

              {/* Navigation - only show for non-final steps */}
              {step < 7 && (
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
                </div>
              )}
            </Card>

            {/* Footer */}
            <div className="text-center mt-6 text-sm text-muted-foreground animate-fade-in">
              {step === 7 ? (
                "Нажимая кнопку, вы будете перенаправлены в WhatsApp"
              ) : (
                "Выберите подходящий вариант для автоматического перехода"
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:block hidden">
            <OrderSummary data={data} currentStep={step} />
          </div>
        </div>

        <Benefits />
      </div>
    </div>
  );
};

export default Index;
