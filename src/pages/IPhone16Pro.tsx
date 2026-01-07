import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone16Pro from "@/assets/iphone-16-pro-new.avif";

const IPhone16ProPage = () => {
  const specs = {
    display: '6.3" Super Retina XDR OLED, ProMotion 120Hz',
    chip: "A18 Pro (3nm)",
    camera: "48MP + 12MP + 12MP, 5x оптический зум",
    battery: "До 27 часов видео",
    storage: "128GB / 256GB / 512GB / 1TB",
    features: ["Dynamic Island", "USB-C", "Титановый корпус", "Action Button", "5G", "Face ID"],
  };

  // Цены -15%
  const prices = {
    "256GB": 80700,
    "512GB": 93400,
    "1TB": 110400,
  };

  return (
    <>
      <Helmet>
        <title>Купить iPhone 16 Pro в Казани | Цена от 80 700 ₽ - ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="iPhone 16 Pro в Казани по лучшей цене. Рассрочка 0%, Trade-in, гарантия 1 год. Чип A18 Pro, камера 48MP, титан. Бесплатная доставка по Казани!" />
        <meta name="keywords" content="iPhone 16 Pro Казань, купить айфон 16 про, iPhone 16 Pro цена, айфон 16 про казань недорого" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-16-pro" />
        <meta property="og:title" content="Купить iPhone 16 Pro в Казани - ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 16 Pro в Казани. Рассрочка 0%, Trade-in, гарантия 1 год." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-16-pro" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li>
            <li>/</li>
            <li className="text-foreground">iPhone 16 Pro</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Вернуться в каталог
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-purple-500 text-white z-10">
                Выбор покупателей
              </Badge>
              <img
                src={iPhone16Pro}
                alt="Купить iPhone 16 Pro в Казани недорого - ЭПЛ-КОЛЛЕКЦИЯ"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Купить iPhone 16 Pro в Казани
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Компактный Pro с мощью A18 Pro в титановом корпусе
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
                  <a href="https://t.me/eplcollection" target="_blank" rel="noopener noreferrer">
                    Написать в Telegram
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Рассрочка 0%", "Trade-in до 70%", "Гарантия 1 год", "Доставка бесплатно"].map((benefit) => (
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
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 16 Pro</h2>
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
          <h2 className="text-2xl font-bold mb-6">iPhone 16 Pro — компактный флагман в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              <strong>Купить iPhone 16 Pro в Казани</strong> — идеальный выбор для ценителей 
              компактных флагманов. В магазине ЭПЛ-КОЛЛЕКЦИЯ доступны все цвета и конфигурации.
            </p>
            <p>
              iPhone 16 Pro сочетает мощь чипа A18 Pro с компактным 6.3-дюймовым дисплеем. 
              Титановый корпус обеспечивает премиальный вид и отличную прочность.
            </p>
            <p>
              Система камер с 5-кратным оптическим зумом позволяет снимать профессиональные 
              фото и видео. Action Button даёт быстрый доступ к камере и другим функциям.
            </p>
            <p>
              <strong>iPhone 16 Pro в рассрочку 0%</strong> — отличная возможность приобрести 
              флагман без переплаты. Trade-in позволяет сэкономить до 70% при сдаче старого устройства.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 16 Pro?</h2>
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
          "name": "iPhone 16 Pro",
          "image": "https://apple-collecty.ru/iphone-16-pro.avif",
          "description": "iPhone 16 Pro с чипом A18 Pro, камерой 48MP и титановым корпусом",
          "brand": { "@type": "Brand", "name": "Apple" },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "80700",
            "highPrice": "110400",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" }
          }
        })}
      </script>
    </>
  );
};

export default IPhone16ProPage;
