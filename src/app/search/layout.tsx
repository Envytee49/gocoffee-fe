import FilterBar from "../_components/coffeeshop/FilterBar";
import SearchBar from "../_components/coffeeshop/SearchBar";

export default function CoffeeShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="sticky top-0 left-0 z-20">
        <SearchBar />
        {/* <FilterBar /> */}
      </div>
      <div className="px-80 mt-10">
        {children}
      </div>
    </div>
  );
}
