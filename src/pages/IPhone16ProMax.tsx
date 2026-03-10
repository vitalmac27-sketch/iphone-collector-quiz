import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone16ProMax from "@/assets/iphone-16-pro-max.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";
import { localBusinessSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/schema";

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
    { name: "Айгуль", text: "Экран 6.9 дюймов — мечта для просмотра сериалов! Батарея на 33 часа — заряжаю раз в два дня. Титан приятный на ощупь.", rating: 5, date: "Декабрь 2025" },
    { name: "Олег", text: "Фотограф-любитель. 5x зум и ProRAW — это уровень зеркальной камеры. Сэкономил кучу денег по сравнению с 17 Pro Max.", rating: 5, date: "Декабрь 2025" },
    { name: "Лиана", text: "Доставили в Приволжский район за час. Курьер подождал, пока проверила всё. Телефон без единой царапины!", rating: 5, date: "Ноябрь 2025" },
    { name: "Рафик", text: "Для бизнеса — идеальный телефон. Большой экран для почты и документов, батарея на весь день. A18 Pro — мощный чип.", rating: 5, date: "Ноябрь 2025" },
    { name: "Вероника", text: "Сдала Samsung Galaxy S24 по Trade-in — получила отличную скидку. Перейти на iOS оказалось проще, чем думала!", rating: 5, date: "Октябрь 2025" },
    { name: "Тимур", text: "В DNS этот iPhone стоил на 20 тысяч дороже. ЭПЛ-КОЛЛЕКЦИЯ — лучший магазин Apple в Казани, без вариантов.", rating: 5, date: "Октябрь 2025" },
    { name: "Алия", text: "Купила в подарок родителям — оба довольны. Помогли с настройкой и переносом данных. Сервис на высшем уровне!", rating: 5, date: "Сентябрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", label: "Новейший флагман" },
    { name: "iPhone 16 Pro", path: "/iphone-16-pro", label: "Компактный Pro" },
    { name: "iPhone 16", path: "/iphone-16", label: "Лучшая цена" },
    { name: "iPhone 17 Pro", path: "/iphone-17-pro", label: "Компактный 2025" },
    { name: "iPhone 17", path: "/iphone-17", label: "Хит продаж" },
  ];

  const productSchema = createProductSchema({
    name: "iPhone 16 Pro Max",
    description: "iPhone 16 Pro Max в Казани. A18 Pro, титан, камера 48MP. Рассрочка 0%, гарантия.",
    image: "https://apple-collecty.ru/iphone-16-pro-max.avif",
    url: "https://apple-collecty.ru/iphone-16-pro-max",
    lowPrice: "96800",
    highPrice: "126600",
    offerCount: "3",
    reviewCount: "63",
    reviews: [
      { name: "Руслан", date: "2026-02-01", text: "Взял 16 Pro Max вместо 17-го — сэкономил 40 тысяч! Разница минимальная." },
      { name: "Гульнара", date: "2026-01-12", text: "Рассрочка 0% за 5 минут, доставили на Декабристов через 2 часа." },
      { name: "Максим", date: "2026-01-05", text: "Второй iPhone покупаю здесь. Цены ниже, гарантия настоящая." },
    ],
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Главная", url: "https://apple-collecty.ru/" },
    { name: "iPhone 16 Pro Max", url: "https://apple-collecty.ru/iphone-16-pro-max" },
  ]);

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
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground z-10">Выгодный флагман</Badge>
              <img src={iPhone16ProMax} alt="Купить Айфон iPhone 16 Pro Max Казань дешево — рассрочка 0% доставка бесплатно ЭПЛ-КОЛЛЕКЦИЯ" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 16 Pro Max в Казани — флагман по лучшей цене</h1>
              <p className="text-xl text-muted-foreground mb-6">A18 Pro, титан, 5x зум, экран 6.9" — максимум за разумные деньги</p>
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
          <h2 className="text-2xl font-bold mb-6">iPhone 16 Pro Max — максимум за разумные деньги</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 16 Pro Max в Казани</strong> — отличный способ получить флагманские возможности по выгодной цене. A18 Pro, титан, камера 48MP с 5x зумом — всё как у нового поколения, но дешевле на 30–40 тысяч.</p>
            <p>Экран 6.9" с ProMotion 120Hz и батарея на 33 часа видео — рекорд для смартфонов. Идеален для видео, игр и работы.</p>
            <p><strong>Рассрочка 0%</strong> на 10 месяцев. Trade-in до 70%. Бесплатная доставка по всем районам Казани.</p>
          </div>
        </section>

        <ModelPageSeoBlock modelName="iPhone 16 Pro Max" reviews={reviews} relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">iPhone 16 Pro Max — умный выбор в 2026 году</h3>
              <p>Многие выбирают iPhone 16 Pro Max вместо 17 Pro Max и экономят 30–40 тысяч. Разница в производительности — всего 15–20%, а камера и экран практически идентичны.</p>
              <p><strong>Гарантия на новые — 1 год, на б/у — 60 дней.</strong></p>
              <p><strong>Бесплатная доставка</strong> по всем районам Казани.</p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 16 Pro Max или 17 Pro Max?</h3>
              <p><Link to="/iphone-17-pro-max" className="text-primary hover:underline">iPhone 17 Pro Max</Link> — новее, A19 Pro быстрее на 20–30%. iPhone 16 Pro Max — выгоднее на 30–40 тысяч при сопоставимых возможностях.</p>
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
    </>
  );
};

export default IPhone16ProMaxPage;
