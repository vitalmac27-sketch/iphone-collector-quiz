import { MapPin, Truck } from "lucide-react";

const districts = [
  { name: "Вахитовский", details: "метро Площадь Тукая, ул. Баумана, Кремлёвская" },
  { name: "Ново-Савиновский", details: "Сибгата Хакима, Ямашева, Чуйкова" },
  { name: "Приволжский", details: "Азино, Проспект Победы, Фатыха Амирхана" },
  { name: "Московский", details: "Губкина, Декабристов, Восстания" },
  { name: "Авиастроительный", details: "Королёва, Копылова, Лётная" },
  { name: "Кировский", details: "Горьковское шоссе, Мавлютова" },
  { name: "Советский", details: "Юдино, Залесный, Октябрьский городок" },
];

const DeliveryDistricts = () => {
  return (
    <section className="mt-16 max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
          <Truck className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Бесплатная доставка iPhone по районам Казани</h2>
      </div>

      <p className="text-muted-foreground mb-6">
        Доставим ваш iPhone <strong className="text-foreground">бесплатно в любой район Казани</strong> в день заказа. 
        Курьер привезёт устройство в удобное время — оплата только после проверки при получении.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {districts.map((d) => (
          <div
            key={d.name}
            className="flex items-start gap-2 p-3 rounded-lg border border-border/50 bg-card/50"
          >
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-sm">{d.name} район</span>
              <p className="text-xs text-muted-foreground">{d.details}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Также доставляем в пригороды: Высокая Гора, Лаишево, Зеленодольск. Уточняйте стоимость у менеджера.
      </p>

      {/* Yandex Map */}
      <div className="mt-6">
        <p className="text-sm font-medium text-foreground mb-3">Наш магазин в Казани — самовывоз и консультации</p>
        <div className="rounded-xl overflow-hidden border border-border/50">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=49.134648%2C55.814578&z=15&pt=49.134648%2C55.814578%2Cpm2rdm&size=650%2C400"
            width="100%"
            height="350"
            frameBorder="0"
            allowFullScreen
            style={{ display: 'block' }}
            title="Магазин ЭПЛ-КОЛЛЕКЦИЯ на карте Казани — ул. Сибгата Хакима, 40а"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          📍 г. Казань, ул. Сибгата Хакима, 40а, Офис 7 · Ежедневно 13:00–20:00 · 15 мин от метро «Козья слобода»
        </p>
      </div>
    </section>
  );
};

export default DeliveryDistricts;
