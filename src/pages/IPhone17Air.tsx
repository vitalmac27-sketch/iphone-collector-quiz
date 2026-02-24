import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17Air from "@/assets/iphone-17-air.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";

const IPhone17AirPage = () => {
  const specs = {
    display: '6.6" Super Retina XDR OLED, 60Hz',
    chip: "A19 (3nm)",
    camera: "48MP + 12MP, телеобъектив",
    battery: "До 26 часов видео",
    storage: "128GB / 256GB / 512GB",
    features: ["Самый тонкий iPhone", "Dynamic Island", "USB-C", "5G", "Face ID", "Алюминий"],
  };

  const prices = { "256GB": 80700, "512GB": 93400, "1TB": 110400 };

  const reviews = [
    { name: "Камилла", text: "iPhone 17 Air невероятно тонкий и лёгкий! Перешла с iPhone 13 — разница колоссальная. Доставили на Проспект Победы бесплатно.", rating: 5, date: "Февраль 2026" },
    { name: "Артур", text: "Взял Air вместо Pro — для моих задач хватает с головой, а дизайн просто вау! Рассрочка без переплат — отлично.", rating: 5, date: "Январь 2026" },
    { name: "Лилия", text: "Подарила мужу на день рождения. Он в восторге от толщины 5.5мм! Спасибо за быструю доставку и подарочную упаковку.", rating: 5, date: "Декабрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", label: "Максимальная мощность" },
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Pro-камера и титан" },
    { name: "iPhone 17", path: "/iphone-17", label: "Хит продаж 2025" },
    { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max", label: "Флагман 2024" },
    { name: "iPhone 16", path: "/iphone-16", label: "Лучшая цена" },
  ];

  return (
    <>
      <Helmet>
        <title>iPhone 17 Air Казань | Самый тонкий iPhone — ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="iPhone 17 Air в Казани ✅ Самый тонкий iPhone — 5.5мм, чип A19. Гарантия на новые 1 год, на б/у 60 дней. Рассрочка 0%, бесплатная доставка" />
        <meta name="keywords" content="iPhone 17 Air Казань, купить айфон 17 эйр, iPhone 17 Air цена, самый тонкий айфон казань" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-17-air" />
        <meta property="og:title" content="iPhone 17 Air в Казани — ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 17 Air — самый тонкий iPhone. Рассрочка 0%, Trade-in, гарантия." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-17-air" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li><li>/</li>
            <li className="text-foreground">iPhone 17 Air</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" />Вернуться в каталог</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-primary-foreground z-10">Ультратонкий</Badge>
              <img src={iPhone17Air} alt="Купить iPhone 17 Air в Казани - самый тонкий iPhone - ЭПЛ-КОЛЛЕКЦИЯ" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 17 Air в Казани — самый тонкий iPhone</h1>
              <p className="text-xl text-muted-foreground mb-6">Революционно тонкий iPhone толщиной всего 5.5 мм</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 17 Air</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{ icon: Monitor, title: "Дисплей", value: specs.display }, { icon: Cpu, title: "Процессор", value: specs.chip }, { icon: Camera, title: "Камера", value: specs.camera }, { icon: Battery, title: "Батарея", value: specs.battery }, { icon: Smartphone, title: "Память", value: specs.storage }, { icon: Shield, title: "Особенности", value: specs.features.join(", ") }].map(({ icon: Icon, title, value }) => (
              <Card key={title}><CardContent className="p-6 flex items-start gap-4"><Icon className="w-8 h-8 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 17 Air — самый тонкий iPhone в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 17 Air в Казани</strong> — это возможность получить революционный смартфон от Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ представлены все цвета и конфигурации памяти.</p>
            <p>iPhone 17 Air — самый тонкий iPhone в истории с толщиной всего 5.5 мм. Несмотря на ультратонкий дизайн, смартфон оснащён мощным чипом A19 и камерой 48 Мп.</p>
            <p>Большой 6.6-дюймовый дисплей Super Retina XDR обеспечивает яркую и чёткую картинку. Dynamic Island делает взаимодействие со смартфоном ещё удобнее.</p>
            <p><strong>iPhone 17 Air в рассрочку без переплаты</strong> — лучший способ приобрести ультратонкий iPhone. Доступен Trade-in и бесплатная доставка по Казани.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 17 Air" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">Почему iPhone 17 Air популярен в Казани?</h3>
              <p>iPhone 17 Air заменил линейку Plus и стал самым обсуждаемым iPhone 2025 года. Толщина 5.5 мм — это рекорд для смартфонов Apple. При этом производительность на уровне стандартного iPhone 17 благодаря чипу A19.</p>
              <p>В <strong>ЭПЛ-КОЛЛЕКЦИЯ</strong> цена на iPhone 17 Air ниже, чем в федеральных сетях, на 15–25%. Мы доставляем бесплатно по всей Казани: от центра (Вахитовский, Баумана) до отдалённых районов (Азино, Авиастроительный).</p>
              <p><strong>Гарантия на новые устройства — 1 год, на б/у — 60 дней.</strong> Каждый iPhone проходит полную диагностику перед продажей.</p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 17 Air или iPhone 17 Pro?</h3>
              <p>Air — для тех, кто ценит дизайн и лёгкость. Pro — для тех, кому нужна профессиональная камера с 5x зумом и ProMotion 120Hz. Оба варианта доступны в нашем магазине. Сравните: <Link to="/iphone-17-pro" className="text-primary hover:underline">iPhone 17 Pro</Link>.</p>
            </>
          }
        />

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground"><CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 17 Air?</h2>
            <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in</p>
            <Button asChild size="lg" variant="secondary"><Link to="/#calculator">Перейти в калькулятор</Link></Button>
          </CardContent></Card>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org", "@graph": [
            { "@type": "Product", "name": "iPhone 17 Air", "image": "https://apple-collecty.ru/iphone-17-air.avif",
              "description": "iPhone 17 Air — самый тонкий iPhone. Чип A19, камера 48MP. Купить в Казани.",
              "brand": { "@type": "Brand", "name": "Apple" },
              "offers": { "@type": "AggregateOffer", "lowPrice": "80700", "highPrice": "110400", "priceCurrency": "RUB", "offerCount": "3", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "29", "bestRating": "5" },
              "review": [
                { "@type": "Review", "author": { "@type": "Person", "name": "Камилла" }, "datePublished": "2026-02-12", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Невероятно тонкий и лёгкий! Доставили на Проспект Победы бесплатно." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Артур" }, "datePublished": "2026-01-22", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Взял Air вместо Pro — дизайн просто вау!" }
              ]
            },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://apple-collecty.ru/" },
              { "@type": "ListItem", "position": 2, "name": "iPhone 17 Air", "item": "https://apple-collecty.ru/iphone-17-air" }
            ]}
          ]
        })}
      </script>
    </>
  );
};

export default IPhone17AirPage;
