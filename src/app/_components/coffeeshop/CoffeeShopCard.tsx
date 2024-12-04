import Link from 'next/link'
import React from 'react'
interface CoffeeShopCardProps {
    coffeeShop: CoffeeShop
}
const CoffeeShopCard = ({ coffeeShop }: CoffeeShopCardProps) => {
    return (
        <div className="flex flex-col w-60 h-96 shadow-lg hover:shadow-2xl rounded-lg">
            <Link className="h-60 w-60" href={`/coffee-shops/${coffeeShop.coffeeShopId}`}>
                <img
                    className="object-cover w-full h-full rounded-lg"
                    src={coffeeShop.coverImageLink}
                    alt={`${coffeeShop.name} cover`}
                />
            </Link>
            <div className="bg-white max-w-full flex flex-col flex-wrap">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{coffeeShop.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{coffeeShop.detailAddress}</p>
                <Link href="#" className="block mt-auto w-fit px-2 py-1 text-white bg-tone-3 rounded-full hover:bg-tone-2 ">
                    Explore
                </Link>
            </div>
        </div>

    )
}

export default CoffeeShopCard