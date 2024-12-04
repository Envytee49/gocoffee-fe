import { notFound } from "next/navigation";
import Carousel from "@/app/_components/Carousel";
import ReviewCard from "@/app/_components/coffeeshopdetail/ReviewCard";
import PagingComponent from "@/app/_components/Pagination";
import { fetchFromAPI } from "@/utils/api";

interface CoffeeShopProps {
  params: { id: string }; // Dynamic segment [id]
  searchParams: { page?: string; size?: string }; // Query parameters
}
const reviewData: Review[] = [
  {
    name: "Thuan",
    rating: 5,
    review: "good"
  },
  {
    name: "Hung",
    rating: 4.5,
    review: "good"
  },
  {
    name: "Tuan",
    rating: 1,
    review: "bad"
  },
  {
    name: "Thuan",
    rating: 3,
    review: "average"
  },
]
export default async function CoffeeShopDetail({ params, searchParams }: CoffeeShopProps) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const size = parseInt(searchParams.size || "20", 10);

  let coffeeShopDetail: CoffeeShopDetail;
  // let reviews = [];
  let totalPages = 0;

  const response = await fetchFromAPI(`coffee-shops/${params.id}`);
  const data = await response.json();
  if (response.ok) {
    coffeeShopDetail = data.data;
    // reviews = response.data.reviews;
    totalPages = data.data.totalPages;
  }else notFound(); // Renders a 404 page if the API fails

  return (
    <div className="px-60 mt-10 bg-tone-1">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Carousel images={coffeeShopDetail.images || []} />
        </div>
        <div className="flex flex-col ml-3">
          <div className="font-bold text-2xl">{coffeeShopDetail.name}</div>
          <div>{coffeeShopDetail.detailAddress}</div>
          <div>
            {coffeeShopDetail.isOpening ? "yes" : "no"}: {coffeeShopDetail.openTime}-{coffeeShopDetail.closeTime}
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div className="font-semibold">Average price</div>
            <div>{coffeeShopDetail.averagePrice}</div>
            <div className="font-semibold">Parking</div>
            <div>{coffeeShopDetail.parking}</div>
            <div className="font-semibold">Hotline</div>
            <div>{coffeeShopDetail.hotline}</div>
            <div className="font-semibold">Hashtags</div>
            <div>hello</div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: coffeeShopDetail.description || "" }}
          />
        </div>
      </div>
      <div className="bg-tone-1">
        <div> REVIEWS:
          {reviewData.map((review: Review) => (
            <ReviewCard key={review.name} name={review.name} rating={review.rating} review={review.review} />
          ))}
        </div>
        <div className="flex justify-center">
          <PagingComponent total={totalPages} />
        </div>
      </div>
    </div>
  );
}
