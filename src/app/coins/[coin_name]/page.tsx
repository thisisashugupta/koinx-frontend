'use server';

import Locator from "@/components/Locator";
import PerformanceCard from "@/components/cards/Performance";
import GetStartedCard from "@/components/cards/GetStarted";
import TrendingCoinsCard from "@/components/cards/TrendingCoins";
import PriceChart from "@/components/cards/PriceChart";
import SentimentCard from "@/components/cards/Sentiment";
import AboutCard from "@/components/cards/About";
import TeamCard from "@/components/cards/Team";
import MayLike from "@/components/MayLike";
import Tabs from "@/components/Tabs";
import CoinInfo from "@/components/CoinInfo";

export default async function Page({ params }: { params: { coin_name: string } }) {

  const coin = params.coin_name;
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true');
  const data = await response.json();
  // const data = { "bitcoin": { "inr" : 5478160, "inr_24h_change" : -1.7221522124515098, "usd" : 66154, "usd_24h_change" : -1.646032274609119 } };
  
  return (
    <div className="min-h-screen min-w-screen flex justify-center bg-gray-100">
    <main className="w-full flex flex-col items-center">

      {/* <div>{params.coin_name}</div> */}

      <div className="max-w-7xl px-4 py-6 w-full"><Locator  /></div>

      <div className="md:hidden block px-3 pb-3 w-full flex items-center gap-3 font-semibold">
        <CoinInfo />
      </div>

      <div  className="max-w-7xl min-h-screen w-full flex flex-col md:flex-row md:flex-row justify-between gap-4">
        <div id="left" className="md:ml-3 p-3 md:p-0 w-full space-y-4 mb-6" >
          <PriceChart coin={params.coin_name} />
          <Tabs />
          <PerformanceCard />
          <SentimentCard />
          <AboutCard />
          <TeamCard />
        </div>
        <div id="right" className="md:mr-3 w-full md:max-w-[21rem] md:min-w-[21rem] flex flex-col gap-8" >
          <div className="px-3 md:px-0"><GetStartedCard /></div>
          <TrendingCoinsCard />
        </div>
      </div>
      
      <div className="w-full hidden md:block">
        <div className="px-4 py-8 w-full bg-white flex flex-col items-center">
          <MayLike title="You May Also Like" />
          <MayLike title="Trending Coins" />
        </div>
      </div>

    </main>
    </div>
  );
}
