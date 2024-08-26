import Link from "next/link";
import axios from "axios";
import { MoveRight } from "lucide-react";

import { pressStart } from "@/app/fonts";
import { cn } from "@/lib/utils";

import { Product } from "@/app/types";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import GameCard from "../shared/game-card";

async function getFirstFiveProducts() {
   try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products.slice(0, 5);
      // console.log(products);
      return products;
   } catch (error) {
      console.error("Error fetching products:", error);
      return [];
   }
}

export default async function TrendingGames() {
   const products = await getFirstFiveProducts() as Product[];

   return (
      <section className="py-10 p-4 md:pl-40  bg-[#3D352A]">
         <div className="flex justify-between flex-wrap">
            <h2
               className={cn(
                  "uppercase text-4xl text-[#DAB785]",
                  pressStart.className
               )}
            >
               Most trending
            </h2>
            <Link
               className="uppercase flex items-center justify-between text-lg gap-2 text-white/80 hover:text-[#E58E27] transition hover:underline group"
               href={"/games"}
            >
               Go to Game Store{" "}
               <MoveRight className="w-6 text-white group-hover:text-[#E58E27] transition" />
            </Link>
         </div>
         <ScrollArea className="w-full mt-6">
            <div className="flex w-max space-x-4 mb-4">
               {products.map((product: Product) => (
                  <GameCard product={product} key={product.id} />
               ))}
            </div>
            <ScrollBar orientation="horizontal" />
         </ScrollArea>
      </section>
   );
}
