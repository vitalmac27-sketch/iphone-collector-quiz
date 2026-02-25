import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone16 from "@/assets/iphone-16.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";

const IPhone16Page = () => {
  const specs = {
    display: '6.1" Super Retina XDR OLED, 60Hz',
    chip: "A18 (3nm)",
    camera: "48MP + 12MP широкоугольная",
    battery: "До 22 часов видео",
    storage: "128GB / 256GB / 512GB",
    features: ["Dynamic Island", "USB-C", "Алюминиевый корпус", "Action Button", "5G", "Face ID"],
  };

  const prices = { "128GB": 56400, "256GB": 65000, "512GB": 77700 };

  const reviews = [
    { name: "Эльвира", text: "iPhone 16 за 56 400 — дешевле нигде не нашла! Камера 48MP снимает отлично, батарея держит весь день. Доставили на Проспект Победы бесплатно.", rating: 5, date: "Февраль 2026" },
    { name: "Рустам", text: "Покупал сыну на учёбу. Рассрочка 0% — платим всего 5 640 в месяц. Action Button — очень удобная штука!", rating: 5, date: "Январь 2026" },
    { name: "Аделина", text: "Перешла с Android — и в восторге! iPhone 16 работает плавно и быстро. Спасибо ЭПЛ-КОЛЛЕКЦИЯ за консультацию и помощь с настройкой.", rating: 5, date: "Декабрь 2025" },
    { name: "Ильшат", text: "Лучшая цена в Казани, проверял везде. На Авито дешевле, но без гарантии — рисковать не стал. Доставка на Горьковское шоссе бесплатная.", rating: 5, date: "Февраль 2026" },
    { name: "Лейсан", text: "Камера 48MP — снимаю для Инстаграма, качество потрясающее! Dynamic Island очень удобна для навигации и музыки.", rating: 5, date: "Январь 2026" },
    { name: "Вадим", text: "iPhone 16 128GB за 56 400 — отличная точка входа в экосистему Apple. Работает быстро, интерфейс удобный.", rating: 5, date: "Декабрь 2025" },
    { name: "Нурия", text: "Подарок дочери на поступление в университет. Оформили рассрочку без процентов — очень выручило. Спасибо!", rating: 5, date: "Ноябрь 2025" },
    { name: "Ян", text: "Для игр iPhone 16 с A18 тянет всё на максималках. Genshin Impact, Call of Duty — без лагов вообще.", rating: 5, date: "Ноябрь 2025" },
    { name: "Фарида", text: "Второй раз покупаю здесь — первый был iPhone 14. Всегда отличный сервис и адекватные цены. Рекомендую!", rating: 5, date: "Октябрь 2025" },
    { name: "Константин", text: "USB-C наконец-то! Одним кабелем заряжаю всё. Action Button настроил на фонарик — удобно. Доставка быстрая.", rating: 5, date: "Октябрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 16 Pro", path: "/iphone-16-pro", label: "Pro-камера и титан" },
    { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max", label: "Максимальный экран" },
    { name: "iPhone 17", path: "/iphone-17", label: "Новое поколение" },
    { name: "iPhone 17 Air", path: "/iphone-17-air", label: "Самый тонкий" },
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Pro 2025 года" },
  ];

  return (
    <>
      <Helmet>
        <title>Купить iPhone 16 в Казани | Рассрочка 0% — ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="iPhone 16 в Казани ✅ Чип A18, камера 48MP, Action Button. Гарантия на новые 1 год, на б/у 60 дней. Рассрочка 0% на 10 мес, бесплатная доставка" />
        <meta name="keywords" content="iPhone 16 Казань, купить айфон 16, iPhone 16 цена, айфон 16 казань недорого" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-16" />
        <meta property="og:title" content="iPhone 16 в Казани — ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 16 в Казани. Рассрочка 0%, Trade-in, гарантия." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-16" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li><li>/</li>
            <li className="text-foreground">iPhone 16</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" />Вернуться в каталог</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">Лучшая цена</Badge>
              <img src={iPhone16} alt="Купить iPhone 16 в Казани недорого - магазин ЭПЛ-КОЛЛЕКЦИЯ Apple" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 16 в Казани — рассрочка 0%, гарантия</h1>
              <p className="text-xl text-muted-foreground mb-6">Современный iPhone с чипом A18 и Action Button</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 16</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{ icon: Monitor, title: "Дисплей", value: specs.display }, { icon: Cpu, title: "Процессор", value: specs.chip }, { icon: Camera, title: "Камера", value: specs.camera }, { icon: Battery, title: "Батарея", value: specs.battery }, { icon: Smartphone, title: "Память", value: specs.storage }, { icon: Shield, title: "Особенности", value: specs.features.join(", ") }].map(({ icon: Icon, title, value }) => (
              <Card key={title}><CardContent className="p-6 flex items-start gap-4"><Icon className="w-8 h-8 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 16 — лучшее соотношение цены и качества в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 16 в Казани</strong> — оптимальный выбор для тех, кто хочет современный iPhone с отличными характеристиками по разумной цене. В магазине ЭПЛ-КОЛЛЕКЦИЯ представлены все цвета и варианты памяти.</p>
            <p>iPhone 16 получил новый чип A18 с улучшенной энергоэффективностью и производительностью. Впервые в базовой модели появилась Action Button для быстрого доступа к функциям.</p>
            <p>Камера 48 Мп позволяет снимать детализированные фото и видео 4K Dolby Vision. Dynamic Island делает уведомления и взаимодействие более интуитивными.</p>
            <p><strong>iPhone 16 в рассрочку без переплаты</strong> — удобный способ приобрести смартфон. Также доступен Trade-in со скидкой до 70% и бесплатная доставка по Казани.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 16" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">iPhone 16 — самый доступный новый iPhone в Казани</h3>
              <p>iPhone 16 от 56 400 ₽ — это лучшая точка входа в экосистему Apple. В М.Видео, DNS и Связном аналогичная модель стоит на 10–20 тысяч дороже. На Авито вы рискуете купить б/у устройство без гарантии.</p>
              <p>В ЭПЛ-КОЛЛЕКЦИЯ — только оригинальные iPhone 16 с полной диагностикой. <strong>Гарантия на новые — 1 год, на б/у — 60 дней.</strong></p>
              <p><strong>Бесплатная доставка</strong> по всем районам Казани в день заказа. Оплата после проверки устройства при получении.</p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 16 или iPhone 17?</h3>
              <p><Link to="/iphone-17" className="text-primary hover:underline">iPhone 17</Link> получил чип A19 (на ~15% быстрее), но стоит от 64 500 ₽. Если бюджет ограничен — iPhone 16 даёт 90% возможностей за меньшие деньги.</p>
            </>
          }
        />

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground"><CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 16?</h2>
            <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in</p>
            <Button asChild size="lg" variant="secondary"><Link to="/#calculator">Перейти в калькулятор</Link></Button>
          </CardContent></Card>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org", "@graph": [
            { "@type": "Product", "name": "iPhone 16", "image": "https://apple-collecty.ru/iphone-16.avif",
              "description": "iPhone 16 в Казани. Чип A18, камера 48MP, Action Button. Рассрочка 0%, гарантия.",
              "brand": { "@type": "Brand", "name": "Apple" },
              "offers": { "@type": "AggregateOffer", "lowPrice": "56400", "highPrice": "77700", "priceCurrency": "RUB", "offerCount": "3", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "58", "bestRating": "5" },
              "review": [
                { "@type": "Review", "author": { "@type": "Person", "name": "Эльвира" }, "datePublished": "2026-02-06", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "iPhone 16 за 56 400 — дешевле нигде не нашла!" },
                { "@type": "Review", "author": { "@type": "Person", "name": "Рустам" }, "datePublished": "2026-01-08", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Рассрочка 0% — платим всего 5 640 в месяц. Отлично!" }
              ]
            },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://apple-collecty.ru/" },
              { "@type": "ListItem", "position": 2, "name": "iPhone 16", "item": "https://apple-collecty.ru/iphone-16" }
            ]}
          ]
        })}
      </script>
    </>
  );
};

export default IPhone16Page;
