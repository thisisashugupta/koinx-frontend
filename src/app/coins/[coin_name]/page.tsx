import Image from "next/image";
import Locator from "@/components/Locator";
import GetStartedCard from "@/components/cards/GetStarted";
import TrendingCoinsCard from "@/components/cards/TrendingCoins";

export default function Page({ params }: { params: { coin_name: string } }) {




  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center bg-gray-100">
      {/* <div>{params.coin_name}</div> */}
      <Locator  />

      <div  className="min-h-screen max-w-7xl w-full flex flex-col md:flex-row justify-between">


        <div  id="left" className="w-full border border-red-500" >
          left
        </div>


        <div id="right" className="w-full md:max-w-80 flex flex-col gap-8" >
          <GetStartedCard />
          <TrendingCoinsCard />
        </div>
      </div>
    </main>
  );
}
