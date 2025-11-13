import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadData {
  name: string;
  whatsapp: string;
  telegram: string;
  model: string;
  storage: string;
  condition: string;
  battery?: string;
  simType: string;
  paymentMethod: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadData = await req.json();
    
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram credentials not configured');
    }

    // Форматируем сообщение
    const conditionText = leadData.condition === "new" ? "Новый" : "Б/У";
    const paymentText = leadData.paymentMethod === "cash" ? "Наличными" : "В рассрочку 0%";
    
    let message = `🔔 *Новая заявка на iPhone*\n\n`;
    message += `👤 *Имя:* ${leadData.name}\n`;
    message += `📱 *WhatsApp:* ${leadData.whatsapp}\n`;
    message += `✈️ *Telegram:* ${leadData.telegram}\n\n`;
    message += `📲 *Модель:* ${leadData.model}\n`;
    message += `💾 *Память:* ${leadData.storage}\n`;
    message += `📦 *Состояние:* ${conditionText}\n`;
    
    if (leadData.condition === "used" && leadData.battery) {
      message += `🔋 *Батарея:* ${leadData.battery}%\n`;
    }
    
    message += `📡 *SIM:* ${leadData.simType}\n`;
    message += `💳 *Оплата:* ${paymentText}\n`;

    console.log('Sending to Telegram:', { chatId: TELEGRAM_CHAT_ID, message });

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', result);
      throw new Error('Failed to send Telegram message');
    }

    console.log('Telegram message sent successfully:', result);

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in send-telegram function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
