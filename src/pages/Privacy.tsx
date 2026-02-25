import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности — ЭПЛ-КОЛЛЕКЦИЯ</title>
        <meta name="description" content="Политика конфиденциальности сайта apple-collecty.ru. Порядок обработки персональных данных." />
        <link rel="canonical" href="https://apple-collecty.ru/privacy" />
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
              <li className="text-foreground font-medium">Политика конфиденциальности</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Общие положения</h2>
              <p>Настоящая Политика определяет порядок обработки персональных данных на сайте <a href="https://apple-collecty.ru" className="text-primary hover:underline">apple-collecty.ru</a> в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Какие данные мы собираем</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>ФИО, номер телефона, email, адрес доставки (при заказе)</li>
                <li>IP-адрес, данные браузера, cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Цели обработки</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Оформление, оплата и доставка заказа</li>
                <li>Обратная связь и информирование</li>
                <li>Улучшение работы сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Хранение и передача</h2>
              <p>Данные хранятся в Российской Федерации. Передача третьим лицам осуществляется только для целей доставки (Яндекс Курьер, СДЭК) и оплаты (банки, Совкомбанк).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Права субъекта</h2>
              <p>Вы имеете право запросить доступ, исправление или удаление своих данных по email <a href="mailto:apple.collecty@gmail.com" className="text-primary hover:underline">apple.collecty@gmail.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Оператор персональных данных</h2>
              <ul className="list-none space-y-1 pl-0">
                <li><li>ИП Дарьин М.П.</li></li>
                <li>ИНН: 164609500872</li>
                <li>Адрес: г. Казань, ул. Сибгата Хакима, 40а, офис 7</li>
                <li>Email: <a href="mailto:apple.collecty@gmail.com" className="text-primary hover:underline">apple.collecty@gmail.com</a></li>
              </ul>
            </section>

            <p className="text-sm text-muted-foreground/70">Дата вступления в силу: 25 февраля 2026 г.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Privacy;
