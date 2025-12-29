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

interface AvitoListingsProps {
  model: string;
}

const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  if (images.length === 0) {
    return (
      <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
        Нет фото
      </div>
    );
  }

  const validImages = images.filter((_, i) => !imageError[i]);
  
  if (validImages.length === 0) {
    return (
      <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
        Нет фото
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-32 rounded-lg overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt={`${title} - фото ${currentIndex + 1}`}
        className="w-full h-full object-cover"
        onError={() => setImageError(prev => ({ ...prev, [currentIndex]: true }))}
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const AvitoListings = ({ model }: AvitoListingsProps) => {
  const [items, setItems] = useState<AvitoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Fetching Avito items for model:", model);
      
      const { data, error: fnError } = await supabase.functions.invoke('avito-items', {
        body: { model, includeImages: true }
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
    if (model) {
      fetchItems();
    }
  }, [model]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="space-y-4 mt-6">
        <h3 className="text-lg font-semibold text-foreground">
          Загрузка объявлений Avito...
        </h3>
        <p className="text-sm text-muted-foreground">
          Получаем фотографии товаров...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="p-4">
              <Skeleton className="h-32 w-full mb-3 rounded-lg" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-6 w-1/2 mb-2" />
              <Skeleton className="h-3 w-1/3" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
        <div className="flex items-center gap-2 text-destructive mb-2">
          <AlertCircle className="h-5 w-5" />
          <span className="font-medium">Ошибка загрузки</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{error}</p>
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
    );
  }

  if (items.length === 0) {
    return (
      <div className="mt-6 p-4 bg-muted/50 rounded-lg text-center">
        <p className="text-muted-foreground">
          Нет активных объявлений для "{model}"
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchItems}
          className="mt-3 gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Обновить
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Наличие на Avito ({items.length})
        </h3>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
        {items.map((item) => (
          <Card 
            key={item.id} 
            className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
            onClick={() => window.open(item.url, '_blank')}
          >
            <ImageCarousel images={item.images} title={item.title} />
            
            <div className="p-4">
              <h4 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              
              <p className="text-xl font-bold text-primary mb-2">
                {formatPrice(item.price)}
              </p>
              
              {item.description && (
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {item.description}
                </p>
              )}
              
              {item.address && (
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                  📍 {item.address}
                </p>
              )}
              
              <div className="flex items-center text-xs text-muted-foreground group-hover:text-primary transition-colors">
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
