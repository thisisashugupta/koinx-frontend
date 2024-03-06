import { Triangle } from "lucide-react";

function UpArrow() {
    return (
        <div className="relative top-[6px]"><Triangle strokeWidth={2} size={12} color="green" /></div>
    );
}

function DownArrow() {
    return (
        <div className="relative top-[6px]"><Triangle strokeWidth={2} size={12} color="red" /></div>
    );
}

export default function PriceChangeIndicator({ priceChange }: { priceChange: number }) {

    let bgColor = "bg-red-300/30";
    let textColor = "text-red-600";

    if (priceChange > 0) {
        bgColor = "bg-green-300/30";
        textColor = "text-green-600";
    }

    return (          
        <div className={`px-2 py-1 rounded ${bgColor} font-medium ${textColor} flex gap-1`}>
        {priceChange > 0 ? <UpArrow /> : <DownArrow />}
        <p>{priceChange.toFixed(2)}%</p>
        </div>
    );

}
