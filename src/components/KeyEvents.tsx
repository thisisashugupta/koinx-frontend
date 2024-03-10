// @/componenets/KeyEvents.tsx
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

  const colors = ['bg-red', 'bg-yellow', 'bg-green', 'bg-indigo', 'bg-fuchsia'];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-full"
    >
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          <CarouselItem 
          // key={index} 
          className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className={`m-1 bg-red-300/20`}>
                <CardContent className="flex items- justify-between p-3 pb-6 gap-3">
                  <div>
                    <div className={`w-8 h-8 rounded-full bg-red-500`}></div>
                  </div>
                  <div className="w-full">
                    <div className="text-xs leading-tight font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim </div>
                    <div className="text-2xs leading-snug text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores fuga vitae similique ullam officiis praesentium architecto. Dolore odio </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          {/* ))} */}

          <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
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

          <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="m-1 bg-yellow-300/20">
                <CardContent className="flex items- justify-between p-3 pb-6 gap-3">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                  </div>
                  <div className="w-full">
                    <div className="text-xs leading-tight font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    <div className="text-2xs leading-snug text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores fuga vitae similique ullam officiis praesentium architecto. Dolore odio </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>
                
            <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="m-1 bg-indigo-300/20">
                <CardContent className="flex items- justify-between p-3 pb-6 gap-3">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                  </div>
                  <div className="w-full">
                    <div className="text-xs leading-tight font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    <div className="text-2xs leading-snug text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores fuga vitae similique ullam officiis praesentium architecto. Dolore odio </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>
                
            <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="m-1 bg-fuchsia-300/20">
                <CardContent className="flex items- justify-between p-3 pb-6 gap-3">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-fuchsia-500"></div>
                  </div>
                  <div className="w-full">
                    <div className="text-xs leading-tight font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    <div className="text-2xs leading-snug text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores fuga vitae similique ullam officiis praesentium architecto. Dolore odio </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>
        
      </CarouselContent>
    </Carousel>
  )
}
