import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Камилла Минеева",
    date: "1 августа",
    product: "iPhone 16, 128 GB",
    text: "Прекрасный, честный продавец! Написала в день покупки, договорились о времени встрече, расположение офиса находится в удобном месте.",
    rating: 5
  },
  {
    name: "Лейли",
    date: "29 июля",
    product: "iPhone 16 Pro, 256GB",
    text: "Отличный продавец, удобный чистый светлый просторный офис. Покупала смартфон и наушники. Есть возможность оплаты как наличными, так и перевод/",
    rating: 5
  },
  {
    name: "Makar Nikolaevich",
    date: "8 августа",
    product: "iPhone 15 Pro Max, 256GB",
    text: "Покупал 15 Pro Max! Качество на высоте! Помещение большое комфортное! Продавец отвечает моментально! Респект вам и вашему магазину!",
    rating: 5
  },
  {
    name: "Светлана",
    date: "11 августа",
    product: "iPhone 16 Pro Max, 256GB",
    text: "Легко договорились, в удобное время. Все как в описании и при телефонном разговоре, без всяких отговорок. Даже подобрали любимый цвет.",
    rating: 5
  },
  {
    name: "Диаз",
    date: "9 августа",
    product: "iPhone 16 Pro Max, 256GB",
    text: "Покупка прошла отлично, быстро договорились о встрече, товар соответствует описанию, рекомендую продавца!",
    rating: 5
  },
  {
    name: "Тимур",
    date: "3 октября",
    product: "iPhone 16 Pro, 256GB",
    text: "Продавец отличный. Телефон продал полностью, как было в описании. Дали протестировать через прогу. Плюс дали скидку и в подарок чехол положили.",
    rating: 5
  },
  {
    name: "Рустем",
    date: "2 октября",
    product: "iPhone 16, 128GB",
    text: "Покупал 16 айфон своей матери, очень довольна. Офис и вправду уютный, и расположение удобное. Максим порядочный продавец, рекомендую.",
    rating: 5
  },
  {
    name: "Наталья",
    date: "8 октября",
    product: "iPhone 16 Pro, 256GB",
    text: "Отличный магазин🔥 большой выбор на любой вкус, вежливый консультант! Всё как в объявлении. Пришла увидела купила 😍",
    rating: 5
  },
  {
    name: "Мадина",
    date: "16 августа",
    product: "iPhone 15, 128GB",
    text: "Все идеально, продавец отличный, упаковал телефон на совесть и сразу же отправил. Смело всем рекомендую!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы наших клиентов
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold">5,0</span>
          </div>
          <p className="text-muted-foreground">На основании 315+ отзывов реальных покупателей</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow bg-card border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm font-medium text-primary mb-2">{testimonial.product}</p>
              <p className="text-foreground leading-relaxed">{testimonial.text}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground mb-4">
            Присоединяйтесь к 2000+ довольным клиентам
          </p>
          <p className="text-muted-foreground">
            Каждый отзыв — это реальный покупатель, который выбрал ЭПЛ-КОЛЛЕКЦИЯ для покупки iPhone в Казани
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
