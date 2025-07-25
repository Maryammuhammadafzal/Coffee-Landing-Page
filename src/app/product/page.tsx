import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const ProductPage = () => {
    const product_data = [
        {
            image : '/images/product-image-1.png',
            price: 'Price — $4.50',
            title: 'Mocha',
            description: 'Rich espresso with steamed milk and chocolate syrup, topped with whipped cream.',
            width: 152,
            height: 270
        },
        
        {
            image : '/images/product-image-2.png',
            price: 'Price — $4.75',
            title: 'Caramel Macchiato',
            description: ' Velvety espresso layered with steamed milk and drizzled with caramel.',
            width: 166,
            height: 258
        },
        
        {
            image : '/images/product-image-3.png',
            price: 'Price — $3.50',
            title: 'Café au Lait',
            description: 'Brewed coffee blended with warm milk for a smooth, classic flavor.',
            width: 162,
            height: 237
        },
        
        {
            image : '/images/product-image-4.png',
            price: 'Price — $4.00',
            title: 'Cappuccino',
            description: 'Bold espresso with equal parts steamed milk and foam for a perfect balance.',
            width: 208,
            height: 251
        },
        
        {
            image : '/images/product-image-5.png',
            price: 'Price — $3.00',
            title: 'Americano',
            description: 'Espresso diluted with hot water for a smooth, strong black coffee.',
            width: 283,
            height: 283
        },
        
        {
            image : '/images/product-image-6.png',
            price: 'Price — $4.25',
            title: 'Latte',
            description: 'Espresso with plenty of steamed milk and a light foam topping — creamy & mellow.',
            width: 181,
            height: 257
        },
        
    ];
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 xl:px-8'>
            <div className='md:px-6 px-4 w-full h-full flex flex-col justify-center gap-10 items-center'>
                <div className='content w-full justify-center items-center h-full flex gap-4'>
                    <h2 className='font-mono lg:text-5xl sm:text-4xl text-3xl pt-5 pl-4 lg:leading-16 leading-10 text-center text-primary '>Roasted to Perfection</h2>
                </div>

                <div className='xl:w-[90%] lg:w-[95%] w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto justify-center items-center h-full'>
                    {
                        product_data.map((product, index) => (
                            <Card key={index} className='flex justify-start max-sm:mx-auto min-h-[284px] items-center bg-transparent shadow-none w-auto h-full max-w-sm p-0'>
                                <CardContent className='flex flex-col justify-start h-auto items-center text-center gap-2 p-0'>
                                   <div className='flex justify-center items-end w-[290px] h-[290px] '>
                                    <Image src={product.image} alt="icon" width={152} height={270} style={{ width: `${product.width}px`, height: `${product.height}px` }} />
                                   </div>
                                    <h2 className='font-mono text-3xl'>{product.title}</h2>
                                    <p className=' text-base max-w-xs px-2'>{product.description}</p>
                                    <p className='text-xl text-primary text-center'>{product.price}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductPage
