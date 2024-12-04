import RCMCoffeeShopCard from "../_components/coffeeshop/RCMCoffeeShopCard";
import CoffeeShopCard from "../_components/coffeeshop/CoffeeShopCard";
import PagingComponent from "../_components/Pagination";
import { fetchFromAPI } from "@/utils/api";

interface CoffeeShopProps {
  searchParams: { page?: string; size?: string }; // Query parameters
}

const recommendedData: CoffeeShop[] = [
  {
    coffeeShopId: 2,
    name: "The Lazy House ",
    detailAddress: "Ngõ 200A Thái Thịnh, Láng Hạ, Đống Đa, Hà Nội ",
    coverImageLink: "https://s3.cloudfly.vn/dcpk-medias/1703041075902-43927528-0c9a-41c1-8aa9-c1752bdb915c.webp",
  },
  {
    coffeeShopId: 3,
    name: "Boja Café",
    detailAddress: "39 Nhật Chiêu, Tây Hồ, Hà Nội",
    coverImageLink: "https://s3.cloudfly.vn/dcpk-medias/1701597584-15228e24-5aa3-4b82-8905-b9f45402fc2c.webp",
  },
  {
    coffeeShopId: 4,
    name: "Nâu Cafe (Thái Hà)",
    detailAddress: "số 9 ngõ Thái Hà",
    coverImageLink: "https://s3.cloudfly.vn/dcpk-medias/1690301025-3b5a3e7b-4458-4316-9a57-814900460a21.webp",
  },
];

export default async function CoffeeShop({ searchParams }: CoffeeShopProps) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const size = parseInt(searchParams.size || "20", 10);

  let coffeeShops: CoffeeShop[] = [];
  let totalPages = 0;

  const data = await fetchFromAPI(`coffee-shops`, { params: { page: currentPage, size } });
  const response = await data.json();
  if (data.ok) {
    coffeeShops = response.data.data;
    totalPages = response.data.totalPages;
  }
  else console.error("Failed to fetch coffee shops:", response.message);


  return (
    <div>
      <div>
        <div className="text-tone-3 font-semibold mb-8">GOCOFFEE RECOMMENDS:</div>
        <div>
          {recommendedData.map((cs) => (
            <li key={cs.coffeeShopId} className="list-none">
              <RCMCoffeeShopCard
                coverImageLink={cs.coverImageLink}
                name={cs.name}
                detailAddress={cs.detailAddress}
                coffeeShopId={cs.coffeeShopId}
              />
            </li>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="text-tone-3 font-semibold mb-8">Other coffee shops:</div>
        {coffeeShops.length === 0 ? (
          <div className="text-center">No coffee shops available.</div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-8">
            {coffeeShops.map((cs) => (
              <li key={cs.coffeeShopId} className="list-none">
                <CoffeeShopCard coffeeShop={cs} />
              </li>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <PagingComponent total={totalPages} />
      </div>
    </div>
  );
}
