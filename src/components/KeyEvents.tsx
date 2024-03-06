import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function KeyEvents() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="bg-blue-300/20">
                <CardContent className="flex items- justify-between p-2 gap-3">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="w-full">
                    <div className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores fuga vitae similique ullam officiis praesentium architecto. Dolore odio </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
