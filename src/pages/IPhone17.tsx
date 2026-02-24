import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17 from "@/assets/iphone-17.webp";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";

const IPhone17Page = () => {
  const specs = {
    display: '6.1" Super Retina XDR OLED, 60Hz',
    chip: "A19 (3nm)",
    camera: "48MP + 12MP широкоугольная",
    battery: "До 22 часов видео",
    storage: "128GB / 256GB / 512GB",
    features: ["Dynamic Island", "USB-C", "Алюминиевый корпус", "5G", "Face ID", "Ceramic Shield"],
  };

  const prices = { "128GB": 64500, "256GB": 73000, "512GB": 85800 };

  const reviews = [
    { name: "Ильнар", text: "iPhone 17 за 64 500 — это подарок! В М.Видео такая же модель стоит на 15 тысяч дороже. Доставили в Ново-Савиновский район за час.", rating: 5, date: "Февраль 2026" },
    { name: "Алина", text: "Первый айфон для дочки. Качество камеры 48MP потрясающее! Оформили рассрочку без проблем, платим по 6 450 в месяц.", rating: 5, date: "Январь 2026" },
    { name: "Тимур", text: "Сдал старый Xiaomi по Trade-in и получил хорошую скидку. iPhone 17 работает идеально, батарея держит весь день.", rating: 5, date: "Декабрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Air", path: "/iphone-17-air", label: "Самый тонкий iPhone" },
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Pro-камера и титан" },
    { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", label: "Максимальная мощность" },
    { name: "iPhone 16", path: "/iphone-16", label: "Ещё выгоднее" },
    { name: "iPhone 16 Pro", path: "/iphone-16-pro", label: "Pro прошлого года" },
  ];

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
            <li><Link to="/" className="hover:text-primary">Главная</Link></li><li>/</li>
            <li className="text-foreground">iPhone 17</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" />Вернуться в каталог</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground z-10">Хит продаж</Badge>
              <img src={iPhone17} alt="Купить iPhone 17 в Казани недорого - магазин ЭПЛ-КОЛЛЕКЦИЯ" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 17 в Казани — купить недорого</h1>
              <p className="text-xl text-muted-foreground mb-6">Новый iPhone с чипом A19 и камерой профессионального уровня</p>
              <div className="space-y-3 mb-8">
                {Object.entries(prices).map(([storage, price]) => (
                  <Card key={storage} className="border-primary/20"><CardContent className="flex items-center justify-between p-4"><span className="font-medium">{storage}</span><div className="text-right"><div className="text-2xl font-bold text-primary">{price.toLocaleString("ru-RU")} ₽</div><div className="text-sm text-muted-foreground">от {Math.round(price / 10).toLocaleString("ru-RU")} ₽/мес</div></div></CardContent></Card>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="flex-1"><Link to="/#calculator">Рассчитать стоимость</Link></Button>
                <Button asChild variant="outline" size="lg" className="flex-1"><a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer">Написать в Telegram</a></Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Рассрочка 0%", "Trade-in до 70%", "Гарантия до 1 года", "Доставка бесплатно"].map((b) => (
                  <div key={b} className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /><span className="text-sm">{b}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 17</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{ icon: Monitor, title: "Дисплей", value: specs.display }, { icon: Cpu, title: "Процессор", value: specs.chip }, { icon: Camera, title: "Камера", value: specs.camera }, { icon: Battery, title: "Батарея", value: specs.battery }, { icon: Smartphone, title: "Память", value: specs.storage }, { icon: Shield, title: "Особенности", value: specs.features.join(", ") }].map(({ icon: Icon, title, value }) => (
              <Card key={title}><CardContent className="p-6 flex items-start gap-4"><Icon className="w-8 h-8 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 17 — хит продаж 2025 года в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 17 в Казани</strong> по лучшей цене можно в магазине ЭПЛ-КОЛЛЕКЦИЯ. Это отличный выбор для тех, кто хочет получить все преимущества новейшего iPhone по доступной цене.</p>
            <p>iPhone 17 получил новый чип A19, изготовленный по 3-нм техпроцессу. Это обеспечивает высокую производительность в играх и приложениях при отличной автономности.</p>
            <p>Камера 48 Мп с поддержкой ProRAW позволяет снимать фото студийного качества. Dynamic Island делает взаимодействие со смартфоном интуитивно понятным.</p>
            <p>В нашем магазине <strong>iPhone 17 доступен в рассрочку 0%</strong> без переплаты. Также вы можете воспользоваться Trade-in и получить скидку до 70% от стоимости старого устройства.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 17" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">iPhone 17 в Казани — выгоднее, чем в сетевых магазинах</h3>
              <p>Цена iPhone 17 в ЭПЛ-КОЛЛЕКЦИЯ начинается от 64 500 ₽ — это на 15–25% ниже, чем в М.Видео, DNS или Связном. При покупке на Авито вы рискуете получить б/у аппарат без гарантии по цене нового.</p>
              <p>У нас каждый iPhone 17 проходит полную диагностику. <strong>Гарантия на новые — 1 год, на б/у — 60 дней.</strong> Оплата при получении после проверки устройства.</p>
              <p><strong>Бесплатная доставка</strong> по всем районам Казани: Вахитовский (метро Площадь Тукая), Ново-Савиновский (Ямашева), Приволжский (Азино), Московский, Авиастроительный, Кировский, Советский.</p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 17 или iPhone 17 Air?</h3>
              <p>iPhone 17 — компактнее (6.1") и доступнее. <Link to="/iphone-17-air" className="text-primary hover:underline">iPhone 17 Air</Link> — больше экран (6.6") и ультратонкий дизайн. Оба работают на чипе A19.</p>
            </>
          }
        />

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground"><CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 17?</h2>
            <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in</p>
            <Button asChild size="lg" variant="secondary"><Link to="/#calculator">Перейти в калькулятор</Link></Button>
          </CardContent></Card>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org", "@graph": [
            { "@type": "Product", "name": "iPhone 17", "image": "https://apple-collecty.ru/iphone-17.webp",
              "description": "iPhone 17 в Казани. Чип A19, камера 48MP. Рассрочка 0%, гарантия.",
              "brand": { "@type": "Brand", "name": "Apple" },
              "offers": { "@type": "AggregateOffer", "lowPrice": "64500", "highPrice": "85800", "priceCurrency": "RUB", "offerCount": "3", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "52", "bestRating": "5" },
              "review": [
                { "@type": "Review", "author": { "@type": "Person", "name": "Ильнар" }, "datePublished": "2026-02-08", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "iPhone 17 за 64 500 — это подарок! В М.Видео такая же модель дороже на 15 тысяч." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Алина" }, "datePublished": "2026-01-15", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Оформили рассрочку без проблем, платим по 6 450 в месяц." }
              ]
            },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://apple-collecty.ru/" },
              { "@type": "ListItem", "position": 2, "name": "iPhone 17", "item": "https://apple-collecty.ru/iphone-17" }
            ]}
          ]
        })}
      </script>
    </>
  );
};

export default IPhone17Page;
