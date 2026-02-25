import { Card } from "@/components/ui/card";
import { MapPin, Shield, CreditCard, Gift, Truck, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Как купить iPhone в рассрочку в Казани?",
    answer: "В ЭПЛ-КОЛЛЕКЦИЯ вы можете оформить рассрочку 0% на 10 месяцев без первоначального взноса. Оформление занимает всего 5 минут онлайн, одобрение — в день обращения. Нужен только паспорт."
  },
  {
    question: "Где находится магазин iPhone в Казани?",
    answer: "Наш магазин находится в Ново-Савиновском районе по адресу: г. Казань, ул. Сибгата Хакима, 40а, Офис 7. Работаем каждый день с 13:00 до 20:00. Также доступна бесплатная доставка по всей Казани."
  },
  {
    question: "Какая гарантия на б/у iPhone?",
    answer: "На все устройства — новые и б/у — мы предоставляем гарантию 1 год. Каждый iPhone проходит тщательную диагностику перед продажей. При возникновении проблем мы бесплатно устраним неисправность или заменим устройство."
  },
  {
    question: "Можно ли проверить iPhone перед покупкой?",
    answer: "Да, обязательно! Вы можете полностью протестировать iPhone перед оплатой: проверить работу всех функций, состояние экрана, камеры и аккумулятора. Если что-то не устроит — можете отказаться от покупки без каких-либо обязательств."
  },
  {
    question: "Есть ли доставка iPhone по Казани?",
    answer: "Да, мы осуществляем бесплатную доставку по всей Казани в день заказа. Курьер привезёт iPhone в удобное для вас время и место. Оплата — только после проверки устройства при получении."
  },
  {
    question: "Принимаете ли вы старый iPhone в зачёт нового?",
    answer: "Да, у нас работает программа Trade-in. Сдайте свой старый iPhone или смартфон любого производителя и получите скидку на покупку нового устройства. Оценка честная и прозрачная."
  }
];

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
            В нашем магазине вы можете <strong className="text-foreground">купить iPhone в Казани недорого</strong> из любого поколения: от проверенных временем моделей iPhone 13, iPhone 13 mini, iPhone 13 Pro и iPhone 13 Pro Max до последних новинок — iPhone 14, iPhone 14 Pro Max, iPhone 15, iPhone 15 Plus, iPhone 15 Pro, iPhone 16, iPhone 16 Pro Max, iPhone 17 Pro Max и iPhone 17 Air. Все устройства — оригинальные, с полным комплектом документов.
          </p>

          <p>
            Мы специализируемся на продаже как новых, так и б/у iPhone премиум-качества. Каждый смартфон проходит тщательную диагностику и проверку перед продажей. <strong className="text-foreground">Гарантия 1 год</strong> на все устройства — это наша забота о вашем спокойствии. Покупая у нас, вы получаете <strong className="text-foreground">оригинальный iPhone с гарантией</strong> по лучшей цене в Казани.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 space-y-3 hover:border-primary/30 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <CreditCard className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Выгодные цены</h3>
          <p className="text-sm text-muted-foreground">
            Экономьте до 30% по сравнению с другими магазинами. Лучшие цены на iPhone в Казани с регулярными акциями и скидками.
          </p>
        </Card>

        <Card className="p-6 space-y-3 hover:border-primary/30 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Рассрочка 0% без переплат</h3>
          <p className="text-sm text-muted-foreground">
            Рассрочка на 10 месяцев без первоначального взноса. Оформление онлайн за 5 минут, одобрение в день обращения.
          </p>
        </Card>

        <Card className="p-6 space-y-3 hover:border-primary/30 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <Gift className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Подарки к покупке</h3>
          <p className="text-sm text-muted-foreground">
            При покупке iPhone — стильный чехол и премиум защитное стекло в подарок при оформлении заказа.
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

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <HelpCircle className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Частые вопросы о покупке iPhone в Казани</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
            Если вы ищете, <strong className="text-foreground">где купить iPhone в Казани недорого</strong> и надежно — приезжайте в наш магазин в Ново-Савиновском районе или оформите заказ онлайн с бесплатной доставкой. Мы работаем для вас каждый день с 13:00 до 20:00.
          </p>

          <h3 className="text-2xl font-bold text-foreground pt-6">Почему покупать iPhone у нас, а не на Авито или в М.Видео?</h3>

          <p>
            На <strong className="text-foreground">Авито</strong> велик риск нарваться на подделку, залоченный или краденый iPhone. Проверить состояние аккумулятора, оригинальность экрана и отсутствие «утопленника» без специального оборудования сложно. В <strong className="text-foreground">ЭПЛ-КОЛЛЕКЦИЯ</strong> каждый iPhone проходит полную диагностику на 30+ пунктов: от проверки серийного номера до тестирования Face ID, динамиков и влагоиндикаторов. Вы получаете <strong className="text-foreground">гарантию 1 год</strong> — чего ни один продавец на Авито предложить не может.
          </p>

          <p>
            По сравнению с <strong className="text-foreground">М.Видео и DNS</strong>, наши цены на iPhone ниже на 15–30%. Это возможно благодаря прямым поставкам и отсутствию наценки крупных торговых сетей. При этом вы получаете тот же оригинальный Apple iPhone, ту же гарантию, но экономите от 10 000 до 40 000 ₽ в зависимости от модели.
          </p>

          <h3 className="text-2xl font-bold text-foreground pt-4">Как выбрать iPhone в Казани: советы от экспертов</h3>

          <p>
            При выборе iPhone обратите внимание на три ключевых фактора: <strong className="text-foreground">объём памяти</strong> (для фото и видео рекомендуем от 256 ГБ), <strong className="text-foreground">состояние аккумулятора</strong> (для б/у моделей — не ниже 85%) и <strong className="text-foreground">поколение процессора</strong> (чип A17 Pro и новее обеспечат актуальность на 5+ лет). В нашем калькуляторе на главной странице вы можете подобрать оптимальный вариант за 1 минуту.
          </p>

          <p>
            <strong className="text-foreground">Рассрочка 0% без переплат</strong> — ещё одно весомое преимущество покупки в ЭПЛ-КОЛЛЕКЦИЯ. Оформление онлайн за 5 минут, без похода в банк. Просто выберите iPhone, укажите срок рассрочки (до 10 месяцев) и получите одобрение в тот же день. Первоначальный взнос — 0 ₽.
          </p>

          <p>
            Мы доставляем iPhone <strong className="text-foreground">бесплатно по всей Казани в день заказа</strong>: от Вахитовского района и Баумана до Азино, Горок, Юдино и Залесного. Курьер привезёт устройство в удобное время — вы проверяете и только потом оплачиваете. Также доступен самовывоз из магазина на Сибгата Хакима 40а (15 минут пешком от метро «Козья слобода»).
          </p>
        </div>

        {/* Cross-linking to model pages */}
        <div className="mt-8 p-6 rounded-xl border border-border/50 bg-card/50">
          <h3 className="text-lg font-semibold mb-4">Популярные модели iPhone в Казани</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <a href="/iphone-17-pro-max" className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline">
              → iPhone 17 Pro Max в Казани
            </a>
            <a href="/iphone-17-pro" className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline">
              → iPhone 17 Pro в Казани
            </a>
            <a href="/iphone-17-air" className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline">
              → iPhone 17 Air в Казани
            </a>
            <a href="/iphone-17" className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline">
              → iPhone 17 в Казани
            </a>
            <a href="/iphone-16-pro-max" className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline">
              → iPhone 16 Pro Max в Казани
            </a>
            <a href="/iphone-16-pro" className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline">
              → iPhone 16 Pro в Казани
            </a>
            <a href="/iphone-16" className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline">
              → iPhone 16 в Казани
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-border">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm">
              <strong className="text-foreground">Адрес магазина iPhone в Казани:</strong> г. Казань, Ново-Савиновский район, ул. Сибгата Хакима, 40а, Офис 7
            </p>
          </div>
          
          <p className="text-sm">
            <strong className="text-foreground">Телефон:</strong> <a href="tel:+79992673933" className="text-primary hover:underline">+7 (999) 267-39-33</a>
          </p>
      </section>

      {/* Schema.org Structured Data - LocalBusiness + Products + FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "name": "ЭПЛ-КОЛЛЕКЦИЯ",
              "image": "https://apple-collecty.ru/og-apple-collection.jpg",
              "description": "Официальный магазин iPhone в Казани. Продажа iPhone 13-17 с гарантией 1 год, рассрочка 0%, доставка в день заказа. 315+ пятизвездочных отзывов.",
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
                  "description": "Купить iPhone 17 Pro Max в Казани с гарантией 1 год",
                  "brand": { "@type": "Brand", "name": "Apple" },
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
                  "description": "Купить iPhone 16 Pro Max в Казани с гарантией 1 год",
                  "brand": { "@type": "Brand", "name": "Apple" },
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
                  "description": "Купить iPhone 15 Pro Max в Казани с гарантией 1 год",
                  "brand": { "@type": "Brand", "name": "Apple" },
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "99990",
                    "priceCurrency": "RUB",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "name": "iPhone 15 Pro",
                  "description": "Купить iPhone 15 Pro в Казани с гарантией 1 год",
                  "brand": { "@type": "Brand", "name": "Apple" },
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "84990",
                    "priceCurrency": "RUB",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "name": "iPhone 14 Pro Max",
                  "description": "Купить iPhone 14 Pro Max в Казани с гарантией 1 год",
                  "brand": { "@type": "Brand", "name": "Apple" },
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "74990",
                    "priceCurrency": "RUB",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "name": "iPhone 13 Pro Max",
                  "description": "Купить iPhone 13 Pro Max в Казани с гарантией 1 год",
                  "brand": { "@type": "Brand", "name": "Apple" },
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "54990",
                    "priceCurrency": "RUB",
                    "availability": "https://schema.org/InStock"
                  }
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Как купить iPhone в рассрочку в Казани?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "В ЭПЛ-КОЛЛЕКЦИЯ вы можете оформить рассрочку 0% на 10 месяцев без первоначального взноса. Оформление занимает всего 5 минут онлайн, одобрение — в день обращения. Нужен только паспорт."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Где находится магазин iPhone в Казани?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Наш магазин находится в Ново-Савиновском районе по адресу: г. Казань, ул. Сибгата Хакима, 40а, Офис 7. Работаем каждый день с 13:00 до 20:00. Также доступна бесплатная доставка по всей Казани."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Какая гарантия на б/у iPhone?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "На все устройства — новые и б/у — мы предоставляем гарантию 1 год. Каждый iPhone проходит тщательную диагностику перед продажей. При возникновении проблем мы бесплатно устраним неисправность или заменим устройство."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Можно ли проверить iPhone перед покупкой?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, обязательно! Вы можете полностью протестировать iPhone перед оплатой: проверить работу всех функций, состояние экрана, камеры и аккумулятора. Если что-то не устроит — можете отказаться от покупки без каких-либо обязательств."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Есть ли доставка iPhone по Казани?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, мы осуществляем бесплатную доставку по всей Казани в день заказа. Курьер привезёт iPhone в удобное для вас время и место. Оплата — только после проверки устройства при получении."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Принимаете ли вы старый iPhone в зачёт нового?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, у нас работает программа Trade-in. Сдайте свой старый iPhone или смартфон любого производителя и получите скидку на покупку нового устройства. Оценка честная и прозрачная."
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