import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone16ProMax from "@/assets/iphone-16-pro-max.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";

const IPhone16ProMaxPage = () => {
  const specs = {
    display: '6.9" Super Retina XDR OLED, ProMotion 120Hz',
    chip: "A18 Pro (3nm)",
    camera: "48MP + 12MP + 12MP, 5x оптический зум",
    battery: "До 33 часов видео",
    storage: "256GB / 512GB / 1TB",
    features: ["Dynamic Island", "USB-C", "Титановый корпус", "Action Button", "5G", "Face ID"],
  };

  const prices = { "256GB": 96800, "512GB": 109600, "1TB": 126600 };

  const reviews = [
    { name: "Руслан", text: "Взял iPhone 16 Pro Max вместо 17-го — сэкономил 40 тысяч! Разница в производительности минимальная, а камера такая же крутая.", rating: 5, date: "Февраль 2026" },
    { name: "Гульнара", text: "Оформила рассрочку 0% за 5 минут, доставили на Декабристов через 2 часа. Телефон в идеальном состоянии!", rating: 5, date: "Январь 2026" },
    { name: "Максим", text: "Уже второй iPhone покупаю здесь. Цены реально ниже чем везде, и гарантия настоящая, не на словах.", rating: 5, date: "Январь 2026" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", label: "Новейший флагман" },
    { name: "iPhone 16 Pro", path: "/iphone-16-pro", label: "Компактный Pro" },
    { name: "iPhone 16", path: "/iphone-16", label: "Лучшая цена" },
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Компактный 2025" },
    { name: "iPhone 17", path: "/iphone-17", label: "Хит продаж" },
  ];

  return (
    <>
      <Helmet>
        <title>iPhone 16 Pro Max Казань | Лучшая цена — ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="Купить iPhone 16 Pro Max в Казани ✅ A18 Pro, титан, камера 48MP. Гарантия на новые 1 год, на б/у 60 дней. Рассрочка без переплат, бесплатная доставка!" />
        <meta name="keywords" content="iPhone 16 Pro Max Казань, купить айфон 16 про макс, iPhone 16 Pro Max цена, айфон 16 про макс казань недорого" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-16-pro-max" />
        <meta property="og:title" content="iPhone 16 Pro Max в Казани — ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 16 Pro Max в Казани. A18 Pro, титан. Рассрочка 0%, гарантия." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-16-pro-max" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li><li>/</li>
            <li className="text-foreground">iPhone 16 Pro Max</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" />Вернуться в каталог</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground z-10">Популярный</Badge>
              <img src={iPhone16ProMax} alt="Купить iPhone 16 Pro Max в Казани - ЭПЛ-КОЛЛЕКЦИЯ магазин Apple" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 16 Pro Max в Казани — лучшая цена, гарантия</h1>
              <p className="text-xl text-muted-foreground mb-6">Флагман 2024 года с чипом A18 Pro и профессиональной камерой</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 16 Pro Max</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{ icon: Monitor, title: "Дисплей", value: specs.display }, { icon: Cpu, title: "Процессор", value: specs.chip }, { icon: Camera, title: "Камера", value: specs.camera }, { icon: Battery, title: "Батарея", value: specs.battery }, { icon: Smartphone, title: "Память", value: specs.storage }, { icon: Shield, title: "Особенности", value: specs.features.join(", ") }].map(({ icon: Icon, title, value }) => (
              <Card key={title}><CardContent className="p-6 flex items-start gap-4"><Icon className="w-8 h-8 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 16 Pro Max — выгодная альтернатива в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 16 Pro Max в Казани</strong> — отличное решение для тех, кто хочет получить флагманский iPhone по более выгодной цене. В магазине ЭПЛ-КОЛЛЕКЦИЯ представлены все варианты памяти.</p>
            <p>iPhone 16 Pro Max оснащён мощным чипом A18 Pro с 6-ядерным GPU и Neural Engine. Огромный 6.9-дюймовый дисплей с ProMotion идеален для просмотра контента и игр.</p>
            <p>Профессиональная система из трёх камер с основным модулем 48 Мп и 5-кратным оптическим зумом позволяет снимать на уровне профессиональной техники.</p>
            <p><strong>iPhone 16 Pro Max в рассрочку 0%</strong> без переплаты — выгодный способ приобрести флагман. Также доступен Trade-in со скидкой до 70%.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 16 Pro Max" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">iPhone 16 Pro Max — умная экономия в 2026 году</h3>
              <p>С выходом iPhone 17 цена на <strong>iPhone 16 Pro Max</strong> стала ещё привлекательнее. При этом вы получаете 95% возможностей нового поколения: тот же размер экрана, похожая камера, отличная автономность.</p>
              <p>В ЭПЛ-КОЛЛЕКЦИЯ iPhone 16 Pro Max стоит от 96 800 ₽ — это на 20–30% дешевле, чем <Link to="/iphone-17-pro-max" className="text-primary hover:underline">iPhone 17 Pro Max</Link>. Идеальный выбор для тех, кто хочет флагман без переплаты.</p>
              <p><strong>Бесплатная доставка</strong> по всей Казани. <strong>Гарантия:</strong> на новые — 1 год, на б/у — 60 дней. Проверка при получении.</p>
            </>
          }
        />

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground"><CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 16 Pro Max?</h2>
            <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in</p>
            <Button asChild size="lg" variant="secondary"><Link to="/#calculator">Перейти в калькулятор</Link></Button>
          </CardContent></Card>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org", "@graph": [
            { "@type": "Product", "name": "iPhone 16 Pro Max", "image": "https://apple-collecty.ru/iphone-16-pro-max.avif",
              "description": "iPhone 16 Pro Max в Казани. A18 Pro, титан, камера 48MP. Рассрочка 0%, гарантия.",
              "brand": { "@type": "Brand", "name": "Apple" },
              "offers": { "@type": "AggregateOffer", "lowPrice": "96800", "highPrice": "126600", "priceCurrency": "RUB", "offerCount": "3", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "63", "bestRating": "5" },
              "review": [
                { "@type": "Review", "author": { "@type": "Person", "name": "Руслан" }, "datePublished": "2026-02-01", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Взял 16 Pro Max вместо 17-го — сэкономил 40 тысяч! Разница минимальная." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Гульнара" }, "datePublished": "2026-01-12", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Рассрочка 0% за 5 минут, доставили на Декабристов через 2 часа." }
              ]
            },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://apple-collecty.ru/" },
              { "@type": "ListItem", "position": 2, "name": "iPhone 16 Pro Max", "item": "https://apple-collecty.ru/iphone-16-pro-max" }
            ]}
          ]
        })}
      </script>
    </>
  );
};

export default IPhone16ProMaxPage;
