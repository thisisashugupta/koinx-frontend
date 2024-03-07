import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { CarouselItem } from "@/components/ui/carousel"
import { PriceChangeIndicatorSmall } from "@/components/ui/PriceChangeIndicator";

interface MayLikeCardProps {
  name: string;
  price_change_percentage_24h: number;
  price: string;
  graph: string;
  image_url: string;
}

export default function MayLikeCard({name, price_change_percentage_24h, price, graph, image_url} : MayLikeCardProps ) {
  return (
    <CarouselItem className="basis-2/5 md:basis-1/2 lg:basis-1/3">
        <Card>
          <CardContent className="p-3 flex flex-col items-start justify-start">
            <div className="flex flex-wrap items-center gap-2">
              <img
                src={image_url}
                alt="Bitcoin"
                className="w-5 h-5"/>
              <p className="text-xs">{name}</p>
              <div className="text-3xs"><PriceChangeIndicatorSmall priceChange={price_change_percentage_24h} /></div>
            </div>
            <div className="mt-2 text-sm font-medium"><p>{price}</p></div>
            <div className="mx-auto">
              <Image 
                src={graph} 
                alt={graph} 
                width={100}
                height={100}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
    </CarouselItem>
  )
}
