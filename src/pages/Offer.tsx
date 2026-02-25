import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";

const Offer = () => {
  return (
    <>
      <Helmet>
        <title>Публичная оферта — ЭПЛ-КОЛЛЕКЦИЯ | Магазин iPhone Казань</title>
        <meta name="description" content="Публичная оферта интернет-магазина ЭПЛ-КОЛЛЕКЦИЯ. Условия продажи iPhone в Казани." />
        <link rel="canonical" href="https://apple-collecty.ru/offer" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navigation />
      <ChatWidget />

      <main className="min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="text-sm text-muted-foreground mb-6">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Главная</Link></li>
              <li className="text-muted-foreground/50">/</li>
              <li className="text-foreground font-medium">Публичная оферта</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Публичная оферта</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Общие положения</h2>
              <p>Настоящий документ является официальным предложением (публичной офертой) ИП Дарьин Максим Павлович (далее — Продавец) в адрес любого физического лица (далее — Покупатель) заключить договор купли-продажи товаров на условиях, изложенных ниже.</p>
              <p>В соответствии с п. 2 ст. 437 Гражданского кодекса РФ, в случае принятия изложенных ниже условий, лицо, производящее акцепт, становится Покупателем.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Предмет договора</h2>
              <p>Продавец обязуется передать Покупателю товар (смартфоны Apple iPhone), а Покупатель обязуется оплатить и принять товар на условиях настоящей оферты.</p>
              <p>Наименование, количество, комплектность и цена товара определяются при оформлении заказа.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Момент заключения договора</h2>
              <p>Акцептом оферты является оформление заказа Покупателем на сайте <a href="https://apple-collecty.ru" className="text-primary hover:underline">apple-collecty.ru</a>, через мессенджер или по телефону. Договор считается заключённым с момента подтверждения заказа Продавцом.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Цена и порядок оплаты</h2>
              <p>Цены указаны на сайте в рублях РФ и могут изменяться Продавцом в одностороннем порядке. Цена товара, зафиксированная в момент подтверждения заказа, изменению не подлежит.</p>
              <p>Способы оплаты: наличные, банковский перевод, рассрочка через банк-партнёр (Совкомбанк).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Доставка</h2>
              <p>Доставка осуществляется по г. Казань бесплатно в день заказа (при наличии товара). Сроки доставки в другие города обсуждаются индивидуально.</p>
              <p>Покупатель имеет право осмотреть товар при получении. В случае обнаружения дефектов Покупатель вправе отказаться от приёмки.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Гарантия и возврат</h2>
              <p>На все товары предоставляется гарантия 1 (один) год с момента передачи товара Покупателю. Возврат и обмен товара надлежащего качества осуществляется в соответствии с Законом РФ «О защите прав потребителей».</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Ответственность сторон</h2>
              <p>Стороны несут ответственность за неисполнение или ненадлежащее исполнение своих обязательств в соответствии с законодательством Российской Федерации.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Разрешение споров</h2>
              <p>Все споры и разногласия разрешаются путём переговоров. В случае недостижения согласия — в суде по месту нахождения Продавца.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Реквизиты Продавца</h2>
              <ul className="list-none space-y-1 pl-0">
                <li>Индивидуальный предприниматель <strong className="text-foreground">Дарьин Максим Павлович</strong></li>
                <li>ИНН: 164609500872</li>
                <li>Фактический адрес: г. Казань, ул. Сибгата Хакима, 40а, офис 7</li>
                <li>Телефон: <a href="tel:+79992673933" className="text-primary hover:underline">+7 (999) 267-39-33</a></li>
                <li>Email: <a href="mailto:apple.collecty@gmail.com" className="text-primary hover:underline">apple.collecty@gmail.com</a></li>
                <li>Сайт: <a href="https://apple-collecty.ru" className="text-primary hover:underline">apple-collecty.ru</a></li>
              </ul>
            </section>

            <p className="text-sm text-muted-foreground/70">Дата размещения: 25 февраля 2026 г.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Offer;
