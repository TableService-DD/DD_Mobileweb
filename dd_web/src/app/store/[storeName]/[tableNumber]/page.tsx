import { tmpGetMenus } from "@/api/stocks";
import MenuCard from "@/components/MenuCard";
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
  return (
    <div>
      <h1>{storeName}</h1>
      <h1>{tableNumber}</h1>
      {menu.BURGER.map((item: FoodItem) => (
        <MenuCard key={item.foodId} menu={item} />
      ))}
    </div>
  );
}
export default page;
