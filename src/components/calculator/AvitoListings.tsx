import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, RefreshCw, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface AvitoItem {
  id: number;
  title: string;
  price: number;
  url: string;
  status: string;
  address?: string;
  images: string[];
  description?: string;
}

const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center text-muted-foreground text-sm">
        Нет фото
      </div>
    );
  }

  return (
    <div className="relative aspect-square rounded-t-lg overflow-hidden group bg-muted">
      {/* Loading placeholder */}
      {!loadedImages[currentIndex] && !errorImages[currentIndex] && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Error state */}
      {errorImages[currentIndex] && (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
          Фото недоступно
        </div>
      )}
      
      <img
        src={images[currentIndex]}
        alt={`${title} - фото ${currentIndex + 1}`}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loadedImages[currentIndex] ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoadedImages(prev => ({ ...prev, [currentIndex]: true }))}
        onError={() => setErrorImages(prev => ({ ...prev, [currentIndex]: true }))}
        loading="lazy"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const AvitoListings = () => {
  const [items, setItems] = useState<AvitoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Fetching all Avito items");
      
      const { data, error: fnError } = await supabase.functions.invoke('avito-items', {
        body: { includeImages: true }
      });

      if (fnError) {
        console.error("Function error:", fnError);
        throw new Error(fnError.message);
      }

      if (!data.success) {
        throw new Error(data.error || "Ошибка загрузки");
      }

      console.log("Fetched items:", data.items);
      setItems(data.items || []);
    } catch (err) {
      console.error("Error fetching Avito items:", err);
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Наши объявления на Avito
          </h2>
          <p className="text-muted-foreground">
            Загружаем актуальные объявления...
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="aspect-square w-full" />
              <div className="p-3">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-5 w-2/3 mb-2" />
                <Skeleton className="h-3 w-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-6 bg-destructive/10 border border-destructive/20">
        <div className="flex flex-col items-center text-center gap-3">
          <AlertCircle className="h-8 w-8 text-destructive" />
          <div>
            <h3 className="font-medium text-foreground">Ошибка загрузки объявлений</h3>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={fetchItems}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Попробовать снова
          </Button>
        </div>
      </Card>
    );
  }

  if (items.length === 0) {
    return (
      <Card className="p-6 bg-muted/50 text-center">
        <p className="text-muted-foreground mb-3">
          Сейчас нет активных объявлений
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchItems}
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Обновить
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Наши объявления на Avito
          </h2>
          <p className="text-muted-foreground text-sm">
            {items.length} актуальных товаров
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={fetchItems}
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Обновить
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card 
            key={item.id} 
            className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-1"
            onClick={() => window.open(item.url, '_blank')}
          >
            <ImageCarousel images={item.images} title={item.title} />
            
            <div className="p-3">
              <h4 className="font-medium text-foreground text-sm line-clamp-2 mb-1.5 group-hover:text-primary transition-colors min-h-[2.5rem]">
                {item.title}
              </h4>
              
              <p className="text-lg font-bold text-primary mb-1.5">
                {formatPrice(item.price)}
              </p>
              
              {item.description && (
                <p className="text-xs text-muted-foreground line-clamp-2 mb-1.5">
                  {item.description}
                </p>
              )}
              
              {item.address && (
                <p className="text-xs text-muted-foreground line-clamp-1 mb-1.5">
                  📍 {item.address}
                </p>
              )}
              
              <div className="flex items-center text-xs text-muted-foreground group-hover:text-primary transition-colors pt-1 border-t border-border/50">
                <ExternalLink className="h-3 w-3 mr-1" />
                Открыть на Avito
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvitoListings;