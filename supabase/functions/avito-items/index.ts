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
    per_page: '100',
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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { model } = await req.json();
    
    console.log('Request received, model filter:', model);

    const accessToken = await getAccessToken();
    const items = await getItems(accessToken, model);

    return new Response(
      JSON.stringify({ 
        success: true, 
        items: items.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          url: item.url,
          status: item.status,
          address: item.address,
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
