import { fetchFromAPI } from '@/utils/api';
import React, { cache } from 'react'
import Link from 'next/link';
import CoffeeShopCard from '../_components/coffeeshop/CoffeeShopCard';

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
    },
    {
        "coffeeShopId": 7,
        "name": "tô tô mùa hạ",
        "detailAddress": "8, Ngõ Lý Thường Kiệt",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1716316787511-b91d6232-c7da-47cb-8e7d-b3ce43c79648.webp"
    },
    {
        "coffeeShopId": 8,
        "name": "Là Việt (Láng Hạ)",
        "detailAddress": "Cuối ngõ 57 Láng Hạ",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301172-3da90bc6-2d71-417b-835a-85f579325e29.webp"
    },
    {
        "coffeeShopId": 9,
        "name": "Tiệm Tháng Năm",
        "detailAddress": "Số 11 ngõ 36 Láng Hạ (ngõ 9 Hoàng Ngọc Phách)",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301316-f6693980-1c1a-4c9e-8866-ee2a5a8255e7.webp"
    },
    {
        "coffeeShopId": 10,
        "name": "Vulab Coffee",
        "detailAddress": "30B Hạ Hồi",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1700711616-87f9d2b7-c785-4d5c-8de7-667f4c0143cf.jpg"
    },
    {
        "coffeeShopId": 11,
        "name": "Mêquila",
        "detailAddress": "16 Đường nội bộ Khu TT",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301094-7146915b-9477-4780-b30e-666baa224823.webp"
    },
    {
        "coffeeShopId": 12,
        "name": "ACID8 Specialty Coffee",
        "detailAddress": "34 Xóm Hà Hồi",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301203-02658c59-dca1-4615-802c-036d7b857ad6.webp"
    },
    {
        "coffeeShopId": 13,
        "name": "How Café",
        "detailAddress": "7A, ngõ 57 Láng Hạ",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690300824-6d0b9d6f-19f2-451f-9fdc-eeafb5418a2f.webp"
    },
    {
        "coffeeShopId": 14,
        "name": "La Mensa ",
        "detailAddress": "8 ngõ 165 Thái Hà",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301008-0f5c56aa-1ece-4aa4-991f-3cf26512c153.webp"
    },
    {
        "coffeeShopId": 15,
        "name": "Cafe Nhà 41 ",
        "detailAddress": "Số 41 ngõ 41 Thái Hà",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301314-b663c798-aded-4c45-b902-5c948dda82e8.webp"
    },
    {
        "coffeeShopId": 16,
        "name": "Gà Phê",
        "detailAddress": "20 ngõ 7, Thái Hà",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690300842-061e2bce-a4ca-43ba-b482-9cff07df630a.webp"
    },
    {
        "coffeeShopId": 17,
        "name": "Tám Space",
        "detailAddress": "8 Ngõ Xóm Hạ Hồi",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1712867417054-4cb5f879-3221-4d35-acac-9cc76702263d.webp"
    },
    {
        "coffeeShopId": 18,
        "name": "Backyard Coffee",
        "detailAddress": "33A Ngõ 41 Phố Thái Hà",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301350-85449fa9-4b97-4371-9804-c655b03e1938.webp"
    },
    {
        "coffeeShopId": 19,
        "name": "Chàm Cafe",
        "detailAddress": "28 ngõ Thái Hà",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1690301082-fed42be0-de9d-4f31-8e0a-c65fc1a0d98e.webp"
    },
    {
        "coffeeShopId": 20,
        "name": "Tay Mơ Pha Cà Phê",
        "detailAddress": "32 Cầu Am",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1712868444709-f3b04d34-b15c-4fd3-a595-bdfde4898638.webp"
    },
    {
        "coffeeShopId": 21,
        "name": "Two Trees",
        "detailAddress": " LK23 Lê Lai",
        "coverImageLink": "https://s3.cloudfly.vn/dcpk-medias/1700711997-fc35f6d3-dffc-4eb5-91df-81962aa199f9.jpg"
    }
]
const CoffeeShop = async () => {
    // const response = await fetchFromAPI(`coffee-shops`, { cache: "no-store" });
    // const coffeeShops = response.data;

    return (
        <div>
            <div className='text-tone-3 font-semibold mb-8'>
                GOCOFFEE RECOMMENDS:
            </div>
            <div>
            {data.map((cs: CoffeeShop) => (
                <li key={cs.coffeeShopId} className='list-none'>
                    <CoffeeShopCard
                        coverImageLink={cs.coverImageLink}
                        name={cs.name}
                        detailAddress={cs.detailAddress}
                        coffeeShopId={cs.coffeeShopId}
                    />
                </li>
            ))}
            </div>

        </div>
    )
}

export default CoffeeShop