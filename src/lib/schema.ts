// Shared JSON-LD Schema.org data for SEO

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ЭПЛ-КОЛЛЕКЦИЯ",
  "description": "Официальный магазин iPhone в Казани. Новые и б/у Айфоны, рассрочка 0%, гарантия 1 год, бесплатная доставка по всем районам.",
  "url": "https://apple-collecty.ru/",
  "telephone": "+79992673933",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Сибгата Хакима, 40а, офис 7",
    "addressLocality": "Казань",
    "addressRegion": "Республика Татарстан",
    "postalCode": "420081",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.814578,
    "longitude": 49.134648
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "13:00",
    "closes": "20:00"
  },
  "image": "https://apple-collecty.ru/og-apple-collection.jpg",
  "priceRange": "₽₽₽",
  "sameAs": [
    "https://wa.me/79992673933",
    "https://t.me/apple_collecty",
    "https://vk.ru/apple_collecty",
    "https://www.avito.ru/brands/i141094380"
  ]
};

export const createProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  url: string;
  lowPrice: string;
  highPrice: string;
  offerCount: string;
  reviewCount: string;
  reviews: Array<{ name: string; date: string; text: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "image": product.image,
  "description": product.description,
  "sku": product.url.replace("https://apple-collecty.ru/", ""),
  "brand": { "@type": "Brand", "name": "Apple" },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": product.lowPrice,
    "highPrice": product.highPrice,
    "priceCurrency": "RUB",
    "offerCount": product.offerCount,
    "availability": "https://schema.org/InStock",
    "url": product.url,
    "seller": { "@type": "Organization", "name": "ЭПЛ-КОЛЛЕКЦИЯ" }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": product.reviewCount,
    "bestRating": "5"
  },
  "review": product.reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "datePublished": r.date,
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "reviewBody": r.text
  }))
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": item.url
  }))
});
