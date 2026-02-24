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
    </section>
  );
};

export default DeliveryDistricts;
