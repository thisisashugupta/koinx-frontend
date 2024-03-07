import PriceChangeIndicator from "@/components/ui/PriceChangeIndicator";
// import {api_response} from "@/lib/sample_response"

interface TrendingCoin {
  item: {
    coin_id: string;
    name: string;
    symbol: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

export default async function TrendingCoinsCard() {

  let data;

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    data = await response.json();
    // data = api_response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data in TrendingCoins.tsx');
  }

  const coins = data.coins.slice(0, 3);
    
    return (
        <div id="trending-coins-card" className="md:mx-4 px-4 py-6 md:rounded-xl bg-white space-y-6">
          <div className="text-2xl font-semibold"><p>Trending Coins (24h)</p></div>
          <div id="trending-coins-list" className="space-y-4">
            {coins.slice(0, 3).map((coin : TrendingCoin) => (
              <div key={`trending_coins_${coin.item.coin_id}`} className="flex justify-between">
                <div className="font-medium"><p>{coin?.item?.name} ({coin?.item?.symbol})</p></div>
                <PriceChangeIndicator priceChange={coin?.item?.data?.price_change_percentage_24h?.usd} />
              </div>
            ))}
          </div>
        </div>
    );
}