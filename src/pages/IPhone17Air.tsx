import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17Air from "@/assets/iphone-17-air.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";
import { localBusinessSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/schema";

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
    { name: "Рамиль", text: "5.5 мм — это фантастика! Легче и тоньше любого смартфона. При этом камера 48MP снимает отлично. Доставка на Декабристов — бесплатно.", rating: 5, date: "Февраль 2026" },
    { name: "Юлия", text: "Элегантный дизайн, все подруги спрашивают что за модель. A19 работает быстро, приложения открываются мгновенно.", rating: 5, date: "Январь 2026" },
    { name: "Тагир", text: "Сдал iPhone 15 по Trade-in — доплатил всего 30 тысяч за новейший Air. Выгодное предложение!", rating: 5, date: "Декабрь 2025" },
    { name: "Альбина", text: "Экран 6.6 дюймов яркий и чёткий. Для чтения и соцсетей — идеальный размер. Батарея на весь день.", rating: 5, date: "Ноябрь 2025" },
    { name: "Денис", text: "Работаю в IT — нужен лёгкий телефон, который всегда с собой. Air весит как перо, но работает как флагман.", rating: 5, date: "Ноябрь 2025" },
    { name: "Эльмира", text: "Рассрочка 0% на 10 месяцев, платёж 8 070 ₽ — очень удобно. В М.Видео такой рассрочки нет.", rating: 5, date: "Октябрь 2025" },
    { name: "Руслан", text: "Купил жене и себе — оба довольны. Магазин дал скидку за двойной заказ. Сервис на высоте!", rating: 5, date: "Октябрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", label: "Максимальная мощность" },
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Pro-камера и титан" },
    { name: "iPhone 17", path: "/iphone-17", label: "Хит продаж 2025" },
    { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max", label: "Флагман 2024" },
    { name: "iPhone 16", path: "/iphone-16", label: "Лучшая цена" },
  ];

  const productSchema = createProductSchema({
    name: "iPhone 17 Air",
    description: "iPhone 17 Air — самый тонкий iPhone. Чип A19, камера 48MP. Купить в Казани.",
    image: "https://apple-collecty.ru/iphone-17-air.avif",
    url: "https://apple-collecty.ru/iphone-17-air",
    lowPrice: "80700",
    highPrice: "110400",
    offerCount: "3",
    reviewCount: "29",
    reviews: [
      { name: "Камилла", date: "2026-02-12", text: "Невероятно тонкий и лёгкий! Доставили на Проспект Победы бесплатно." },
      { name: "Артур", date: "2026-01-22", text: "Взял Air вместо Pro — дизайн просто вау!" },
      { name: "Рамиль", date: "2026-02-05", text: "5.5 мм — это фантастика! Камера 48MP снимает отлично." },
    ],
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Главная", url: "https://apple-collecty.ru/" },
    { name: "iPhone 17 Air", url: "https://apple-collecty.ru/iphone-17-air" },
  ]);

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
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground z-10">Самый тонкий</Badge>
              <img src={iPhone17Air} alt="Купить iPhone 17 Air в Казани - ЭПЛ-КОЛЛЕКЦИЯ" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 17 Air — самый тонкий iPhone в Казани</h1>
              <p className="text-xl text-muted-foreground mb-6">Ультратонкий дизайн 5.5мм, чип A19, камера 48MP</p>
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
          <h2 className="text-2xl font-bold mb-6">iPhone 17 Air — революция дизайна Apple в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 17 Air в Казани</strong> можно в магазине ЭПЛ-КОЛЛЕКЦИЯ. Это самый тонкий iPhone в истории — всего 5.5мм толщиной.</p>
            <p>Несмотря на ультратонкий корпус, iPhone 17 Air оснащён мощным чипом A19 и камерой 48MP. Экран 6.6" Super Retina XDR обеспечивает яркое и чёткое изображение.</p>
            <p>Батарея до 26 часов видео — отличный результат для такого тонкого устройства. Dynamic Island делает управление интуитивным.</p>
            <p><strong>Рассрочка 0%</strong> без переплаты. Trade-in со скидкой до 70%. Бесплатная доставка по Казани в день заказа.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 17 Air" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">iPhone 17 Air vs конкуренты — почему покупать у нас</h3>
              <p>Цена iPhone 17 Air в ЭПЛ-КОЛЛЕКЦИЯ начинается от 80 700 ₽ — на 15–25% дешевле, чем в М.Видео или DNS. На Авито высок риск получить б/у устройство без гарантии.</p>
              <p><strong>Гарантия на новые — 1 год, на б/у — 60 дней.</strong> Полная диагностика каждого устройства перед продажей.</p>
              <p><strong>Бесплатная доставка</strong> по всем районам: Вахитовский, Ново-Савиновский, Приволжский (Азино), Московский, Авиастроительный, Кировский, Советский.</p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 17 Air или iPhone 17?</h3>
              <p><Link to="/iphone-17" className="text-primary hover:underline">iPhone 17</Link> — компактнее (6.1") и доступнее от 64 500 ₽. iPhone 17 Air — больше экран (6.6") и ультратонкий дизайн 5.5мм.</p>
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
    </>
  );
};

export default IPhone17AirPage;
