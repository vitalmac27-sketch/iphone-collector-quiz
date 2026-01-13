import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17ProMax from "@/assets/iphone-17-pro-max.avif";

const IPhone17ProMax = () => {
  const specs = {
    display: '6.9" Super Retina XDR OLED, ProMotion 120Hz',
    chip: "A19 Pro (3nm)",
    camera: "48MP + 12MP + 12MP, 5x оптический зум",
    battery: "До 33 часов видео",
    storage: "256GB / 512GB / 1TB",
    features: ["Dynamic Island", "USB-C", "Титановый корпус", "Action Button", "5G", "Face ID"],
  };

  // Цены -15%
  const prices = {
    "256GB": 101000,
    "512GB": 113800,
    "1TB": 130800,
  };

  return (
    <>
      <Helmet>
        <title>Купить iPhone 17 Pro Max в Казани | Цена от 101 000 ₽ - ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="iPhone 17 Pro Max в Казани по лучшей цене. Рассрочка 0%, Trade-in, гарантия. A19 Pro, камера 48MP, титановый корпус. Доставка по Казани бесплатно!" />
        <meta name="keywords" content="iPhone 17 Pro Max Казань, купить айфон 17 про макс, iPhone 17 Pro Max цена, айфон 17 про макс казань" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-17-pro-max" />
        <meta property="og:title" content="Купить iPhone 17 Pro Max в Казани - ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 17 Pro Max в Казани. Рассрочка 0%, Trade-in, гарантия 1 год." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-17-pro-max" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li>
            <li>/</li>
            <li className="text-foreground">iPhone 17 Pro Max</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Вернуться в каталог
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">
                Флагман 2025
              </Badge>
              <img
                src={iPhone17ProMax}
                alt="Купить iPhone 17 Pro Max в Казани - ЭПЛ-КОЛЛЕКЦИЯ магазин Apple"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Купить iPhone 17 Pro Max в Казани
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Самый мощный iPhone с чипом A19 Pro и лучшей камерой в истории Apple
              </p>

              {/* Prices */}
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

              {/* Benefits */}
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

        {/* Specs */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 17 Pro Max</h2>
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

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 17 Pro Max — флагман Apple 2025 года в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              <strong>Купить iPhone 17 Pro Max в Казани</strong> можно в магазине ЭПЛ-КОЛЛЕКЦИЯ по лучшей цене. 
              Это самый мощный смартфон Apple с революционным чипом A19 Pro, изготовленным по 3-нм техпроцессу, 
              который обеспечивает невероятную производительность и энергоэффективность.
            </p>
            <p>
              iPhone 17 Pro Max получил огромный 6.9-дюймовый Super Retina XDR дисплей с технологией ProMotion 
              и частотой обновления 120 Гц. Титановый корпус делает смартфон одновременно лёгким и прочным.
            </p>
            <p>
              Профессиональная система камер с основным модулем 48 Мп и 5-кратным оптическим зумом позволяет 
              снимать фото и видео студийного качества. Батарея обеспечивает до 33 часов воспроизведения видео.
            </p>
            <p>
              В нашем магазине в Казани вы можете <strong>купить iPhone 17 Pro Max в рассрочку 0%</strong>, 
              воспользоваться Trade-in со скидкой до 70% от стоимости старого устройства, а также получить 
              бесплатную доставку по городу.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 17 Pro Max?</h2>
              <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in и выберите удобный способ оплаты</p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/#calculator">Перейти в калькулятор</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "iPhone 17 Pro Max",
          "image": "https://apple-collecty.ru/iphone-17-pro-max.avif",
          "description": "iPhone 17 Pro Max с чипом A19 Pro, камерой 48MP и титановым корпусом",
          "brand": { "@type": "Brand", "name": "Apple" },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "101000",
            "highPrice": "130800",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" }
          }
        })}
      </script>
    </>
  );
};

export default IPhone17ProMax;
