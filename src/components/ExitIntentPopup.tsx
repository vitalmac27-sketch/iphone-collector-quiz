import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, X } from "lucide-react";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🎁 ЭКСКЛЮЗИВНАЯ ЗАЯВКА\n\n👤 Имя: ${name}\n📱 Контакт: ${contact}\n\n🎁 Подарки на 3000₽`;
    
    const whatsappUrl = `https://wa.me/79992673933?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Подождите! 🎁
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            <span className="text-lg font-semibold text-primary">Набор аксессуаров на 3000₽ бесплатно!</span>
            <br />
            Блок питания, чехол и стекло — только для вас
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-3">
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12"
            />
            <Input
              placeholder="WhatsApp или Telegram"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold"
              size="lg"
            >
              Забрать подарки
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              ⭐ 5/5 на основе 300+ отзывов
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
