import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone16Pro from "@/assets/iphone-16-pro-new.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";

const IPhone16ProPage = () => {
  const specs = {
    display: '6.3" Super Retina XDR OLED, ProMotion 120Hz',
    chip: "A18 Pro (3nm)",
    camera: "48MP + 12MP + 12MP, 5x оптический зум",
    battery: "До 27 часов видео",
    storage: "128GB / 256GB / 512GB / 1TB",
    features: ["Dynamic Island", "USB-C", "Титановый корпус", "Action Button", "5G", "Face ID"],
  };

  const prices = { "256GB": 80700, "512GB": 93400, "1TB": 110400 };

  const reviews = [
    { name: "Азат", text: "iPhone 16 Pro — лучший компактный флагман! Камера с 5x зумом снимает потрясающе. Доставили на Губкина за час.", rating: 5, date: "Февраль 2026" },
    { name: "Наталья", text: "Сдала iPhone 13 Pro по Trade-in и доплатила совсем немного. Титановый корпус выглядит премиально!", rating: 5, date: "Январь 2026" },
    { name: "Олег", text: "Третий раз покупаю в ЭПЛ-КОЛЛЕКЦИЯ. Всегда отличные цены и честная гарантия. Рекомендую всем!", rating: 5, date: "Декабрь 2025" },
    { name: "Ляйсан", text: "Компактный Pro — идеален для девушек! Помещается в любой карман, а камера как у Max. Доставка в Советский район бесплатная.", rating: 5, date: "Февраль 2026" },
    { name: "Ренат", text: "ProMotion 120Hz — после этого на 60Hz возвращаться невозможно. Экран плавный как масло. Игры идут отлично.", rating: 5, date: "Январь 2026" },
    { name: "Мария", text: "Снимаю видео для TikTok — Cinematic Mode на 16 Pro это что-то невероятное. Подписчики в восторге от качества!", rating: 5, date: "Декабрь 2025" },
    { name: "Инсаф", text: "Оформил рассрочку без процентов — 8 070 в месяц. Удобнее, чем копить. Телефон получил в тот же день.", rating: 5, date: "Ноябрь 2025" },
    { name: "Виктория", text: "Долго выбирала между Pro и Pro Max. Взяла Pro — не жалею! Легче, компактнее, а возможности те же.", rating: 5, date: "Ноябрь 2025" },
    { name: "Салават", text: "Работаю курьером — GPS и карты на 16 Pro работают отлично. Батарея держит весь день. Доставка на Чуйкова бесплатная.", rating: 5, date: "Октябрь 2025" },
    { name: "Алёна", text: "Перешла с Huawei — разница в камере колоссальная! Night Mode снимает ночью как днём. Очень довольна покупкой.", rating: 5, date: "Октябрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max", label: "Большой экран" },
    { name: "iPhone 16", path: "/iphone-16", label: "Ещё выгоднее" },
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Новейший Pro" },
    { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", label: "Максимум мощности" },
    { name: "iPhone 17 Air", path: "/iphone-17-air", label: "Самый тонкий" },
  ];

  return (
    <>
      <Helmet>
        <title>Купить iPhone 16 Pro в Казани | С Trade-in — ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="iPhone 16 Pro в Казани ✅ A18 Pro, титан, 5x зум. Гарантия на новые 1 год, на б/у 60 дней. Trade-in до 30% выгоды, рассрочка 0%" />
        <meta name="keywords" content="iPhone 16 Pro Казань, купить айфон 16 про, iPhone 16 Pro цена, айфон 16 про казань недорого" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-16-pro" />
        <meta property="og:title" content="iPhone 16 Pro в Казани — ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 16 Pro в Казани. A18 Pro, титан. Рассрочка 0%, Trade-in, гарантия." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-16-pro" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li><li>/</li>
            <li className="text-foreground">iPhone 16 Pro</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" />Вернуться в каталог</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground z-10">Выбор покупателей</Badge>
              <img src={iPhone16Pro} alt="Купить iPhone 16 Pro в Казани недорого - ЭПЛ-КОЛЛЕКЦИЯ" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 16 Pro в Казани — купить с Trade-in</h1>
              <p className="text-xl text-muted-foreground mb-6">Компактный Pro с мощью A18 Pro в титановом корпусе</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 16 Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{ icon: Monitor, title: "Дисплей", value: specs.display }, { icon: Cpu, title: "Процессор", value: specs.chip }, { icon: Camera, title: "Камера", value: specs.camera }, { icon: Battery, title: "Батарея", value: specs.battery }, { icon: Smartphone, title: "Память", value: specs.storage }, { icon: Shield, title: "Особенности", value: specs.features.join(", ") }].map(({ icon: Icon, title, value }) => (
              <Card key={title}><CardContent className="p-6 flex items-start gap-4"><Icon className="w-8 h-8 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 16 Pro — компактный флагман в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 16 Pro в Казани</strong> — идеальный выбор для ценителей компактных флагманов. В магазине ЭПЛ-КОЛЛЕКЦИЯ доступны все цвета и конфигурации.</p>
            <p>iPhone 16 Pro сочетает мощь чипа A18 Pro с компактным 6.3-дюймовым дисплеем. Титановый корпус обеспечивает премиальный вид и отличную прочность.</p>
            <p>Система камер с 5-кратным оптическим зумом позволяет снимать профессиональные фото и видео. Action Button даёт быстрый доступ к камере и другим функциям.</p>
            <p><strong>iPhone 16 Pro в рассрочку 0%</strong> — отличная возможность приобрести флагман без переплаты. Trade-in позволяет сэкономить до 70% при сдаче старого устройства.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 16 Pro" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">iPhone 16 Pro — оптимальный Pro для большинства</h3>
              <p>Если вам не нужен огромный экран 6.9", <strong>iPhone 16 Pro</strong> — идеальный выбор. Те же Pro-возможности (A18 Pro, 5x зум, титан) в компактном корпусе, который удобно держать одной рукой.</p>
              <p>В ЭПЛ-КОЛЛЕКЦИЯ iPhone 16 Pro от 80 700 ₽. Для сравнения: <Link to="/iphone-17-pro" className="text-primary hover:underline">iPhone 17 Pro</Link> от 88 700 ₽. Разница в производительности минимальна.</p>
              <p><strong>Гарантия:</strong> на новые — 1 год, на б/у — 60 дней. Бесплатная доставка по всей Казани в день заказа.</p>
            </>
          }
        />

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground"><CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 16 Pro?</h2>
            <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in</p>
            <Button asChild size="lg" variant="secondary"><Link to="/#calculator">Перейти в калькулятор</Link></Button>
          </CardContent></Card>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org", "@graph": [
            { "@type": "Product", "name": "iPhone 16 Pro", "image": "https://apple-collecty.ru/iphone-16-pro.avif",
              "description": "iPhone 16 Pro в Казани. A18 Pro, титан, 5x зум. Рассрочка 0%, гарантия.",
              "brand": { "@type": "Brand", "name": "Apple" },
              "offers": { "@type": "AggregateOffer", "lowPrice": "80700", "highPrice": "110400", "priceCurrency": "RUB", "offerCount": "3", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "41", "bestRating": "5" },
              "review": [
                { "@type": "Review", "author": { "@type": "Person", "name": "Азат" }, "datePublished": "2026-02-03", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Лучший компактный флагман! Камера с 5x зумом снимает потрясающе." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Наталья" }, "datePublished": "2026-01-10", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Сдала iPhone 13 Pro по Trade-in и доплатила совсем немного." }
              ]
            },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://apple-collecty.ru/" },
              { "@type": "ListItem", "position": 2, "name": "iPhone 16 Pro", "item": "https://apple-collecty.ru/iphone-16-pro" }
            ]}
          ]
        })}
      </script>
    </>
  );
};

export default IPhone16ProPage;
