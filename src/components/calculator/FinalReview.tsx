import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalculatorData } from "@/pages/Index";
import { Smartphone, HardDrive, Package, Battery, Signal, CreditCard, CheckCircle2, Shield, Zap, TrendingDown, Gift, Star, User, MessageCircle, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";

interface FinalReviewProps {
  data: CalculatorData;
  onConfirm: () => void;
  onBack: () => void;
}

const FinalReview = ({ data, onConfirm, onBack }: FinalReviewProps) => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile && contactFormRef.current) {
      const timer = setTimeout(() => {
        contactFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !whatsapp) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и WhatsApp",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-telegram', {
        body: {
          name,
          whatsapp,
          telegram: telegram || "Не указан",
          model: data.model,
          storage: data.storage,
          condition: data.condition,
          battery: data.battery,
          simType: data.simType,
          paymentMethod: data.paymentMethod,
        },
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });

      // Очистка формы
      setName("");
      setWhatsapp("");
      setTelegram("");
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const items = [
    { icon: Smartphone, label: "Модель", value: data.model },
    { icon: HardDrive, label: "Память", value: data.storage },
    { icon: Package, label: "Состояние", value: data.condition === "new" ? "Новый" : "Б/У" },
    ...(data.condition === "used" ? [{ icon: Battery, label: "Батарея", value: `${data.battery}%` }] : []),
    { icon: Signal, label: "SIM", value: data.simType },
    { icon: CreditCard, label: "Оплата", value: data.paymentMethod === "cash" ? "Наличными" : "В рассрочку 0%" },
  ];

  const benefits = [
    { icon: Shield, text: "Гарантия 1 год" },
    { icon: Zap, text: "Доставка в день заказа" },
    { icon: CheckCircle2, text: "Проверка при получении" },
    { icon: TrendingDown, text: "Скидка 2000₽ сегодня" },
  ];

  return (
    <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Проверьте ваш заказ</h2>
        <p className="text-muted-foreground">Убедитесь, что все данные указаны верно</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-foreground">Ваша конфигурация</h3>
        </div>
        
        <div className="grid gap-3 mb-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-muted-foreground mb-3">Что вы получаете:</p>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-3 py-2 justify-start gap-2 hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs">{benefit.text}</span>
                </Badge>
              );
            })}
          </div>
        </div>
      </Card>

      <Card ref={contactFormRef} className="p-6 border-2 border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-foreground">Оставьте контакты</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Мы свяжемся с вами в течение 5 минут</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Ваше имя *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              Номер WhatsApp *
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegram" className="flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />
              Ник в Telegram (необязательно)
            </Label>
            <Input
              id="telegram"
              type="text"
              placeholder="@username"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <Gift className="w-5 h-5 text-primary" />
              <p className="text-sm font-semibold text-foreground">Оригинальный блок питания в подарок</p>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="flex-1 hover:bg-muted"
                disabled={isSubmitting}
              >
                Назад
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">5/5 на основе 300+ отзывов</span>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FinalReview;
