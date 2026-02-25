import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";

const Legal = () => {
  return (
    <>
      <Helmet>
        <title>Правовая информация — ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="Правовая информация, дисклеймер и реквизиты магазина ЭПЛ-КОЛЛЕКЦИЯ в Казани." />
        <link rel="canonical" href="https://apple-collecty.ru/legal" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navigation />
      <ChatWidget />

      <main className="min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="text-sm text-muted-foreground mb-6">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Главная</Link></li>
              <li className="text-muted-foreground/50">/</li>
              <li className="text-foreground font-medium">Правовая информация</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Правовая информация</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Дисклеймер</h2>
              <p>Сайт apple-collecty.ru носит исключительно информационный характер и предназначен только для ознакомления с ассортиментом и ориентировочными ценами.</p>
              <p>Вся информация на сайте, включая цены, наличие, сроки доставки, условия рассрочки и любые другие сведения, <strong className="text-foreground">не является публичной офертой</strong> в смысле ст. 437 (п. 2) Гражданского кодекса РФ и может изменяться в любое время без уведомления. Окончательные условия продажи определяются при оформлении заказа.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Товарные знаки</h2>
              <p>Apple, логотип Apple, iPhone, Mac, iPad, App Store и другие указанные товарные знаки являются собственностью компании Apple Inc. (США). Использование данных знаков на сайте осуществляется исключительно в информационных целях.</p>
              <p>Instagram, Facebook и другие продукты компании Meta Platforms Inc. (признана экстремистской организацией и запрещена в РФ) упоминаются исключительно в информационных целях.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Реквизиты</h2>
              <ul className="list-none space-y-1 pl-0">
                <li>Индивидуальный предприниматель <strong className="text-foreground">Дарьин Максим Павлович</strong></li>
                <li>ИНН: 164609500872</li>
                <li>Фактический адрес: г. Казань, ул. Сибгата Хакима, 40а, офис 7</li>
                <li>Телефон: <a href="tel:+79992673933" className="text-primary hover:underline">+7 (999) 267-39-33</a></li>
                <li>Email: <a href="mailto:apple.collecty@gmail.com" className="text-primary hover:underline">apple.collecty@gmail.com</a></li>
                <li>Сайт: <a href="https://apple-collecty.ru" className="text-primary hover:underline">apple-collecty.ru</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Ограничение ответственности</h2>
              <p>Администрация сайта не несёт ответственности за убытки, возникшие в результате использования информации с сайта.</p>
            </section>

            <p className="text-sm text-muted-foreground/70">Дата размещения: 25 февраля 2026 г.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Legal;
