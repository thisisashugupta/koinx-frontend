import WhiteCard from "@/components/ui/WhiteCard";
import Title from "@/components/ui/Title";
import InfoIcon from '@/components/icons/InfoIcon'

export default function PerformanceCard() {
    return (
        <WhiteCard>
            <Title>Performance</Title>

            {/*  */}
            <div className="flex">
                <div><p className="w-max mb-2 text-sm text-gray-700">Today&apos;s Low</p><p>46,930.22</p></div>
                <div className="my-auto w-full p-4">
                    <div className="h-[0.4rem] w-full rounded-xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                </div>
                <div className="flex flex-col items-end"><p className="w-max mb-2 text-sm text-gray-700">Today&apos;s High</p><p>49,343.83</p></div>
            </div>
            <div className="w-full h-7"></div>
            <div className="flex">
                <div><p className="w-max mb-2 text-sm text-gray-700">52W Low</p><p>16,930.22</p></div>
                <div className="my-auto w-full p-6">
                    <div className="h-[0.4rem] w-full rounded-xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                </div>
                <div className="flex flex-col items-end"><p className="w-max mb-2 text-sm text-gray-700">52W High</p><p>49,743.83</p></div>
            </div>

            {/*  */}
            <div>
                <div className="flex gap-2 mt-8 text-xl font-semibold">
                    <p>Fundamentals</p>
                    <InfoIcon/>
                </div>
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">Bitcoin Price</p></div>
                    <div><p className="text-sm font-semibold">23.45</p></div>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">24h Low / 24h High</p></div>
                    <div><p className="text-sm font-semibold">$16,382.07 / $16,874.12</p></div>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">7d Low / 7d High</p></div>
                    <div><p className="text-sm font-semibold">$16,382.07 / $16,874.12</p></div>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">Trading Volume</p></div>
                    <div><p className="text-sm font-semibold">$23,249,202,782</p></div>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">Market Cap Rank</p></div>
                    <div><p className="text-sm font-semibold"></p></div>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">Market Cap</p></div>
                    <div><p className="text-sm font-semibold">$323,507,290,047</p></div>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">Market Cap Dominance</p></div>
                    <div><p className="text-sm font-semibold">38.343%</p></div>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <div><p className="text-sm text-gray-500">Volume / Market Cap</p></div>
                    <div><p className="text-sm font-semibold">0.0718</p></div>
                </div>
                <hr />
                <div className="flex items-center justify-between my-3">
                    <div><p className="text-sm text-gray-500">All-Time High</p></div>
                    <div className="flex flex-col items-end"><p className="text-sm font-semibold">$69,044.77 <span className="text-red-500">75.6%</span></p><p className="text-xs">Nov 10, 2021 (about 1 year)</p></div>
                </div>
                <hr />
                <div className="flex items-center justify-between my-3">
                    <div><p className="text-sm text-gray-500">All-Time Low</p></div>
                    <div className="flex flex-col items-end"><p className="text-sm font-semibold">$67.81 <span className="text-green-500">24729.1%</span></p><p className="text-xs">Jul 06, 2013 (over 9 years)</p></div>
                </div>
                <hr />

            </div>
        </WhiteCard>
    );
}