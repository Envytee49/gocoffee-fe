import Carousel from '@/app/_components/Carousel';
import ReviewCard from '@/app/_components/coffeeshopdetail/ReviewCard';
import { fetchFromAPI } from '@/utils/api';

interface CoffeeShopProps {
  params: { id: number };
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
const data: CoffeeShopDetail = {
  name: "Nâu Cafe (Thái Hà)",
  detailAddress: "Thành phố Hà Nội, Quận Đống Đa, Phường Trung Liệt, số 9 ngõ Thái Hà",
  isOpening: true,
  openTime: "07:00 AM",
  closeTime: "08:00 PM",
  averagePrice: 37500,
  parking: "Trước cửa quán, vỉa hè đối diện ( khoá cổ cho an toàn nhé)",
  hotline: null,
  description: "<p><strong>Không gian:</strong></p><ul><li>Tầng một là bàn ghế thấp, hợp để trò chuyện.</li><li>Tầng 2 phục vụ cho học tập, làm việc với bàn ghế cao, bàn dài học nhóm.</li></ul><p><strong>Đồ uống: </strong></p><ul><li>Có list đồ Nâu khá hay, dễ nhớ, dễ ấn tượng.</li><li>Mình có gọi Nâu lừa (thực chất là cà phê cốt dừa) uống chất lượng nhé! Không quá nhiều, thơm vị cà phê, vị dừa, đá tan vừa đủ để cả cốc k bị nhạt! Uống hết cốc thì vị chua chua vẫn đọng ở họng, dừa thơm trong miệng!</li></ul><p><strong>Gợi ý trải nghiệm:</strong></p><ul><li>Nâu cafe là địa điểm đáng để quay lại vì đồ uống tốt.</li></ul>",
  images: [
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690301025-3b5a3e7b-4458-4316-9a57-814900460a21.webp",
      imageType: "COVER"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690290239-746e1099-cb22-4b4b-a5e1-ff182a7969bf.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690289615-64703574-a44c-445b-82ef-1185d9f1ebea.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690289992-8b1414bb-2c79-4ea1-8f90-babe765db7c9.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690280422-f2554ff2-0f35-4c84-be3b-09873debdeb3.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690280949-230c1838-17c8-4600-aed1-71e1d2e33814.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690281129-105f6c61-4803-4d90-a419-964574cee26b.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690280096-cfed7a42-e87a-4294-8f8a-a6bdb8a7c6c4.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690291835-9cbe7dfa-85b3-4644-8abf-d1d61247fa3e.webp",
      imageType: "OVERVIEW"
    },
    {
      path: "https://s3.cloudfly.vn/dcpk-medias/1690294024-4a4ad263-af7a-4f1a-823c-aee6a2cb53e5.webp",
      imageType: "OVERVIEW"
    }
  ],
  purposes: null,
  tags: []
};

const CoffeeShopDetail = async ({ params }: CoffeeShopProps) => {

  // const response = await fetchFromAPI(`coffee-shops/${params.id}`);

  return (
    <div className='px-60 mt-10'>
      <div className='flex flex-row'>
        <div>
          <Carousel images={data.images} />
        </div>
        <div className='flex flex-col ml-3'>
          <div>{data.name}</div>
          <div>{data.detailAddress}</div>
          <div>{data.isOpening ? "yes" : "no"}: {data.openTime}-{data.closeTime}</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="font-semibold">Average price</div>
            <div>{data.averagePrice}</div>

            <div className="font-semibold">Parking</div>
            <div>{data.parking}</div>

            <div className="font-semibold">Hotline</div>
            <div>{data.hotline}</div>

            <div className="font-semibold">Hashtags</div>
            <div>hello</div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div className='flex flex-row space-x-4 mt-5'>
            <button
              className="px-8 py-2 rounded-full font-semibold bg-tone-3 hover:bg-tone-2 text-white"
            >
              Like
            </button>
            <button
              className="px-8 py-2 rounded-full font-semibold bg-tone-3 hover:bg-tone-2 text-white"
            >
              Share
            </button>
            <button
              className="px-8 py-2 rounded-full font-semibold bg-tone-3 hover:bg-tone-2 text-white"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <div>Review:
        <div>
          {reviewData.map((review: Review) => 
            <ReviewCard name= {review.name} rating={review.rating} review={review.review}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopDetail;
