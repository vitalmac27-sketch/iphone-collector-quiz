import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Home, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface ModelReview {
  name: string;
  text: string;
  rating: number;
  date: string;
}

interface RelatedModel {
  name: string;
  path: string;
  label?: string;
}

interface ModelPageSeoBlockProps {
  modelName: string;
  reviews: ModelReview[];
  relatedModels: RelatedModel[];
  additionalContent: React.ReactNode;
}

const ModelPageSeoBlock = ({ modelName, reviews, relatedModels, additionalContent }: ModelPageSeoBlockProps) => {
  const avatarColors = [
    "bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-rose-500",
    "bg-amber-500", "bg-cyan-500", "bg-indigo-500", "bg-pink-500",
    "bg-teal-500", "bg-orange-500", "bg-lime-500", "bg-fuchsia-500",
  ];

  return (
    <>
      {/* Extended SEO Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {additionalContent}
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 text-center">Отзывы покупателей {modelName} в Казани</h2>
        <p className="text-sm text-muted-foreground text-center mb-8">
          {reviews.length} отзывов • Средняя оценка 5.0 из 5
        </p>
        <div className="max-w-5xl mx-auto px-8">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {reviews.map((review, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:border-primary/20 transition-colors h-full">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${avatarColors[i % avatarColors.length]}`}>
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-foreground text-sm block truncate">{review.name}</span>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex gap-0.5 flex-shrink-0">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground flex-1">{review.text}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </section>

      {/* Strong back-link to homepage */}
      <section className="container mx-auto px-4 py-8">
        <Card className="border-primary/20 bg-accent/5 max-w-4xl mx-auto">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">Все модели iPhone в одном калькуляторе</h3>
              <p className="text-sm text-muted-foreground">Сравните цены, выберите состояние и рассчитайте стоимость с учётом Trade-in — iPhone 13–17 Pro Max</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button asChild variant="outline" size="sm">
                <Link to="/" className="gap-2"><Home className="w-4 h-4" />Каталог</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/#calculator" className="gap-2"><Calculator className="w-4 h-4" />Калькулятор</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cross-links */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Смотрите также</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {relatedModels.map((model) => (
            <Link
              key={model.path}
              to={model.path}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-accent/5 transition-all group"
            >
              <div>
                <span className="font-medium group-hover:text-primary transition-colors">{model.name}</span>
                {model.label && (
                  <span className="block text-xs text-muted-foreground">{model.label}</span>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
          <Link
            to="/"
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-accent/5 transition-all group"
          >
            <div>
              <span className="font-medium group-hover:text-primary transition-colors">Все модели iPhone</span>
              <span className="block text-xs text-muted-foreground">Калькулятор цен</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ModelPageSeoBlock;
