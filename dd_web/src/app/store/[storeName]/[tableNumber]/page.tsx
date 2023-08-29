import { tmpGetMenus } from "@/api/stocks";
import MenuCard from "@/components/MenuCard";
import StoreHeader from "@/components/StoreHeader";
import { FoodItem, Menu } from "@/util/types";

type Props = {
  params: {
    storeName: string;
    tableNumber: string;
  };
  menu: Menu;
};
async function page({ params: { storeName, tableNumber } }: Props) {
  const menu = await tmpGetMenus();
  const category: string[] = [
    "SET",
    "MAIN",
    "PREMIUM",
    "SALAD",
    "SIDE",
    "DRINK",
  ];
  return (
    <section className="py-[10px]">
      <div className="px-[10px]">
        <StoreHeader title={storeName} tableNumber={tableNumber} />
      </div>
      <div className="grid grid-cols-4 my-4 font-bold">
        {category.map((item: string, index: number) => (
          <button key={item}>{item}</button>
        ))}
      </div>
      <div className="w-full h-[2px] bg-primary" />
      <div className="flex flex-col gap-1">
        {[...menu.BURGER, ...menu.SANDWICH].map((item: FoodItem) => (
          <MenuCard key={item.foodId} menu={item} />
        ))}
      </div>
    </section>
  );
}
export default page;
