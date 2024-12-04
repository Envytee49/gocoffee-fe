import Link from 'next/link'
import React from 'react'

interface CoffeeShop {
    coverImageLink: string;
    name: string;
    detailAddress: string;
    coffeeShopId: number;
}

const RCMCoffeeShopCard = ({ coverImageLink, name, detailAddress, coffeeShopId }: CoffeeShop) => {
    return (
        <Link href={`/coffee-shops/${coffeeShopId}`} className='flex flex-row borderrounded-lg shadow-lg mb-5 shadow-gray-300 hover:shadow-xl hover:shadow-gray-400'>
            <img src={coverImageLink} alt={name} width={200} height={200} className="cursor-pointer mr-3 rounded-lg" />
            <div className="w-full p-4">
                <div className='flex justify-between'>
                    <h1 className='text-lg font-semibold mb-2'>{name}</h1>
                    <button className='hover:bg-gray-200 p-1 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="#AF5F2A" ><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path></svg>
                    </button>
                </div>
                <h4 className='text-gray-text'>{detailAddress}</h4>
                <div className='left-0 w-full'>
                    <div className='ml-auto flex flex-row justify-center items-center gap-2 bg-tone-3 hover:bg-tone-2 text-white font-bold px-4 py-2 rounded-full w-32'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="white"><path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path></svg>
                        <span>Explore</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RCMCoffeeShopCard
