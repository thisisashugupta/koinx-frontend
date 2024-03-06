import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-2/5 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  <p className="text-sm">BTC</p>
                  <span className="font-semibold">{index + 1}</span>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6" />
      <CarouselNext className="-right-6" />
    </Carousel>
  )
}
