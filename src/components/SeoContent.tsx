import { Card } from "@/components/ui/card";
import { MapPin, Shield, CreditCard, Gift, Truck } from "lucide-react";

const SeoContent = () => {
  return (
    <div className="mt-20 space-y-12 animate-fade-in">
      {/* Main SEO Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Где купить iPhone в Казани недорого
        </h2>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            <strong className="text-foreground">ЭПЛ-КОЛЛЕКЦИЯ</strong> — это официальный магазин iPhone в Казани, который предлагает самый широкий ассортимент оригинальных смартфонов Apple по выгодным ценам. Мы находимся в Ново-Савиновском районе по адресу: <strong className="text-foreground">Сибгата Хакима 40а, Офис 7</strong> и работаем для вас с 13:00 до 20:00 каждый день.
          </p>
          
          <p>
            В нашем магазине вы можете <strong className="text-foreground">купить iPhone в Казани</strong> из любого поколения: от проверенных временем моделей iPhone 13, iPhone 13 mini, iPhone 13 Pro и iPhone 13 Pro Max до последних новинок — iPhone 14, iPhone 14 Pro Max, iPhone 15, iPhone 15 Plus, iPhone 15 Pro, iPhone 16, iPhone 16 Pro Max, iPhone 17 Pro Max и iPhone 17 Air. Все устройства — оригинальные, с полным комплектом документов.
          </p>

          <p>
            Мы специализируемся на продаже как новых, так и б/у iPhone премиум-качества. Каждый смартфон проходит тщательную диагностику и проверку перед продажей. <strong className="text-foreground">Гарантия 1 год</strong> на все устройства — это наша забота о вашем спокойствии.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 space-y-3 hover:border-primary/30 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <CreditCard className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Выгодно</h3>
          <p className="text-sm text-muted-foreground">
            Экономьте до 30% по сравнению с другими магазинами. Лучшие цены на iPhone в Казани с регулярными акциями и скидками.
          </p>
        </Card>

        <Card className="p-6 space-y-3 hover:border-primary/30 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Оплата частями без переплат</h3>
          <p className="text-sm text-muted-foreground">
            Рассрочка 0% на 10 месяцев без первоначального взноса. Оформление онлайн за 5 минут, одобрение в день обращения.
          </p>
        </Card>

        <Card className="p-6 space-y-3 hover:border-primary/30 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <Gift className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Подарки</h3>
          <p className="text-sm text-muted-foreground">
            При покупке iPhone — защитное стекло и чехол на выбор в подарок при оформлении заказа.
          </p>
        </Card>

        <Card className="p-6 space-y-3 hover:border-primary/30 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <Truck className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Бесплатная доставка</h3>
          <p className="text-sm text-muted-foreground">
            Доставим ваш iPhone в любую точку Казани в день заказа. Проверка при получении и оплата после осмотра устройства.
          </p>
        </Card>
      </section>

      {/* Additional SEO Content */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Преимущества покупки iPhone в ЭПЛ-КОЛЛЕКЦИЯ</h3>
          
          <p>
            <strong className="text-foreground">Trade-in старого устройства</strong>: Сдайте свой старый iPhone или смартфон любого производителя по программе обмена и получите дополнительную скидку на покупку нового устройства. Мы предлагаем честную оценку вашего гаджета.
          </p>

          <p>
            <strong className="text-foreground">Проверка при получении</strong>: Каждый клиент может полностью протестировать iPhone перед оплатой. Проверьте работу всех функций, состояние корпуса, экрана и аккумулятора. Если что-то не устраивает — вы всегда можете отказаться от покупки.
          </p>

          <p>
            <strong className="text-foreground">Профессиональная консультация</strong>: Наши специалисты помогут выбрать оптимальную модель iPhone, подходящую именно вам. Расскажем о различиях между моделями, посоветуем объем памяти и ответим на все ваши вопросы.
          </p>

          <p>
            Если вы ищете, <strong className="text-foreground">где купить iPhone в Казани</strong> выгодно и надежно — приезжайте в наш магазин в Ново-Савиновском районе или оформите заказ онлайн с доставкой. Мы работаем для вас каждый день с 13:00 до 20:00.
          </p>

          <div className="flex items-center gap-2 pt-4 border-t border-border">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm">
              <strong className="text-foreground">Адрес магазина:</strong> г. Казань, Ново-Савиновский район, ул. Сибгата Хакима, 40а, Офис 7
            </p>
          </div>
          
          <p className="text-sm">
            <strong className="text-foreground">Телефон:</strong> <a href="tel:+79992673933" className="text-primary hover:underline">+7 (999) 267-39-33</a>
          </p>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "name": "ЭПЛ-КОЛЛЕКЦИЯ",
              "image": "https://apple-collection.lovable.app/og-apple-collection.jpg",
              "description": "Официальный магазин iPhone в Казани. Продажа iPhone 13-18 с гарантией 1 год, рассрочка 0%, доставка в день заказа. 315+ пятизвездочных отзывов.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Сибгата Хакима 40а, Офис 7",
                "addressLocality": "Казань",
                "addressRegion": "Республика Татарстан",
                "addressCountry": "RU"
              },
              "telephone": "+79992673933",
              "openingHours": "Mo-Su 13:00-20:00",
              "priceRange": "₽₽",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "bestRating": "5",
                "reviewCount": "315"
              }
            },
            {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Product",
                  "name": "iPhone 17 Pro Max",
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "139990",
                    "priceCurrency": "RUB",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "name": "iPhone 16 Pro Max",
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "119990",
                    "priceCurrency": "RUB",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "name": "iPhone 15 Pro Max",
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "99990",
                    "priceCurrency": "RUB",
                    "availability": "https://schema.org/InStock"
                  }
                }
              ]
            }
          ]
        })
      }} />
    </div>
  );
};

export default SeoContent;
