import WhiteCard from "@/components/ui/WhiteCard";
import Title from "@/components/ui/Title";
import InfoIcon from '@/components/icons/InfoIcon';
import KeyEvents from "@/components/KeyEvents";

export default function SentimentCard() {
    return (
        <WhiteCard>
            <Title>Sentiment</Title>

            <div className="flex gap-2 mt-2 text-xl font-semibold">
                <p>Key Events</p>
                <InfoIcon/>
            </div>

            <KeyEvents />

            <div className="flex gap-2 mt-2 text-xl font-semibold">
                <p>Analyst Estiamtes</p>
                <InfoIcon/>
            </div>

            <div className="mb-6 flex pt-6">
                <div className="rounded-full min-w-32 aspect-square text-green-600 \ bg-green-200/30 flex items-center justify-center">
                    <p className="text-4xl font-medium">76</p>
                    <span className="ml-1 font-base">%</span>
                </div>
                <div className="w-full flex flex-col justify-between p-3">
                    <div id="row-1" className="flex justify-between gap-8">
                        <div className="absolute w-12 text-gray-500">Buy</div>
                        <div className="ml-12 w-full flex justify-start items-center gap-3"><div className="max-w-sm h-2 w-full bg-green-700/70 rounded-sm"></div><span className="text-gray-500">76%</span></div>
                    </div>
                    <div id="row-2"className="flex justify-between gap-6">
                        <div className="absolute w-12 text-gray-500">Hold</div>
                        <div className="ml-12 w-full flex justify-start items-center gap-3"><div className="max-w-sm h-2 w-10 bg-gray-300 rounded-sm"></div><span className="text-gray-500">8%</span></div>
                    </div>
                    <div id="row-3"className="flex justify-between gap-8">
                        <div className="absolute w-12 text-gray-500">Sell</div>
                        <div className="ml-12 w-full flex justify-start items-center gap-3"><div className="max-w-sm h-2 w-12 bg-red-500 rounded-sm"></div><span className="text-gray-500">16%</span></div>
                    </div>
                </div>
            </div>

            {/* <div> */}
                {/* <div className="flex gap-2 mt-8 text-xl font-semibold"> */}
                    {/* <p>Fundamentals</p> */}
                    {/* <InfoIcon/> */}
                {/* </div> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">Bitcoin Price</p></div> */}
                    {/* <div><p className="text-sm font-semibold">23.45</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">24h Low / 24h High</p></div> */}
                    {/* <div><p className="text-sm font-semibold">$16,382.07 / $16,874.12</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">7d Low / 7d High</p></div> */}
                    {/* <div><p className="text-sm font-semibold">$16,382.07 / $16,874.12</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">Trading Volume</p></div> */}
                    {/* <div><p className="text-sm font-semibold">$23,249,202,782</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">Market Cap Rank</p></div> */}
                    {/* <div><p className="text-sm font-semibold"></p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">Market Cap</p></div> */}
                    {/* <div><p className="text-sm font-semibold">$323,507,290,047</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">Market Cap Dominance</p></div> */}
                    {/* <div><p className="text-sm font-semibold">38.343%</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">Volume / Market Cap</p></div> */}
                    {/* <div><p className="text-sm font-semibold">0.0718</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex items-center justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">All-Time High</p></div> */}
                    {/* <div className="flex flex-col items-end"><p className="text-sm font-semibold">$69,044.77 <span className="text-red-500">75.6%</span></p><p className="text-xs">Nov 10, 2021 (about 1 year)</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="flex items-center justify-between my-3"> */}
                    {/* <div><p className="text-sm text-gray-500">All-Time Low</p></div> */}
                    {/* <div className="flex flex-col items-end"><p className="text-sm font-semibold">$67.81 <span className="text-green-500">24729.1%</span></p><p className="text-xs">Jul 06, 2013 (over 9 years)</p></div> */}
                {/* </div> */}
                {/* <hr /> */}
            {/* </div> */}
        </WhiteCard>
    );
}