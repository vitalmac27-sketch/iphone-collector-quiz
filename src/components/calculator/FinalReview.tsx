import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalculatorData } from "@/pages/Index";
import { Smartphone, HardDrive, Package, Battery, Signal, CreditCard, CheckCircle2, Shield, Zap, TrendingDown, Gift, Star, User, MessageCircle, Send, Calendar, Banknote } from "lucide-react";

// Цены для новых iPhone 17 моделей (минимальные цены по цветам)
const iphone17Prices: Record<string, Record<string, Record<string, number>>> = {
  "iPhone 17 Pro Max": {
    "256 ГБ": { "eSIM": 105000, "eSIM + SIM": 112000 },
    "512 ГБ": { "eSIM": 116500, "eSIM + SIM": 129000 },
    "1 ТБ": { "eSIM": 133000, "eSIM + SIM": 147000 },
  },
  "iPhone 17 Pro": {
    "256 ГБ": { "eSIM": 95000, "eSIM + SIM": 102500 },
    "512 ГБ": { "eSIM": 108000, "eSIM + SIM": 118500 },
    "1 ТБ": { "eSIM": 125000, "eSIM + SIM": 137000 },
  },
  "iPhone 17 Air": {
    "256 ГБ": { "eSIM": 79000, "eSIM + SIM": 79000 },
    "512 ГБ": { "eSIM": 95000, "eSIM + SIM": 95000 },
  },
  "iPhone 17": {
    "256 ГБ": { "eSIM": 72000, "eSIM + SIM": 72000, "2 SIM": 72000 },
  },
};
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FinalReviewProps {
  data: CalculatorData;
  onConfirm: () => void;
  onBack: () => void;
}

const FinalReview = ({ data, onConfirm, onBack }: FinalReviewProps) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const contactFormRef = useRef<HTMLDivElement>(null);
  const priceBlockRef = useRef<HTMLDivElement>(null);

  // Функция получения цены для новых iPhone 17 моделей
  const getPrice = () => {
    if (data.condition !== "new" || !data.model.startsWith("iPhone 17")) {
      return null;
    }
    
    const modelPrices = iphone17Prices[data.model];
    if (!modelPrices) return null;
    
    const storagePrices = modelPrices[data.storage];
    if (!storagePrices) return null;
    
    const price = storagePrices[data.simType];
    return price || null;
  };

  const calculatedPrice = getPrice();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Если есть цена - скроллим к блоку цены, иначе к форме
      if (calculatedPrice && priceBlockRef.current) {
        priceBlockRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (contactFormRef.current) {
        contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculatedPrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !contact) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-telegram', {
        body: {
          name,
          contact,
          model: data.model,
          storage: data.storage,
          condition: data.condition,
          battery: data.battery,
          simType: data.simType,
          purchaseTiming: data.purchaseTiming,
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
      setContact("");
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

  const timingMap: Record<string, string> = {
    "today-tomorrow": "Сегодня-завтра",
    "this-week": "На неделе",
    "this-month": "В течение месяца",
  };

  const items = [
    { icon: Smartphone, label: "Модель", value: data.model },
    { icon: HardDrive, label: "Память", value: data.storage },
    { icon: Package, label: "Состояние", value: data.condition === "new" ? "Новый" : "Б/У" },
    ...(data.condition === "used" ? [{ icon: Battery, label: "Батарея", value: `${data.battery}%` }] : []),
    { icon: Signal, label: "SIM", value: data.simType },
    { icon: Calendar, label: "Когда покупка", value: timingMap[data.purchaseTiming] || data.purchaseTiming },
    { icon: CreditCard, label: "Оплата", value: data.paymentMethod === "cash" ? "Наличными" : "В рассрочку 0%" },
  ];

  const benefits = [
    { icon: Shield, text: "Гарантия 1 год" },
    { icon: Zap, text: "Доставка в день заказа" },
    { icon: CheckCircle2, text: "Проверка при получении" },
    { icon: TrendingDown, text: "Комплект аксессуаров 3000₽" },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Проверьте ваш заказ</h2>
        <p className="text-sm sm:text-base text-muted-foreground">Убедитесь, что все данные указаны верно</p>
      </div>

      <Card className="p-4 sm:p-6 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          <h3 className="text-lg sm:text-xl font-bold text-foreground">Ваша конфигурация</h3>
        </div>
        
        <div className="grid gap-2 sm:gap-3 mb-4 sm:mb-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground truncate">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-3 sm:pt-4 border-t border-border">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Что вы получаете:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-2 sm:px-3 py-1.5 sm:py-2 justify-start gap-2 hover:bg-primary/10 transition-colors text-left"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="text-xs">{benefit.text}</span>
                </Badge>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Блок с ценой для новых iPhone 17 */}
      {calculatedPrice && (
        <Card ref={priceBlockRef} className="p-4 sm:p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-green-500/20">
                <Banknote className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Стоимость</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  {calculatedPrice.toLocaleString('ru-RU')} ₽
                </p>
              </div>
            </div>
            <Badge className="bg-green-500 text-white hover:bg-green-600">Актуальная цена</Badge>
          </div>
        </Card>
      )}

      <Card ref={contactFormRef} className="p-4 sm:p-6 border-2 border-primary/20">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          <h3 className="text-lg sm:text-xl font-bold text-foreground">Оставьте контакты</h3>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Мы свяжемся с вами в течение 5 минут</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
              <User className="w-4 h-4 text-primary" />
              Ваше имя <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Введите ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 text-base bg-background border-2 border-border focus:border-primary placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact" className="flex items-center gap-2 text-sm font-medium">
              <MessageCircle className="w-4 h-4 text-primary" />
              Телефон или Telegram <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact"
              type="text"
              placeholder="@telegram_ник или +7 999 123-45-67"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="h-12 text-base bg-background border-2 border-border focus:border-primary placeholder:text-muted-foreground/60"
            />
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 bg-muted rounded-md">Пример: @ivan_petrov</span>
              <span className="px-2 py-1 bg-muted rounded-md">Пример: +7 999 123-45-67</span>
            </div>
          </div>

          <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-foreground text-center">Комплект аксессуаров на 3000₽ в подарок</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="w-full sm:flex-1 hover:bg-muted"
                disabled={isSubmitting}
              >
                Назад
              </Button>
              <Button
                type="submit"
                className="w-full sm:flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all text-base sm:text-lg py-5 sm:py-6 animate-pulse"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Получить цену со скидкой"}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium">5/5 на основе 300+ отзывов</span>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FinalReview;
