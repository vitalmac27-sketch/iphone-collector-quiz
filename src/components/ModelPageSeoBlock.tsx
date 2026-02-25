import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

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
  return (
    <>
      {/* Extended SEO Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {additionalContent}
        </div>
      </section>

      {/* Reviews */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Отзывы покупателей {modelName} в Казани</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <Card key={i} className="hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${["bg-blue-500","bg-emerald-500","bg-violet-500","bg-rose-500","bg-amber-500","bg-cyan-500","bg-indigo-500","bg-pink-500","bg-teal-500"][i % 9]}`}>
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground text-sm">{review.name}</span>
                    <span className="block text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
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
