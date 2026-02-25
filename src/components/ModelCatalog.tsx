import { ExternalLink, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import iphone17ProMax from "@/assets/iphone-17-pro-max.avif";
import iphone17Pro from "@/assets/iphone-17-pro.avif";
import iphone17Air from "@/assets/iphone-17-air.avif";
import iphone17 from "@/assets/iphone-17.avif";
import iphone16ProMax from "@/assets/iphone-16-pro-max.avif";
import iphone16Pro from "@/assets/iphone-16-pro-new.avif";
import iphone16 from "@/assets/iphone-16.avif";
import iphone15ProMax from "@/assets/iphone-15-pro-max.avif";
import iphone15Pro from "@/assets/iphone-15-pro.avif";
import iphone15 from "@/assets/iphone-15.avif";

const models = [
  { name: "iPhone 17 Pro Max", price: "от 105 000 ₽", image: iphone17ProMax, badge: "Новинка" },
  { name: "iPhone 17 Pro", price: "от 95 000 ₽", image: iphone17Pro, badge: "Новинка" },
  { name: "iPhone 17 Air", price: "от 79 000 ₽", image: iphone17Air, badge: "Новинка" },
  { name: "iPhone 17", price: "от 72 000 ₽", image: iphone17, badge: "Новинка" },
  { name: "iPhone 16 Pro Max", price: "от 105 000 ₽", image: iphone16ProMax, badge: "Хит" },
  { name: "iPhone 16 Pro", price: "от 85 000 ₽", image: iphone16Pro, badge: "Хит" },
  { name: "iPhone 16", price: "от 65 000 ₽", image: iphone16 },
  { name: "iPhone 15 Pro Max", price: "от 75 000 ₽", image: iphone15ProMax },
  { name: "iPhone 15 Pro", price: "от 60 000 ₽", image: iphone15Pro },
  { name: "iPhone 15", price: "от 45 000 ₽", image: iphone15 },
];

const ModelCatalog = () => {
  const handleBuy = () => {
    window.open("https://t.me/ac_care", "_blank");
  };

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Модели iPhone в наличии
        </h2>
        <p className="text-muted-foreground">
          Новые и б/у — с гарантией и доставкой по Казани
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {models.map((model) => (
          <Card
            key={model.name}
            className="group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
          >
            {model.badge && (
              <span className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
                {model.badge}
              </span>
            )}

            <div className="aspect-square bg-muted/30 p-3 flex items-center justify-center">
              <img
                src={model.image}
                alt={`Купить ${model.name} в Казани`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-3 space-y-2">
              <h3 className="text-sm font-semibold text-foreground leading-tight">
                {model.name}
              </h3>
              <p className="text-base font-bold text-primary">
                {model.price}
              </p>

              <div className="flex flex-col gap-1.5">
                <Button
                  size="sm"
                  className="w-full text-xs h-8"
                  onClick={handleBuy}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Купить
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs h-8"
                  onClick={handleBuy}
                >
                  <CreditCard className="w-3 h-3 mr-1" />
                  Рассрочка 0%
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ModelCatalog;
