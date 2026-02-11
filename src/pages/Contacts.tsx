import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  MessageCircle,
  Clock,
  Mail,
  Navigation as NavigationIcon,
  ExternalLink
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";

const Contacts = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (999) 267-39-33",
      description: "Звоните в рабочее время",
      action: "tel:+79992673933",
      buttonText: "Позвонить"
    },
    {
      icon: MessageCircle,
      title: "Telegram поддержка",
      value: "@ac_care",
      description: "Быстрый ответ в мессенджере",
      action: "https://t.me/ac_care",
      buttonText: "Написать",
      highlight: true
    },
    {
      icon: MessageCircle,
      title: "Telegram канал",
      value: "@apple_collecty",
      description: "Новости, акции и эксклюзивные лоты",
      action: "https://t.me/apple_collecty",
      buttonText: "Подписаться"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Контакты ЭПЛ-КОЛЛЕКЦИЯ | Магазин iPhone в Казани - адрес, телефон</title>
        <meta name="description" content="Контакты магазина ЭПЛ-КОЛЛЕКЦИЯ в Казани. Адрес: Сибгата Хакима 40а, Офис 7. Телефон: +7 (999) 267-39-33. Работаем ежедневно 13:00-20:00." />
        <meta name="keywords" content="эпл коллекция контакты, магазин iphone казань адрес, купить айфон казань телефон, apple store казань контакты" />
        <link rel="canonical" href="https://apple-collecty.ru/contacts" />
        <meta property="og:title" content="Контакты ЭПЛ-КОЛЛЕКЦИЯ | Магазин iPhone Казань" />
        <meta property="og:description" content="Адрес: Сибгата Хакима 40а, Офис 7. Телефон: +7 (999) 267-39-33. Работаем ежедневно 13:00-20:00." />
        <meta property="og:url" content="https://apple-collecty.ru/contacts" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Контакты ЭПЛ-КОЛЛЕКЦИЯ",
            "description": "Контактная информация магазина iPhone ЭПЛ-КОЛЛЕКЦИЯ в Казани",
            "url": "https://apple-collecty.ru/contacts",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "ЭПЛ-КОЛЛЕКЦИЯ",
              "image": "https://apple-collecty.ru/og-apple-collection.jpg",
              "telephone": "+79992673933",
              "email": "info@apple-collecty.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Сибгата Хакима 40а, Офис 7",
                "addressLocality": "Казань",
                "addressRegion": "Республика Татарстан",
                "postalCode": "420061",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 55.8304,
                "longitude": 49.0661
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "13:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://t.me/apple_collecty",
                "https://t.me/ac_care"
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      <ChatWidget />

      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-3">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" itemProp="item" className="hover:text-primary">
                    <span itemProp="name">Главная</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-foreground font-medium">Контакты</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или приезжайте в наш офис в Казани
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className={`p-6 hover:shadow-lg transition-shadow ${method.highlight ? 'border-[#0088cc] border-2' : ''}`}
                >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${method.highlight ? 'bg-[#0088cc]/10' : 'bg-primary/10'}`}>
                     <method.icon className={`w-6 h-6 ${method.highlight ? 'text-[#0088cc]' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
                  <p className="text-lg font-medium text-foreground mb-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button 
                    className={`w-full ${method.highlight ? 'bg-[#0088cc] hover:bg-[#006699]' : ''}`}
                    variant={method.highlight ? 'default' : 'outline'}
                    asChild
                  >
                    <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {method.buttonText}
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Address and Map Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Address Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Наш офис в Казани</h2>
                
                <Card className="p-6 mb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-foreground">Сибгата Хакима 40а, Офис 7</p>
                      <p className="text-muted-foreground">Казань, Республика Татарстан, 420061</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                      <p className="text-foreground">Ежедневно: 13:00 — 20:00</p>
                      <p className="text-muted-foreground">Без выходных</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <a href="tel:+79992673933" className="text-foreground hover:text-primary transition-colors">
                        +7 (999) 267-39-33
                      </a>
                    </div>
                  </div>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1" asChild>
                    <a 
                      href="https://yandex.ru/maps/-/CDR4mH~e" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <NavigationIcon className="w-4 h-4 mr-2" />
                      Построить маршрут
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a 
                      href="https://2gis.ru/kazan/search/Сибгата%20Хакима%2040а" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Открыть в 2ГИС
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d4d9d4b9d4d9d4b9d4d9d4b9d4d9d4b&amp;source=constructor&amp;ll=49.0661%2C55.8304&amp;z=16&amp;pt=49.0661%2C55.8304%2Cpm2rdm"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта расположения офиса ЭПЛ-КОЛЛЕКЦИЯ в Казани"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How to Find Us */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Как нас найти?</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Наш офис расположен в удобном месте Казани по адресу <strong>Сибгата Хакима 40а, Офис 7</strong>. 
                Здание находится рядом с остановкой общественного транспорта, есть удобная парковка.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">На общественном транспорте:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>От станции метро "Проспект Победы" — 10 минут пешком</li>
                <li>Автобусы и маршрутки: остановка "Сибгата Хакима"</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">На автомобиле:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Бесплатная парковка у здания</li>
                <li>Удобный подъезд со стороны улицы Сибгата Хакима</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Напишите нам в Telegram — мы ответим в течение 5 минут!
            </p>
            <Button size="lg" className="bg-[#0088cc] hover:bg-[#006699] text-white" asChild>
              <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacts;