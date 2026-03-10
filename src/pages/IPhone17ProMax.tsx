import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17ProMax from "@/assets/iphone-17-pro-max.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";
import { localBusinessSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/schema";

const IPhone17ProMaxPage = () => {
  const specs = {
    display: '6.9" Super Retina XDR OLED, ProMotion 120Hz',
    chip: "A19 Pro (3nm)",
    camera: "48MP + 12MP + 12MP, 5x оптический зум",
    battery: "До 33 часов видео",
    storage: "256GB / 512GB / 1TB",
    features: ["Dynamic Island", "USB-C", "Титановый корпус", "Action Button", "5G", "Face ID"],
  };

  const prices = { "256GB": 101000, "512GB": 113800, "1TB": 130800 };

  const reviews = [
    { name: "Алексей", text: "Купил iPhone 17 Pro Max 256GB — доставили в Азино за 2 часа. Аккумулятор держит весь день, камера просто космос! Рассрочку оформили за 5 минут.", rating: 5, date: "Февраль 2026" },
    { name: "Динара", text: "Перешла с Samsung на iPhone 17 Pro Max по Trade-in. Скидка получилась отличная, сэкономила больше 30%. Титановый корпус выглядит шикарно!", rating: 5, date: "Январь 2026" },
    { name: "Ринат", text: "Брал для работы — камера 48MP снимает как профессиональная. Заказал с доставкой на Площадь Тукая, привезли через час. Магазин проверенный!", rating: 5, date: "Декабрь 2025" },
    { name: "Эльвира", text: "Экран 6.9 дюймов — идеально для видео и соцсетей. Титановый корпус легче, чем ожидала. Магазин на Хакима удобно расположен.", rating: 5, date: "Февраль 2026" },
    { name: "Артём", text: "5x зум — это нереально круто! Снимал концерт — качество как на профессиональную камеру. Спасибо за быструю доставку на Баумана.", rating: 5, date: "Январь 2026" },
    { name: "Гузель", text: "Муж подарил на день рождения. Заказывал в ЭПЛ-КОЛЛЕКЦИЯ — говорит, цена была лучшая в городе. Телефон шикарный!", rating: 5, date: "Декабрь 2025" },
    { name: "Ильдар", text: "Обновился с 15 Pro Max — разница заметна в скорости и автономности. A19 Pro — зверь! Trade-in оформили за 10 минут.", rating: 5, date: "Ноябрь 2025" },
    { name: "Наиля", text: "Рассрочка 0% на 10 месяцев — очень удобно. Платёж всего 10 100 в месяц за флагман. Никаких скрытых комиссий.", rating: 5, date: "Ноябрь 2025" },
    { name: "Марсель", text: "Долго сравнивал цены — в ЭПЛ-КОЛЛЕКЦИЯ реально дешевле, чем в DNS и М.Видео. Доставили в Московский район за час.", rating: 5, date: "Октябрь 2025" },
    { name: "Лейла", text: "Action Button настроила на камеру — теперь снимаю моментально. Батарея 33 часа видео — хватает на 2 дня легко!", rating: 5, date: "Октябрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Компактный Pro-флагман" },
    { name: "iPhone 17 Air", path: "/iphone-17-air", label: "Самый тонкий iPhone" },
    { name: "iPhone 17", path: "/iphone-17", label: "Хит продаж 2025" },
    { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max", label: "Выгодная альтернатива" },
    { name: "iPhone 16 Pro", path: "/iphone-16-pro", label: "Компактный Pro" },
  ];

  const productSchema = createProductSchema({
    name: "iPhone 17 Pro Max",
    description: "Купить iPhone 17 Pro Max в Казани. A19 Pro, камера 48MP, титановый корпус. Рассрочка 0%, гарантия.",
    image: "https://apple-collecty.ru/iphone-17-pro-max.avif",
    url: "https://apple-collecty.ru/iphone-17-pro-max",
    lowPrice: "101000",
    highPrice: "130800",
    offerCount: "3",
    reviewCount: "78",
    reviews: [
      { name: "Алексей", date: "2026-02-10", text: "Купил iPhone 17 Pro Max 256GB — доставили в Азино за 2 часа. Камера просто космос!" },
      { name: "Динара", date: "2026-01-20", text: "Перешла с Samsung по Trade-in. Скидка отличная, титановый корпус шикарный!" },
      { name: "Ринат", date: "2025-12-15", text: "Брал для работы — камера 48MP снимает как профессиональная. Магазин проверенный!" },
    ],
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Главная", url: "https://apple-collecty.ru/" },
    { name: "iPhone 17 Pro Max", url: "https://apple-collecty.ru/iphone-17-pro-max" },
  ]);

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
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li><li>/</li>
            <li className="text-foreground">iPhone 17 Pro Max</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" />Вернуться в каталог</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground z-10">Флагман 2025</Badge>
              <img src={iPhone17ProMax} alt="Купить Айфон iPhone 17 Pro Max Казань дешево — рассрочка 0% доставка бесплатно ЭПЛ-КОЛЛЕКЦИЯ" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 17 Pro Max в Казани — флагман с гарантией</h1>
              <p className="text-xl text-muted-foreground mb-6">Самый мощный iPhone с чипом A19 Pro и титановым корпусом</p>
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

        {/* Specs */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 17 Pro Max</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{ icon: Monitor, title: "Дисплей", value: specs.display }, { icon: Cpu, title: "Процессор", value: specs.chip }, { icon: Camera, title: "Камера", value: specs.camera }, { icon: Battery, title: "Батарея", value: specs.battery }, { icon: Smartphone, title: "Память", value: specs.storage }, { icon: Shield, title: "Особенности", value: specs.features.join(", ") }].map(({ icon: Icon, title, value }) => (
              <Card key={title}><CardContent className="p-6 flex items-start gap-4"><Icon className="w-8 h-8 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 17 Pro Max — флагман Apple 2025 года в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 17 Pro Max в Казани</strong> можно в магазине ЭПЛ-КОЛЛЕКЦИЯ по лучшей цене. Это самый мощный смартфон Apple с революционным чипом A19 Pro.</p>
            <p>Камера 48 Мп с 5-кратным оптическим зумом позволяет снимать на уровне профессиональной техники. Титановый корпус обеспечивает премиальный вид и прочность.</p>
            <p>Экран 6.9 дюймов с ProMotion 120Hz — идеален для видео, игр и работы. Батарея до 33 часов видео — рекорд для iPhone.</p>
            <p><strong>Рассрочка 0% на 10 месяцев</strong> без переплаты. Trade-in со скидкой до 70%. Бесплатная доставка по всем районам Казани в день заказа.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 17 Pro Max" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">Почему iPhone 17 Pro Max выгоднее покупать в ЭПЛ-КОЛЛЕКЦИЯ</h3>
              <p>Цена iPhone 17 Pro Max в нашем магазине начинается от 101 000 ₽ — это на 15–25% ниже, чем в М.Видео, DNS или Связном. На Авито вы рискуете получить восстановленный аппарат без гарантии.</p>
              <p>Каждый iPhone 17 Pro Max проходит полную диагностику. <strong>Гарантия на новые — 1 год, на б/у — 60 дней.</strong> Оплата при получении после проверки.</p>
              <p><strong>Бесплатная доставка</strong> по всем районам Казани: Вахитовский, Ново-Савиновский, Приволжский (Азино), Московский, Авиастроительный, Кировский, Советский.</p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 17 Pro Max или iPhone 16 Pro Max?</h3>
              <p>A19 Pro быстрее A18 Pro на 20–30%. Автономность увеличена. Если бюджет ограничен — <Link to="/iphone-16-pro-max" className="text-primary hover:underline">iPhone 16 Pro Max</Link> остаётся отличным выбором от 96 800 ₽.</p>
            </>
          }
        />

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground"><CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 17 Pro Max?</h2>
            <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in</p>
            <Button asChild size="lg" variant="secondary"><Link to="/#calculator">Перейти в калькулятор</Link></Button>
          </CardContent></Card>
        </section>
      </div>
    </>
  );
};

export default IPhone17ProMaxPage;
