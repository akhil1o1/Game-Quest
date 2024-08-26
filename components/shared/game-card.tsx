import Link from "next/link";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { aoboshiOne } from "@/app/fonts";
import { Product } from "@/app/types";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Rating } from "./rating";

interface GameCardProps {
   product: Product;
}

export default function GameCard({ product }: GameCardProps) {
   return (
      <Card className="bg-[#FEF3BC] w-80 p-2 rounded-[10px]">
         <Link href={`/games/${product.id}`}>
            <div className="flex items-center rounded-full w-max gap-1 py-1 px-2 mb-32 bg-[#3D352A]">
               <div className="w-2 h-2 bg-[#00FF0A] drop-shadow-2xl shadow-2xl rounded-full" />
               <p className="text-xs text-white/80">1200 Online</p>
            </div>

            <h3
               className={cn(
                  "text-3xl text-[#281E1F] truncate ...",
                  aoboshiOne.className
               )}
            >
               {product.title}
            </h3>
            <Rating rating={product.rating} />
            <div className="flex items-center gap-1 text-sm text-[#FF1C1C]">
               {product.tags.length ? (
                  product.tags.splice(0, 2).map((tag) => (
                     <>
                        <div key={tag} className="w-1 h-1 bg-[#FF1C1C] rounded-full" />{" "}
                        {tag}
                     </>
                  ))
               ) : (
                  <>
                     <div className="w-1 h-1 bg-[#FF1C1C] rounded-full" />{" "}
                     {product.category}
                  </>
               )}
            </div>
            <p className="text-xs font-[500]">{product.shippingInformation}</p>
            <div className="flex items-center gap-2 mt-3">
               <div className="text-2xl font-semibold">${product.price}</div>
               <Button
                  variant={"custom"}
                  size={"sm"}
                  className="rounded-full w-full"
               >
                  Buy Now
               </Button>
            </div>
         </Link>
      </Card>
   );
}


