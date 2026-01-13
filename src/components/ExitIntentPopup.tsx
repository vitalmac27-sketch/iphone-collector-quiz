import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

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
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0088cc]/10">
            <svg className="w-8 h-8 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Подождите! 🎁
          </DialogTitle>
          <DialogDescription className="text-center text-base space-y-2">
            <span className="block text-lg font-semibold text-[#0088cc]">
              Скидка 1000₽ для подписчиков!
            </span>
            <span className="block text-muted-foreground">
              Подпишитесь на наш Telegram канал и получите:
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-[#0088cc]">✓</span>
              <span>Эксклюзивные скидки до 15%</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#0088cc]">✓</span>
              <span>Первыми узнавайте о новых поступлениях</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#0088cc]">✓</span>
              <span>Промокод на 1000₽ при подписке</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#0088cc]">✓</span>
              <span>Закрытые распродажи для подписчиков</span>
            </li>
          </ul>

          <div className="space-y-3">
            <Button
              className="w-full h-12 text-base font-semibold bg-[#0088cc] hover:bg-[#006699]"
              size="lg"
              asChild
            >
              <a href="https://t.me/apple_collecty" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Подписаться на канал
              </a>
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              @apple_collecty • Уже 500+ подписчиков
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
