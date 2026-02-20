import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17 from "@/assets/iphone-17.webp";

const IPhone17Page = () => {
  const specs = {
    display: '6.1" Super Retina XDR OLED, 60Hz',
    chip: "A19 (3nm)",
    camera: "48MP + 12MP широкоугольная",
    battery: "До 22 часов видео",
    storage: "128GB / 256GB / 512GB",
    features: ["Dynamic Island", "USB-C", "Алюминиевый корпус", "5G", "Face ID", "Ceramic Shield"],
  };

  // Цены -15%
  const prices = {
    "128GB": 64500,
    "256GB": 73000,
    "512GB": 85800,
  };

  return (
    <>
      <Helmet>
        <title>Купить iPhone 17 в Казани недорого | ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="iPhone 17 в Казани ✅ Чип A19, камера 48MP. Гарантия на новые 1 год, на б/у 60 дней. Рассрочка 0% на 10 мес, доставка в день заказа" />
        <meta name="keywords" content="iPhone 17 Казань, купить айфон 17, iPhone 17 цена, айфон 17 казань недорого" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-17" />
        <meta property="og:title" content="iPhone 17 в Казани — ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 17 в Казани. Рассрочка 0%, Trade-in, гарантия." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-17" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li>
            <li>/</li>
            <li className="text-foreground">iPhone 17</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Вернуться в каталог
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-green-500 text-white z-10">
                Хит продаж
              </Badge>
              <img
                src={iPhone17}
                alt="Купить iPhone 17 в Казани недорого - магазин ЭПЛ-КОЛЛЕКЦИЯ"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                iPhone 17 в Казани — купить недорого
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Новый iPhone с чипом A19 и камерой профессионального уровня
              </p>

              <div className="space-y-3 mb-8">
                {Object.entries(prices).map(([storage, price]) => (
                  <Card key={storage} className="border-primary/20">
                    <CardContent className="flex items-center justify-between p-4">
                      <span className="font-medium">{storage}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {price.toLocaleString("ru-RU")} ₽
                        </div>
                        <div className="text-sm text-muted-foreground">
                          от {Math.round(price / 10).toLocaleString("ru-RU")} ₽/мес
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="flex-1">
                  <Link to="/#calculator">Рассчитать стоимость</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer">
                    Написать в Telegram
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Рассрочка 0%", "Trade-in до 70%", "Гарантия до 1 года", "Доставка бесплатно"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 17</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Monitor className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Дисплей</h3>
                  <p className="text-sm text-muted-foreground">{specs.display}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Cpu className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Процессор</h3>
                  <p className="text-sm text-muted-foreground">{specs.chip}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Camera className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Камера</h3>
                  <p className="text-sm text-muted-foreground">{specs.camera}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Battery className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Батарея</h3>
                  <p className="text-sm text-muted-foreground">{specs.battery}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Smartphone className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Память</h3>
                  <p className="text-sm text-muted-foreground">{specs.storage}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Особенности</h3>
                  <p className="text-sm text-muted-foreground">{specs.features.join(", ")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 17 — хит продаж 2025 года в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              <strong>Купить iPhone 17 в Казани</strong> по лучшей цене можно в магазине ЭПЛ-КОЛЛЕКЦИЯ. 
              Это отличный выбор для тех, кто хочет получить все преимущества новейшего iPhone 
              по доступной цене.
            </p>
            <p>
              iPhone 17 получил новый чип A19, изготовленный по 3-нм техпроцессу. Это обеспечивает 
              высокую производительность в играх и приложениях при отличной автономности.
            </p>
            <p>
              Камера 48 Мп с поддержкой ProRAW позволяет снимать фото студийного качества. 
              Dynamic Island делает взаимодействие со смартфоном интуитивно понятным.
            </p>
            <p>
              В нашем магазине <strong>iPhone 17 доступен в рассрочку 0%</strong> без переплаты. 
              Также вы можете воспользоваться Trade-in и получить скидку до 70% от стоимости 
              старого устройства.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 17?</h2>
              <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in и выберите удобный способ оплаты</p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/#calculator">Перейти в калькулятор</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "iPhone 17",
          "image": "https://apple-collecty.ru/iphone-17.webp",
          "description": "iPhone 17 с чипом A19 и камерой 48MP",
          "brand": { "@type": "Brand", "name": "Apple" },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "64500",
            "highPrice": "85800",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" }
          }
        })}
      </script>
    </>
  );
};

export default IPhone17Page;
