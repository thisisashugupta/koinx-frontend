import Heading from "@/components/ui/Heading";
import MayLikeCard from "./ui/MayLikeCard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// import {api_response} from "@/lib/sample_response"

async function MayLike() {

  let data;

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    data = await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data in MayLike.tsx');
  }

  // const data = api_response;

  const coins = [];
  for (let i = 0; i < 10; i++) {
    coins.push(data.coins[i].item);
  }
  
  return (
    <div>
      <Heading>You May Also Like</Heading>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          >
          <CarouselContent>
            {coins.slice(0, 5).map((coin, index) => (
              <MayLikeCard
                key={index}
                name={coin.symbol}
                price_change_percentage_24h={coin.data.price_change_percentage_24h.usd}
                price={coin.data.price}
                graph={coin.data.sparkline}
                image_url={coin.small}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3" />
          <CarouselNext className="-right-3" />
        </Carousel>
    </div>
  )
}

export default MayLike
