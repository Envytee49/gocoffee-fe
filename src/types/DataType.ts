interface Image {
    path: string;
    imageType: "COVER" | "OVERVIEW";
}

interface Tag {
    id: number;
    name: string;
}

interface CoffeeShopDetail {
    name: string;
    detailAddress: string;
    isOpening: boolean;
    openTime: string;
    closeTime: string;
    averagePrice: number;
    parking: string;
    hotline: string | null;
    description: string;
    images: Image[];
    purposes: string | null;
    tags: Tag[];
}
interface Review {
    name: string;
    rating: number;
    review: string;
}

interface CoffeeShop {
    coffeeShopId: number;
    name: string;
    detailAddress: string;
    coverImageLink: string;
}