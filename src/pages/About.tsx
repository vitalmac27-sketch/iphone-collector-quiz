import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle,
  CheckCircle2,
  Star,
  Truck,
  CreditCard,
  RefreshCw
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";
import logo from "@/assets/logo.jpg";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Гарантия до 1 года",
      description: "На новые устройства гарантия 1 год, на б/у — 60 дней"
    },
    {
      icon: CheckCircle2,
      title: "Проверка перед покупкой",
      description: "Каждый iPhone проходит полную диагностику и тестирование перед продажей"
    },
    {
      icon: Truck,
      title: "Доставка в день заказа",
      description: "Бесплатная доставка по Казани в день оформления заказа"
    },
    {
      icon: CreditCard,
      title: "Рассрочка 0%",
      description: "Оформление рассрочки без первоначального взноса и переплат"
    },
    {
      icon: RefreshCw,
      title: "Trade-in",
      description: "Обмен старого устройства на новое с выгодой до 30%"
    },
    {
      icon: Award,
      title: "2000+ клиентов",
      description: "Более 2000 довольных покупателей выбрали ЭПЛ-КОЛЛЕКЦИЯ"
    }
  ];

  const stats = [
    { value: "2000+", label: "Довольных клиентов" },
    { value: "5.0", label: "Средний рейтинг" },
    { value: "315+", label: "Отзывов" },
    { value: "3+", label: "Года работы" }
  ];

  return (
    <>
      <Helmet>
        <title>Магазин Айфонов в Казани ЭПЛ-КОЛЛЕКЦИЯ | 2000+ клиентов</title>
        <meta name="description" content="ЭПЛ-КОЛЛЕКЦИЯ — проверенный магазин iPhone в Казани. 3+ года работы, 2000+ клиентов, рейтинг 5.0. Гарантия на новые 1 год, на б/у 60 дней. Рассрочка, бесплатная доставка" />
        <meta name="keywords" content="магазин iphone казань, купить айфон казань, эпл коллекция, apple store казань, iphone с гарантией казань" />
        <link rel="canonical" href="https://apple-collecty.ru/about" />
        <meta property="og:title" content="О магазине ЭПЛ-КОЛЛЕКЦИЯ | iPhone в Казани" />
        <meta property="og:description" content="Официальный магазин iPhone в Казани. 3+ года работы, 2000+ довольных клиентов. Гарантия 1 год, рассрочка 0%." />
        <meta property="og:url" content="https://apple-collecty.ru/about" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org AboutPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "О магазине ЭПЛ-КОЛЛЕКЦИЯ",
            "description": "Официальный магазин iPhone в Казани. 3+ года работы, 2000+ довольных клиентов.",
            "url": "https://apple-collecty.ru/about",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "ЭПЛ-КОЛЛЕКЦИЯ",
              "image": "https://apple-collecty.ru/og-apple-collection.jpg",
              "telephone": "+79992673933",
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "315"
              },
              "priceRange": "₽₽"
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
                  <span itemProp="name" className="text-foreground font-medium">О магазине</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Магазин iPhone в Казани — <span className="text-primary">ЭПЛ-КОЛЛЕКЦИЯ</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Мы — ваш надежный партнер в мире Apple в Казани. Более 3 лет мы помогаем жителям Казани 
                  и Республики Татарстан приобретать качественные iPhone по выгодным ценам с полной гарантией.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/#calculator-section">Выбрать iPhone</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contacts">Наши контакты</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={logo} 
                      alt="Логотип ЭПЛ-КОЛЛЕКЦИЯ - магазин iPhone Казань" 
                      className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <h2 className="text-2xl font-bold">ЭПЛ-КОЛЛЕКЦИЯ</h2>
                      <p className="text-muted-foreground">Магазин iPhone в Казани</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-background/80">
                        <div className="text-3xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Мы гарантируем качество, прозрачность и выгодные условия покупки iPhone в Казани
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Наша история</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                <strong>ЭПЛ-КОЛЛЕКЦИЯ</strong> начала свою деятельность в Казани более 3 лет назад с простой идеи — 
                сделать покупку iPhone доступной и безопасной для каждого жителя нашего города. За это время мы 
                помогли более чем 2000 клиентам найти идеальное устройство.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Мы предлагаем как новые iPhone последних моделей (iPhone 17 Pro Max, iPhone 17 Pro, iPhone 16 Pro Max), 
                так и проверенные б/у устройства в отличном состоянии. Каждый телефон проходит тщательную диагностику 
                и тестирование перед продажей.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Наш офис расположен по адресу <strong>Сибгата Хакима 40а, Офис 7</strong> в Казани. Мы работаем 
                ежедневно с 13:00 до 20:00 и всегда рады видеть вас лично. Также доступна бесплатная доставка 
                по Казани в день заказа.
              </p>
              
              <h3 className="text-2xl font-bold mt-10 mb-4">Наши преимущества</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Гарантия до 1 года</strong> — на новые устройства 1 год, на б/у — 60 дней</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Рассрочка 0%</strong> — оформление без первоначального взноса и переплат</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Trade-in</strong> — обмен старого устройства на новое с выгодой до 30%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Бесплатная доставка</strong> — по Казани в день оформления заказа</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Полная диагностика</strong> — каждый iPhone проверяется перед продажей</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы выбрать свой iPhone?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Воспользуйтесь нашим калькулятором для подбора идеального устройства или свяжитесь с нами напрямую
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/#calculator-section">Подобрать iPhone</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-[#0088cc] hover:bg-[#006699] text-white border-none" asChild>
                <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;