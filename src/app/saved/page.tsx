import React from 'react'
import CoffeeShopCard from '../_components/coffeeshop/CoffeeShopCard'
const data: CoffeeShop[] = [
  {
    "coffeeShopId": 2,
    "name": "The Lazy House ",
    "detailAddress": "Ngõ 200A Thái Thịnh, Láng Hạ, Đống Đa, Hà Nội ",
    "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1703041075902-43927528-0c9a-41c1-8aa9-c1752bdb915c.webp"
  },
  {
    "coffeeShopId": 3,
    "name": "Boja Café",
    "detailAddress": "39 Nhật Chiêu, Tây Hồ, Hà Nội",
    "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1701597584-15228e24-5aa3-4b82-8905-b9f45402fc2c.webp"
  },
  {
    "coffeeShopId": 4,
    "name": "Nâu Cafe (Thái Hà)",
    "detailAddress": "số 9 ngõ Thái Hà",
    "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301025-3b5a3e7b-4458-4316-9a57-814900460a21.webp"
  },
  {
    "coffeeShopId": 5,
    "name": "THAIYEN CAFE (Thái Hà)",
    "detailAddress": "174 Thái Hà",
    "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1706736712227-34a3e117-ae93-446f-bdb4-d53640b5dfe5.webp"
  },
  {
    "coffeeShopId": 6,
    "name": "C’est Si Bon (cơ sở Thái Hà)",
    "detailAddress": "276 Thái Hà",
    "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690300880-c13199f2-1576-4d13-9064-49c8efd55db2.webp"
  }
]
const SavedCoffeeShop = () => {
  return (
    <div className='px-20 mt-10'>
      <p className='text-lg text-tone-2 font-semibold mb-4'>Saved coffee shops:</p>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-y-8'>
        {data.map((shop: CoffeeShop) => <CoffeeShopCard coffeeShop={shop} />)}
      </div>
    </div>

  )
}

export default SavedCoffeeShop