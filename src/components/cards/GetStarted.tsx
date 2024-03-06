import { ArrowRight, Triangle } from "lucide-react";
import Image from "next/image";

export default function GetStartedCard() {
    return (
        <div id="get-started" className="mx-4 p-6 md:max-w-96 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 rounded-xl text-white flex flex-col items-center">
            <div className="flex md:flex-col flex-col-reverse">
            <div className="flex flex-col items-center">
                <div className="text-xl md:text-lg font-semibold text-center">
                    <p className="md:hidden block">Get Started with KoinX for FREE</p>
                    <p className="hidden md:block">Get Started with KoinX</p>
                    <p className="hidden md:block">for FREE</p>
                </div>
                <div className="mb-4 md:mb-0 mt-4 text-xs px-4 leading-5	"><p>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p></div>
            </div>
            <div className="mx-16 md:mt-8 mb-4"><Image src='/mock_svg.png' alt="mock_svg" width={800} height={800} /></div>
            </div>
            <div className="mb-3 py-3 px-4 flex text-xs text-black font-semibold bg-white rounded-lg">
            <button className="flex items-center gap-3">
                <span>Get Started for FREE </span>
                <span><ArrowRight size={16} strokeWidth={2} /></span>
            </button>
            </div>
        </div>
    )
}