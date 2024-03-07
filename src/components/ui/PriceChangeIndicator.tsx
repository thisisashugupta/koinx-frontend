import { Triangle } from "lucide-react";

function UpArrow({size = 12, strokeWidth = 2}: {size?: number, strokeWidth?: number}) {
    return (
        <Triangle strokeWidth={strokeWidth} size={size} color="green" />
    );
}

function DownArrow({size = 12, strokeWidth = 2}: {size?: number, strokeWidth?: number}) {
    return (
        <Triangle strokeWidth={strokeWidth} size={size} color="red" />
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
        <div className="relative top-[6px]">{priceChange > 0 ? <UpArrow /> : <DownArrow />}</div>
        <p>{priceChange.toFixed(2)}%</p>
        </div>
    );

}

export function PriceChangeIndicatorSmall({ priceChange }: { priceChange: number }) {

    let bgColor = "bg-red-300/30";
    let textColor = "text-red-600";

    if (priceChange > 0) {
        bgColor = "bg-green-300/30";
        textColor = "text-green-600";
    }

    return (          
        <div className={`px-[4px] py-[3px] rounded ${bgColor} font-medium ${textColor} flex gap-[2px]`}>
        <p>{priceChange.toFixed(2)}%</p>
        </div>
    );

}