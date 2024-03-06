'use server';

import PriceChangeIndicator from "@/components/ui/PriceChangeIndicator";
import TradingViewWidget from "@/components/cards/TradingViewWidget.jsx";
import WhiteCard from "@/components/ui/WhiteCard";
import Title from "@/components/ui/Title";

export default async function PriceChart({ coin }: { coin: string }) {

    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true');
    const data = await response.json();
    // const data = { "bitcoin": { "inr" : 5478160, "inr_24h_change" : -1.7221522124515098, "usd" : 66154, "usd_24h_change" : -1.646032274609119 } };

    return (
        <WhiteCard>
          <div className="flex justify-between">
            <Title>${data[`${coin}`].usd.toLocaleString('en-US')}</Title>
            <div className="flex">
              <div><PriceChangeIndicator priceChange={data[`${coin}`].usd_24h_change} /></div>
              <div className="mt-1 ml-4 mr-6 text-gray-500 text-sm font-medium">(24H)</div>
            </div>
          </div>
          <div className="font-medium"><p>₹{data[`${coin}`].inr.toLocaleString('en-IN')}</p></div>
          <hr className="mt-6 mb-4"/>
          <div id="price-chart">
            <div><p>Bitcoin Price Chart (USD)</p></div>
            <div className="flex space-x-3 justify-start">
              <p>1H</p>
              <p>24H</p>
              <p>4D</p>
              <p>1M</p>
              <p>3M</p>
              <p>6M</p>
              <p>1Y</p>
              <p>ALL</p>
            </div>
            {/* PRICE CHART */}
            <div className="my-4 aspect-video overflow-hidden"><TradingViewWidget /></div>
          </div>
        </WhiteCard>
    );
}