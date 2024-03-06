import { ArrowRight, Triangle } from "lucide-react";

export default function TrendingCoinsCard() {
    return (
        <div id="trending-coins-card" className="md:mx-4 px-4 py-6 md:rounded-xl bg-white space-y-6">
          <div className="text-2xl font-semibold"><p>Trending Coins (24h)</p></div>
          <div id="trending-coins-list" className="space-y-4">
            <div className="flex justify-between">
              <div className="font-medium"><p>Ethereum (ETH)</p></div>
              <div className="px-2 py-1 rounded bg-green-300/30 font-medium text-green-600 flex gap-1">
                <div className="relative top-[6px]"><Triangle strokeWidth={2} size={12} color="green" /></div>
                <p>8.21%</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-medium"><p>Ethereum (ETH)</p></div>
              <div className="px-2 py-1 rounded bg-green-300/30 font-medium text-green-600 flex gap-1">
                <div className="relative top-[6px]"><Triangle strokeWidth={2} size={12} color="green" /></div>
                <p>8.21%</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-medium"><p>Ethereum (ETH)</p></div>
              <div className="px-2 py-1 rounded bg-green-300/30 font-medium text-green-600 flex gap-1">
                <div className="relative top-[6px]"><Triangle strokeWidth={2} size={12} color="green" /></div>
                <p>8.21%</p>
              </div>
            </div>
          </div>
        </div>
    );
}