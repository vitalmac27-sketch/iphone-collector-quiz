import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Smartphone, Battery, Camera, Cpu, Monitor, Shield } from "lucide-react";
import iPhone17Pro from "@/assets/iphone-17-pro.avif";
import ModelPageSeoBlock from "@/components/ModelPageSeoBlock";

const IPhone17ProPage = () => {
  const specs = {
    display: '6.3" Super Retina XDR OLED, ProMotion 120Hz',
    chip: "A19 Pro (3nm)",
    camera: "48MP + 12MP + 12MP, 5x оптический зум",
    battery: "До 27 часов видео",
    storage: "128GB / 256GB / 512GB / 1TB",
    features: ["Dynamic Island", "USB-C", "Титановый корпус", "Action Button", "5G", "Face ID"],
  };

  const prices = {
    "256GB": 88700,
    "512GB": 101500,
    "1TB": 118500,
  };

  const reviews = [
    { name: "Марат", text: "iPhone 17 Pro — идеальный размер! Компактный, но мощный. Доставили на Ямашева за час. Рассрочку оформили прямо при получении.", rating: 5, date: "Февраль 2026" },
    { name: "Елена", text: "Перешла с iPhone 14 по Trade-in — сэкономила почти 40%! Камера с 5x зумом — это нереально круто для путешествий.", rating: 5, date: "Январь 2026" },
    { name: "Дамир", text: "Титановый корпус очень приятный на ощупь. A19 Pro работает молниеносно. Спасибо ЭПЛ-КОЛЛЕКЦИЯ за отличный сервис!", rating: 5, date: "Декабрь 2025" },
    { name: "Алсу", text: "Компактный размер 6.3 дюйма — помещается в любую сумочку. При этом камера снимает как у Max-версии!", rating: 5, date: "Февраль 2026" },
    { name: "Вадим", text: "Программист — мне нужна производительность. A19 Pro тянет всё без задержек. Xcode, эмуляторы — всё летает.", rating: 5, date: "Январь 2026" },
    { name: "Зульфия", text: "Доставили на Проспект Победы за 1.5 часа. Телефон в идеале, запечатанный. Гарантийный талон приложили.", rating: 5, date: "Декабрь 2025" },
    { name: "Ильнур", text: "Сравнивал с iPhone 16 Pro — A19 Pro реально быстрее, особенно в играх. Доплата оправдана на 100%.", rating: 5, date: "Ноябрь 2025" },
    { name: "Оксана", text: "Рассрочку оформили без справок за 5 минут. Плачу 8 870 в месяц — очень комфортно. Спасибо!", rating: 5, date: "Ноябрь 2025" },
    { name: "Фарид", text: "Снимаю видео для YouTube — камера 17 Pro идеальна. ProRes, Cinematic Mode — профессиональный уровень.", rating: 5, date: "Октябрь 2025" },
    { name: "Анастасия", text: "Четвёртый iPhone покупаю в этом магазине. Всегда довольна — и ценой, и сервисом, и гарантией.", rating: 5, date: "Октябрь 2025" },
  ];

  const relatedModels = [
    { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max", label: "Максимальный экран и батарея" },
    { name: "iPhone 17 Air", path: "/iphone-17-air", label: "Самый тонкий iPhone" },
    { name: "iPhone 17", path: "/iphone-17", label: "Хит продаж 2025" },
    { name: "iPhone 16 Pro", path: "/iphone-16-pro", label: "Выгодная альтернатива" },
    { name: "iPhone 16 Pro Max", path: "/iphone-16-pro-max", label: "Большой экран дешевле" },
  ];

  return (
    <>
      <Helmet>
        <title>iPhone 17 Pro Казань | Купить в рассрочку 0% — ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="Купить iPhone 17 Pro в Казани ✅ A19 Pro, титановый корпус, 5x зум. Гарантия на новые 1 год, на б/у 60 дней. Рассрочка без переплат, Trade-in, доставка в день заказа" />
        <meta name="keywords" content="iPhone 17 Pro Казань, купить айфон 17 про, iPhone 17 Pro цена, айфон 17 про казань недорого" />
        <link rel="canonical" href="https://apple-collecty.ru/iphone-17-pro" />
        <meta property="og:title" content="iPhone 17 Pro в Казани — ЭПЛ-КОЛЛЕКЦИЯ" />
        <meta property="og:description" content="iPhone 17 Pro в Казани. A19 Pro, титан. Рассрочка 0%, Trade-in, гарантия." />
        <meta property="og:url" content="https://apple-collecty.ru/iphone-17-pro" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Главная</Link></li>
            <li>/</li>
            <li className="text-foreground">iPhone 17 Pro</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Вернуться в каталог
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">Pro 2025</Badge>
              <img src={iPhone17Pro} alt="Купить iPhone 17 Pro в Казани недорого - ЭПЛ-КОЛЛЕКЦИЯ" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">iPhone 17 Pro в Казани — купить в рассрочку</h1>
              <p className="text-xl text-muted-foreground mb-6">Компактный Pro-флагман с мощью A19 Pro и профессиональной камерой</p>
              <div className="space-y-3 mb-8">
                {Object.entries(prices).map(([storage, price]) => (
                  <Card key={storage} className="border-primary/20">
                    <CardContent className="flex items-center justify-between p-4">
                      <span className="font-medium">{storage}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{price.toLocaleString("ru-RU")} ₽</div>
                        <div className="text-sm text-muted-foreground">от {Math.round(price / 10).toLocaleString("ru-RU")} ₽/мес</div>
                      </div>
                    </CardContent>
                  </Card>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Характеристики iPhone 17 Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Monitor, title: "Дисплей", value: specs.display },
              { icon: Cpu, title: "Процессор", value: specs.chip },
              { icon: Camera, title: "Камера", value: specs.camera },
              { icon: Battery, title: "Батарея", value: specs.battery },
              { icon: Smartphone, title: "Память", value: specs.storage },
              { icon: Shield, title: "Особенности", value: specs.features.join(", ") },
            ].map(({ icon: Icon, title, value }) => (
              <Card key={title}><CardContent className="p-6 flex items-start gap-4"><Icon className="w-8 h-8 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">iPhone 17 Pro — компактный флагман Apple в Казани</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p><strong>Купить iPhone 17 Pro в Казани</strong> — отличный выбор для тех, кто ценит компактность и производительность. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы найдёте все конфигурации по лучшим ценам.</p>
            <p>iPhone 17 Pro оснащён тем же мощным чипом A19 Pro, что и старшая модель, но в более компактном корпусе с 6.3-дюймовым дисплеем. Титановая рамка обеспечивает премиальный внешний вид и прочность.</p>
            <p>Профессиональная камера с 5-кратным оптическим зумом позволяет снимать на уровне зеркальных камер. Action Button даёт быстрый доступ к любимым функциям.</p>
            <p><strong>iPhone 17 Pro в рассрочку 0%</strong> — удобный способ приобрести флагман без переплаты. Также доступен Trade-in со скидкой до 70% и бесплатная доставка по Казани.</p>
          </div>
        </section>

        <ModelPageSeoBlock
          modelName="iPhone 17 Pro"
          reviews={reviews}
          relatedModels={relatedModels}
          additionalContent={
            <>
              <h3 className="text-xl font-bold text-foreground mb-4">Преимущества покупки iPhone 17 Pro в ЭПЛ-КОЛЛЕКЦИЯ</h3>
              <p>В отличие от маркетплейсов типа Авито, где высок риск нарваться на подделку или восстановленный аппарат, в нашем магазине каждый iPhone 17 Pro проходит полную диагностику. Мы предоставляем <strong>гарантию на новые устройства 1 год, на б/у — 60 дней</strong>.</p>
              <p>По сравнению с крупными сетями (М.Видео, DNS, Связной) наши цены ниже на 15–25% благодаря прямым поставкам. При этом вы получаете бесплатную доставку по всей Казани в день заказа.</p>
              <p><strong>Бесплатная доставка:</strong> Вахитовский район (Баумана, Площадь Тукая), Ново-Савиновский (Ямашева), Приволжский (Азино, Проспект Победы), Московский, Авиастроительный, Кировский, Советский районы.</p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">iPhone 17 Pro или iPhone 17 Pro Max?</h3>
              <p>Главное отличие — размер экрана (6.3" vs 6.9") и ёмкость батареи. Если вам важна компактность и удобство одной руки — выбирайте iPhone 17 Pro. Если нужен максимальный экран для видео и игр — <Link to="/iphone-17-pro-max" className="text-primary hover:underline">iPhone 17 Pro Max</Link>.</p>
            </>
          }
        />

        <section className="container mx-auto px-4 py-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Готовы купить iPhone 17 Pro?</h2>
              <p className="mb-6 opacity-90">Рассчитайте стоимость с учётом Trade-in и выберите удобный способ оплаты</p>
              <Button asChild size="lg" variant="secondary"><Link to="/#calculator">Перейти в калькулятор</Link></Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product", "name": "iPhone 17 Pro",
              "image": "https://apple-collecty.ru/iphone-17-pro.avif",
              "description": "Купить iPhone 17 Pro в Казани. A19 Pro, титан, 5x зум. Рассрочка 0%, гарантия.",
              "brand": { "@type": "Brand", "name": "Apple" },
              "offers": { "@type": "AggregateOffer", "lowPrice": "88700", "highPrice": "118500", "priceCurrency": "RUB", "offerCount": "3", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "38", "bestRating": "5" },
              "review": [
                { "@type": "Review", "author": { "@type": "Person", "name": "Марат" }, "datePublished": "2026-02-05", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "iPhone 17 Pro — идеальный размер! Компактный, но мощный." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Елена" }, "datePublished": "2026-01-18", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Перешла с iPhone 14 по Trade-in — сэкономила почти 40%!" }
              ]
            },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://apple-collecty.ru/" },
              { "@type": "ListItem", "position": 2, "name": "iPhone 17 Pro", "item": "https://apple-collecty.ru/iphone-17-pro" }
            ]}
          ]
        })}
      </script>
    </>
  );
};

export default IPhone17ProPage;
