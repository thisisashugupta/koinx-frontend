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
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          <CarouselItem 
          // key={index} 
          className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="m-1 bg-blue-300/20">
                <CardContent className="flex items- justify-between p-3 pb-6 gap-3">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="w-full">
                    <div className="text-xs leading-tight font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim </div>
                    <div className="text-2xs leading-snug text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores fuga vitae similique ullam officiis praesentium architecto. Dolore odio </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem 
          // key={index} 
          className="basis-4/5 md:basis-1/2 lg:basis-1/3">
          <div>
            <Card className="m-1 bg-green-300/20">
              <CardContent className="flex items- justify-between p-3 pb-6 gap-3">
                <div>
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                </div>
                <div className="w-full">
                  <div className="text-xs leading-tight font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                  <div className="text-2xs leading-snug text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores fuga vitae similique ullam officiis praesentium architecto. Dolore odio </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
        {/* ))} */}
      </CarouselContent>
    </Carousel>
  )
}
