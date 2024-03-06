import Heading from "@/components/ui/Heading";
import { CarouselSize } from "./ui/CarouselSize";

function MayLike() {
  return (
    <div>
      <Heading>You May Also Like</Heading>
      <div className="flex justify-center"><CarouselSize /></div>
    </div>
  )
}

export default MayLike
