import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from './ui/card'
const TestimonialCarousel = () => {
    return (
        <Carousel className='w-full h-auto flex justify-center items-center '>
            <CarouselContent className='w-full h-auto flex justify-center items-center '>
                <CarouselItem className='w-full h-auto flex justify-center items-center '>
                    <Card className='flex flex-col gap-3 max-w-sm w-auto justify-center items-center shadow-none border-0 text-background bg-transparent'>
                        <h2 className='font-mono text-4xl '>Sara A.</h2>
                        <p className=' text-xl text-center'>Best coffee I’ve ever had! The Morning Glory blend is my daily ritual now."</p>
                        <div className='flex gap-6 pt-7 text-background'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Card>
                </CarouselItem>
                <CarouselItem className='max-w-sm w-auto h-auto flex justify-center items-center '>
                    <Card className='flex flex-col gap-3 max-w-sm w-auto justify-center items-center shadow-none border-0 text-background bg-transparent'>
                        <h2 className='font-mono text-4xl '>Sara A.</h2>
                        <p className=' text-xl text-center'>Best coffee I’ve ever had! The Morning Glory blend is my daily ritual now."</p>
                        <div className='flex gap-6 pt-7 text-background'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Card>
                </CarouselItem>
                <CarouselItem className='max-w-sm w-auto h-auto flex justify-center items-center '>
                    <Card className='flex flex-col gap-3 max-w-sm w-auto justify-center items-center shadow-none border-0 text-background bg-transparent'>
                        <h2 className='font-mono text-4xl '>Sara A.</h2>
                        <p className=' text-xl text-center'>Best coffee I’ve ever had! The Morning Glory blend is my daily ritual now."</p>
                        <div className='flex gap-6 pt-7 text-background'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Card>
                </CarouselItem>
            </CarouselContent>

        </Carousel>
    )
}

export default TestimonialCarousel
