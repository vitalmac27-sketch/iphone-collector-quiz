import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17ProMax from "@/assets/iphone-17-pro-max.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";

const IPhone17ProMaxPage = () => {
  const specs = {
    display: '6.9" Super Retina XDR OLED, ProMotion 120Hz',
    chip: "A19 Pro (3nm)",
    camera: "48MP + 12MP + 12MP, 5x оптический зум",
    battery: "До 33 часов видео",
    storage: "256GB / 512GB / 1TB",
    features: ["Dynamic Island", "USB-C", "Титановый корпус", "Action Button", "5G", "Face ID"],
  };

  const prices = {
    "256GB": 101000,
    "512GB": 113800,
    "1TB": 130800,
  };

  const reviews = [
    { name: "Алексей", text: "Купил iPhone 17 Pro Max 256GB — доставили в Азино за 2 часа. Аккумулятор держит весь день, камера просто космос! Рассрочку оформили за 5 минут.", rating: 5, date: "Февраль 2026" },
    { name: "Динара", text: "Перешла с Samsung на iPhone 17 Pro Max по Trade-in. Скидка получилась отличная, сэкономила больше 30%. Титановый корпус выглядит шикарно!", rating: 5, date: "Январь 2026" },
    { name: "Ринат", text: "Брал для работы — камера 48MP снимает как профессиональная. Заказал с доставкой на Площадь Тукая, привезли через час. Магазин проверенный!", rating: 5, date: "Декабрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Компактный Pro-флагман" },
    { name: "iPhone 17 Air", path: "/iphone-17-air", label: "Самый тонкий iPhone" },
    { name: "iPhone 17", path: "/iphone-17", label: "Хит продаж 2025" },
    { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max", label: "Выгодная альтернатива" },
    { name: "iPhone 16 Pro", path: "/iphone-16-pro", label: "Компактный Pro" },
  ];

  return (
    <>
      <Helmet>
        <title>Купить iPhone 17 Pro Max в Казани недорого | ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="iPhone 17 Pro Max в Казани ✅ A19 Pro, камера 48MP, титан. Гарантия на новые 1 год, на б/у 60 дней. Рассрочка 0%, Trade-in, бесплатная доставка!" />
        <meta name="keywords" content="iPhone 17 Pro Max Казань, купить айфон 17 про макс, iPhone 17 Pro Max цена, айфон 17 про макс казань" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-17-pro-max" />
        <meta property="og:title" content="iPhone 17 Pro Max в Казани — ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 17 Pro Max в Казани. A19 Pro, титан. Гарантия, рассрочка 0%, Trade-in." />
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

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                iPhone 17 Pro Max в Казани — флагман с гарантией
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

              <div className="grid grid-cols-2 gap-4">
                {["Рассрочка 0%", "Trade-in до 70%", "Гарантия до 1 года", "Доставка бесплатно"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
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
            {[
              { icon: Monitor, title: "Дисплей", value: specs.display },
              { icon: Cpu, title: "Процессор", value: specs.chip },
              { icon: Camera, title: "Камера", value: specs.camera },
              { icon: Battery, title: "Батарея", value: specs.battery },
              { icon: Smartphone, title: "Память", value: specs.storage },
              { icon: Shield, title: "Особенности", value: specs.features.join(", ") },
            ].map(({ icon: Icon, title, value }) => (
              <Card key={title}>
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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

        {/* Extended content + Reviews + Cross-links */}
        <ModelPageSeoBlock
          modelName="iPhone 17 Pro Max"
          reviews={reviews}
          relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">Почему iPhone 17 Pro Max стоит покупать именно у нас?</h3>
              <p>
                В отличие от площадок вроде Авито или крупных сетей вроде М.Видео, в <strong>ЭПЛ-КОЛЛЕКЦИЯ</strong> вы получаете 
                персональный подход: мы подберём оптимальную конфигурацию, оформим рассрочку 0% за 5 минут и доставим iPhone 17 Pro Max 
                бесплатно в любой район Казани — Вахитовский, Ново-Савиновский, Приволжский (Азино), Московский или Авиастроительный.
              </p>
              <p>
                На Авито вы рискуете купить восстановленный аппарат без гарантии. В М.Видео и DNS цены выше на 15–25%. 
                У нас — <strong>оригинальный iPhone 17 Pro Max с гарантией на новые 1 год, на б/у 60 дней</strong>, проверка при получении 
                и возможность отказаться от покупки, если что-то не устроит.
              </p>
              <p>
                Мы работаем в Казани более 3 лет, обслужили 2000+ клиентов и имеем рейтинг 5.0 из 5 на основе 315+ отзывов. 
                Наш магазин находится по адресу <strong>ул. Сибгата Хакима 40а, Офис 7</strong> (Ново-Савиновский район), 
                работаем ежедневно с 13:00 до 20:00.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 17 Pro Max vs iPhone 16 Pro Max — что выбрать?</h3>
              <p>
                iPhone 17 Pro Max получил обновлённый чип A19 Pro (прирост производительности ~20%), улучшенную систему камер 
                и увеличенное время автономной работы. Если вам важна максимальная производительность — выбирайте 17 Pro Max. 
                Если хотите сэкономить — <Link to="/iphone-16-pro-max" className="text-primary hover:underline">iPhone 16 Pro Max</Link> по-прежнему 
                отличный выбор с похожими возможностями.
              </p>
              <p>
                <strong>Бесплатная доставка iPhone 17 Pro Max по всей Казани:</strong> Вахитовский район (метро Площадь Тукая, Баумана), 
                Ново-Савиновский (Ямашева, Чуйкова), Приволжский (Азино, Проспект Победы), Московский (Губкина), 
                Авиастроительный (Королёва), Кировский, Советский районы. Доставка в пригороды (Высокая Гора, Лаишево) — уточняйте у менеджера.
              </p>
            </>
          }
        />

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

      {/* Enhanced Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "iPhone 17 Pro Max",
              "image": "https://apple-collecty.ru/iphone-17-pro-max.avif",
              "description": "Купить iPhone 17 Pro Max в Казани. Чип A19 Pro, камера 48MP, титановый корпус. Гарантия, рассрочка 0%.",
              "brand": { "@type": "Brand", "name": "Apple" },
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "101000",
                "highPrice": "130800",
                "priceCurrency": "RUB",
                "offerCount": "3",
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ", "url": "https://apple-collecty.ru" }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "47",
                "bestRating": "5"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Алексей" },
                  "datePublished": "2026-02-10",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Купил iPhone 17 Pro Max 256GB — доставили в Азино за 2 часа. Камера просто космос!"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Динара" },
                  "datePublished": "2026-01-20",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Перешла с Samsung по Trade-in. Скидка отличная, титановый корпус шикарный!"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ринат" },
                  "datePublished": "2025-12-15",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Брал для работы — камера 48MP снимает как профессиональная. Магазин проверенный!"
                }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://apple-collecty.ru/" },
                { "@type": "ListItem", "position": 2, "name": "iPhone 17 Pro Max", "item": "https://apple-collecty.ru/iphone-17-pro-max" }
              ]
            }
          ]
        })}
      </script>
    </>
  );
};

export default IPhone17ProMaxPage;
