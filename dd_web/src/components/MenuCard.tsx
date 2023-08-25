import { FoodItem } from "@/util/types";
import Image from "next/image";

function MenuCard({ menu }: { menu: FoodItem }) {
  return (
    <div>
      <h1>{menu.foodId}</h1>
      <div className="w-24 h-24 relative">
        <Image
          src={menu.image}
          alt={menu.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default MenuCard;
