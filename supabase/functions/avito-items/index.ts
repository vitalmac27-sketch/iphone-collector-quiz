import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AvitoItem {
  id: number;
  title: string;
  price: number;
  url: string;
  status: string;
  address?: string;
  category?: {
    id: number;
    name: string;
  };
}

interface AvitoItemsResponse {
  resources: AvitoItem[];
  meta: {
    page: number;
    per_page: number;
  };
}

interface EnrichedItem extends AvitoItem {
  images: string[];
  description?: string;
}

async function getAccessToken(): Promise<string> {
  const clientId = Deno.env.get('AVITO_CLIENT_ID');
  const clientSecret = Deno.env.get('AVITO_CLIENT_SECRET');

  if (!clientId || !clientSecret) {
    throw new Error('Avito credentials not configured');
  }

  console.log('Getting Avito access token...');

  const response = await fetch('https://api.avito.ru/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Token error:', response.status, errorText);
    throw new Error(`Failed to get access token: ${response.status}`);
  }

  const data = await response.json();
  console.log('Access token received successfully');
  return data.access_token;
}

async function getItems(accessToken: string, modelFilter?: string): Promise<AvitoItem[]> {
  console.log('Fetching items from Avito...');
  
  const params = new URLSearchParams({
    per_page: '50',
    status: 'active',
  });

  const response = await fetch(`https://api.avito.ru/core/v1/items?${params}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Items error:', response.status, errorText);
    throw new Error(`Failed to get items: ${response.status}`);
  }

  const data: AvitoItemsResponse = await response.json();
  console.log(`Fetched ${data.resources?.length || 0} items`);

  let items = data.resources || [];

  // Фильтруем по модели если указана
  if (modelFilter) {
    const filterLower = modelFilter.toLowerCase();
    items = items.filter(item => 
      item.title.toLowerCase().includes(filterLower)
    );
    console.log(`Filtered to ${items.length} items matching "${modelFilter}"`);
  }

  return items;
}

async function scrapeItemImages(url: string): Promise<{ images: string[], description?: string }> {
  try {
    console.log('Scraping images from:', url);
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch page:', response.status);
      return { images: [] };
    }

    const html = await response.text();
    
    // Извлекаем изображения из HTML
    const images: string[] = [];
    
    // Паттерн для изображений в JSON-LD или data атрибутах
    const jsonLdMatch = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
    if (jsonLdMatch) {
      for (const match of jsonLdMatch) {
        try {
          const jsonContent = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
          const json = JSON.parse(jsonContent);
          if (json.image) {
            if (Array.isArray(json.image)) {
              images.push(...json.image);
            } else if (typeof json.image === 'string') {
              images.push(json.image);
            }
          }
        } catch (e) {
          // Игнорируем ошибки парсинга JSON
        }
      }
    }
    
    // Паттерн для картинок в галерее Avito
    const imgPatterns = [
      /data-url="(https:\/\/[^"]*\.avito\.st[^"]*\.jpe?g[^"]*)"/gi,
      /src="(https:\/\/[^"]*\.avito\.st[^"]*\.jpe?g[^"]*)"/gi,
      /"(https:\/\/\d+\.img\.avito\.st\/image\/[^"]+)"/gi,
      /content="(https:\/\/[^"]*avito[^"]*\.(jpg|jpeg|png|webp)[^"]*)"/gi,
    ];
    
    for (const pattern of imgPatterns) {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        const imgUrl = match[1];
        if (imgUrl && !images.includes(imgUrl) && 
            (imgUrl.includes('.jpg') || imgUrl.includes('.jpeg') || imgUrl.includes('.png') || imgUrl.includes('.webp') || imgUrl.includes('avito.st/image'))) {
          // Предпочитаем большие изображения
          const largeUrl = imgUrl.replace(/\/\d+x\d+/, '/1280x960').replace('140x105', '640x480');
          images.push(largeUrl);
        }
      }
    }

    // Извлекаем описание
    let description: string | undefined;
    const descMatch = html.match(/itemprop="description"[^>]*content="([^"]*)"/i) || 
                      html.match(/<div[^>]*class="[^"]*description[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (descMatch) {
      description = descMatch[1]?.replace(/<[^>]+>/g, '').trim().substring(0, 500);
    }

    console.log(`Found ${images.length} images for ${url}`);
    
    // Возвращаем уникальные изображения (до 5 штук)
    const uniqueImages = [...new Set(images)].slice(0, 5);
    return { images: uniqueImages, description };
  } catch (error) {
    console.error('Error scraping images:', error);
    return { images: [] };
  }
}

async function enrichItemsWithImages(items: AvitoItem[]): Promise<EnrichedItem[]> {
  console.log(`Enriching ${items.length} items with images...`);
  
  // Обрабатываем параллельно, но не более 5 одновременно
  const batchSize = 5;
  const enrichedItems: EnrichedItem[] = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const promises = batch.map(async (item) => {
      const { images, description } = await scrapeItemImages(item.url);
      return {
        ...item,
        images,
        description,
      };
    });
    
    const results = await Promise.all(promises);
    enrichedItems.push(...results);
    
    // Небольшая пауза между батчами чтобы не нагружать сервер
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return enrichedItems;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { model, includeImages = true } = await req.json();
    
    console.log('Request received, model filter:', model, 'includeImages:', includeImages);

    const accessToken = await getAccessToken();
    let items = await getItems(accessToken, model);
    
    // Ограничиваем до 10 объявлений для парсинга изображений
    items = items.slice(0, 10);
    
    let responseItems;
    if (includeImages && items.length > 0) {
      responseItems = await enrichItemsWithImages(items);
    } else {
      responseItems = items.map(item => ({
        ...item,
        images: [],
      }));
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        items: responseItems.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          url: item.url,
          status: item.status,
          address: item.address,
          images: (item as EnrichedItem).images || [],
          description: (item as EnrichedItem).description,
        }))
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in avito-items function:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
