'use server';

// import Image from "next/image";
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
import Image from "next/image";

export default async function Page({ params }: { params: { coin_name: string } }) {

  const coin = params.coin_name;
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true');
  const data = await response.json();
  // const data = { "bitcoin": { "inr" : 5478160, "inr_24h_change" : -1.7221522124515098, "usd" : 66154, "usd_24h_change" : -1.646032274609119 } };
  
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center bg-gray-100">
      {/* <div>{params.coin_name}</div> */}
      <Locator  />

      <div className="px-3 w-full flex items-center gap-3 font-semibold">
        <Image className="rounded-full w-9" src="/bitcoin.png" alt="Bitcoin" width={100} height={100} />
        <div className="text-2xl"><p>Bitcoin</p></div>
        <div className="text-sm text-gray-500"><p>BTC</p></div>
        <div className="mx-4 text-white font-medium bg-slate-500/90 px-2 py-1 rounded"><p>Rank #1</p></div>
      </div>

      <div  className="min-h-screen max-w-7xl w-full flex flex-col md:flex-row justify-between">

        <div  id="left" className="w-full" >
          <PriceChart coin={params.coin_name} />
          <Tabs />
          <PerformanceCard />
          <SentimentCard />
          <AboutCard />
          <TeamCard />
          <div className="hidden md:block"><MayLike /></div>
        </div>


        <div id="right" className="w-full md:max-w-80 flex flex-col gap-8" >
          <GetStartedCard />
          <TrendingCoinsCard />
        </div>
      </div>
    </main>
  );
}
